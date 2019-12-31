"use strict";
// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
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
class WowProfileData {
    constructor(axiosInstance, defaultAxiosParams, origin) {
        this.gameBaseUrlPath = '/profile/wow/character';
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.namespace = `profile-${origin}`;
    }
    getCharacterAchievements(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/achievements`, 'Error fetching character achievements.');
        });
    }
    getCharacterAppearance(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/appearance`, 'Error fetching character appearance.');
        });
    }
    getCharacterCollectionsIndex(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections`, 'Error fetching character collections.');
        });
    }
    getCharacterMountsCollection(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/mounts`, 'Error fetching character mounts collection.');
        });
    }
    getCharacterPetsCollection(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/pets`, 'Error fetching character pets collection.');
        });
    }
    getCharacterEquipment(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/equipment`, 'Error fetching character equipment.');
        });
    }
    getCharacterHunterPets(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/hunter-pets`, 'Error fetching character hunter pets.');
        });
    }
    getCharacterMedia(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/character-media`, 'Error fetching character media.');
        });
    }
    getCharacterMythicKeystoneProfile(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile`, 'Error fetching character mythic keystone profile.');
        });
    }
    getCharacterMythicKeystoneSeasonDetails(realmSlug, characterName, seasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`, 'Error fetching character mythic keystone profile for specified season.');
        });
    }
    getCharacterSummary(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}`, 'Error fetching character summary.');
        });
    }
    getCharacterPvpBracketStatistics(realmSlug, characterName, pvpBracket) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-bracket/${pvpBracket}`, 'Error fetching character pvp bracket statistics.');
        });
    }
    getCharacterPvpSummary(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-summary`, 'Error fetching character pvp summary.');
        });
    }
    getCharacterReputations(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/reputations`, 'Error fetching character reputations.');
        });
    }
    getCharacterStatistics(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/statistics`, 'Error fetching character statistics.');
        });
    }
    getCharacterTitles(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/titles`, 'Error fetching character titles.');
        });
    }
    getGuildSummary(realmSlug, guildName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/data/wow/guild//${realmSlug}/${guildName}`, 'Error fetching guild summary.');
        });
    }
    getGuildAchievements(realmSlug, guildName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/data/wow/guild/${realmSlug}/${guildName}/achievements`, 'Error fetching guild achievements.');
        });
    }
    getGuildRoster(realmSlug, guildName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/data/wow/guild/${realmSlug}/${guildName}`, 'Error fetching guild roster.');
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(apiUrl), {
                    params: Object.assign({ namespace: this.namespace }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Profile Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = WowProfileData;
