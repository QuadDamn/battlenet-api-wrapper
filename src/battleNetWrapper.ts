import axios, {AxiosInstance} from "axios";

import Diablo3Community from './d3/community';
import Diablo3GameData from './d3/gameData';
import HearthstoneGameData from './hearthstone/gameData';
import Starcraft2Community from './sc2/community';
import Starcraft2GameData from './sc2/gameData';
import WowClassicGameData from './wowClassic/gameData';
import WowProfileData from './wow/profileData';
import WowGameData from './wow/gameData';

class BattleNetWrapper {

    public WowCommunity: object;
    public WowGameData: object;
    public WowProfileData: object;
    public WowClassicGameData: object;
    public HearthstoneGameData: object;
    public Starcraft2Community: object;
    public Starcraft2GameData: object;
    public Diablo3Community: object;
    public Diablo3GameData: object;

    private clientId: string;
    private clientSecret: string;
    private origin: string;
    private locale: string;
    private oauthToken: string;
    private axios: AxiosInstance;
    private defaultAxiosParams: object;
    private originObject: object = {
        us:  {
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

    // Unused constructor as we needed the ability to async the initialization
    // and await all of the underlying promises.
    constructor() {}

    async init(clientId: string, clientSecret: string, origin: string = 'us', locale: string = 'en_US') {
        if (!clientId) throw new Error('You are missing your Client ID in the passed parameters. This parameter is required.');
        if (!clientSecret) throw new Error('You are missing your Client Secret in the passed parameters. This parameter is required.');

        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.origin = origin;
        this.locale = locale;

        this.defaultAxiosParams = {
            locale: this.locale
        };

        // Handles the fetching of a new OAuth token from the Battle.net API
        // and then creates a reusable instance of axios for all subsequent API requests.
        try {
            this.axios = axios.create({
                baseURL: this.originObject[this.origin].hostname,
                params: this.defaultAxiosParams
            });

            await this._getToken();
            this.axios.defaults.headers.common['Authorization'] = `Bearer ${this.oauthToken}`;
        } catch (error) {
            console.log(error);
        }

        this.Diablo3Community = new Diablo3Community(this.axios);
        this.Diablo3GameData = new Diablo3GameData(this.axios);
        this.HearthstoneGameData = new HearthstoneGameData(this.axios, this.defaultAxiosParams);
        this.Starcraft2Community = new Starcraft2Community(this.axios);
        this.Starcraft2GameData = new Starcraft2GameData(this.axios);
        // this.WowCommunity = new WowCommunity(this.axios, this.origin);
        this.WowGameData = new WowGameData(this.axios, this.defaultAxiosParams, this.origin);
        this.WowProfileData = new WowProfileData(this.axios, this.defaultAxiosParams, this.origin);
        this.WowClassicGameData = new WowClassicGameData(this.axios, this.defaultAxiosParams, this.origin);
    }

    /**
     * Gets a new access token for all of the subsequent API requests.
     * Every invocation of this class will create a new access token,
     * so you should never have to worry about the token ever expiring.
     *
     * @private
     */
    async _getToken() {
        try {
            const response = await axios.get(`https://${this.origin}.battle.net/oauth/token`, {
                auth: {
                    username: this.clientId,
                    password: this.clientSecret,
                },
                params: {
                    grant_type: 'client_credentials',
                },
            });

            this.oauthToken = response.data.access_token;
        } catch (error) {
            console.log(error);
            throw new Error(`Problem getting the OAuth token from the Blizzard API.  
                            Please check that your Client ID and Secret are correct.`);
        }
    }
}

module.exports = BattleNetWrapper;