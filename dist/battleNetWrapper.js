"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const community_1 = require("./d3/community");
const gameData_1 = require("./d3/gameData");
const gameData_2 = require("./hearthstone/gameData");
const community_2 = require("./sc2/community");
const gameData_3 = require("./sc2/gameData");
const profileData_1 = require("./wow/profileData");
const gameData_4 = require("./wow/gameData");
const community_3 = require("./wow/community");
const gameData_5 = require("./wowClassic/gameData");
class BattleNetWrapper {
    // Unused constructor as we needed the ability to async the initialization
    // and await all of the underlying promises.
    constructor() {
        this.originObject = {
            us: {
                hostname: 'https://us.api.blizzard.com',
                defaultLocale: 'en_US',
                locales: ['en_US', 'es_MX', 'pt_BR', 'multi'],
            },
            eu: {
                hostname: 'https://eu.api.blizzard.com',
                defaultLocale: 'en_GB',
                locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
            },
            sea: {
                hostname: 'https://sea.api.blizzard.com',
                defaultLocale: 'en_US',
                locales: ['en_US', 'multi'],
            },
            kr: {
                hostname: 'https://kr.api.blizzard.com',
                defaultLocale: 'ko_KR',
                locales: ['ko_KR', 'en_GB', 'en_US', 'multi'],
            },
            tw: {
                hostname: 'https://tw.api.blizzard.com',
                defaultLocale: 'zh_TW',
                locales: ['zh_TW', 'en_GB', 'en_US', 'multi'],
            },
            cn: {
                hostname: 'https://gateway.battlenet.com.cn',
                defaultLocale: 'zh_CN',
                locales: ['zh_CN', 'en_GB', 'en_US', 'multi'],
            }
        };
    }
    init(clientId, clientSecret, providedToken, origin = 'us', locale = 'en_US') {
        return __awaiter(this, void 0, void 0, function* () {
            this.origin = origin;
            this.locale = locale;
            this.defaultAxiosParams = {
                locale: this.locale
            };
            if (!providedToken) {
                if (!clientId)
                    throw new Error('You are missing your Client ID in the passed parameters. This parameter is required.');
                if (!clientSecret)
                    throw new Error('You are missing your Client Secret in the passed parameters. This parameter is required.');
                this.clientId = clientId;
                this.clientSecret = clientSecret;
            }
            // Handles the fetching of a new OAuth token from the Battle.net API
            // and then creates a reusable instance of axios for all subsequent API requests.
            try {
                this.axios = axios_1.default.create({
                    baseURL: this.originObject[this.origin].hostname,
                    params: this.defaultAxiosParams
                });
                if (providedToken) {
                    this.axios.defaults.headers.common['Authorization'] = `Bearer ${providedToken}`;
                }
                else {
                    yield this.getToken();
                    this.axios.defaults.headers.common['Authorization'] = `Bearer ${this.oauthToken}`;
                }
            }
            catch (error) {
                console.log(error);
            }
            this.Diablo3Community = new community_1.default(this.axios);
            this.Diablo3GameData = new gameData_1.default(this.axios);
            this.HearthstoneGameData = new gameData_2.default(this.axios, this.defaultAxiosParams);
            this.Starcraft2Community = new community_2.default(this.axios);
            this.Starcraft2GameData = new gameData_3.default(this.axios);
            this.WowCommunity = new community_3.default(this.axios, this.defaultAxiosParams);
            this.WowGameData = new gameData_4.default(this.axios, this.defaultAxiosParams, this.origin);
            this.WowProfileData = new profileData_1.default(this.axios, this.defaultAxiosParams, this.origin);
            this.WowClassicGameData = new gameData_5.default(this.axios, this.defaultAxiosParams, this.origin);
        });
    }
    // Gets a new access token for all of the subsequent API requests.
    // Every invocation of this class will create a new access token,
    // so you should never have to worry about the token ever expiring.
    getToken(clientId, clientSecret, origin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://${(origin) ? origin : this.origin}.battle.net/oauth/token`, {
                    auth: {
                        username: (clientId) ? clientId : this.clientId,
                        password: (clientSecret) ? clientSecret : this.clientSecret,
                    },
                    params: {
                        grant_type: 'client_credentials',
                    },
                });
                this.oauthToken = response.data.access_token;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Problem getting the OAuth token from the Blizzard API.  
                            Please check that your Client ID and Secret are correct.`);
            }
        });
    }
}
module.exports = BattleNetWrapper;
