"use strict";
// WoW Profile Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/profile-apis
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
    /**
     * Returns a summary of the achievements a character has completed.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterAchievements(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/achievements`, 'Error fetching character achievements.');
        });
    }
    /**
     * Returns a summary of a character's appearance settings.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterAppearance(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/appearance`, 'Error fetching character appearance.');
        });
    }
    /**
     * Returns an index of collection types for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterCollectionsIndex(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections`, 'Error fetching character collections.');
        });
    }
    /**
     * Returns a summary of the mounts a character has obtained.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterMountsCollection(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/mounts`, 'Error fetching character mounts collection.');
        });
    }
    /**
     * Returns a summary of the battle pets a character has obtained.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterPetsCollection(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/pets`, 'Error fetching character pets collection.');
        });
    }
    /**
     * Returns a summary of the items equipped by a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterEquipment(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/equipment`, 'Error fetching character equipment.');
        });
    }
    /**
     * If the character is a hunter, returns a summary of the character's hunter pets.
     * Otherwise, returns an HTTP 404 Not Found error.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterHunterPets(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/hunter-pets`, 'Error fetching character hunter pets.');
        });
    }
    /**
     * Returns a summary of the media assets available for a character (such as an avatar render).
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterMedia(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/character-media`, 'Error fetching character media.');
        });
    }
    /**
     * Returns the Mythic Keystone profile index for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterMythicKeystoneProfile(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile`, 'Error fetching character mythic keystone profile.');
        });
    }
    /**
     * Returns the Mythic Keystone season details for a character.
     * Returns a **404 Not Found** for characters that have not yet completed a Mythic Keystone dungeon for the specified season.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterMythicKeystoneSeasonDetails(realmSlug, characterName, seasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`, 'Error fetching character mythic keystone profile for specified season.');
        });
    }
    /**
     * Returns a profile summary for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterSummary(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}`, 'Error fetching character summary.');
        });
    }
    /**
     * Returns the PvP bracket statistics for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     * @param pvpBracket The PvP bracket type (1v1, 3v3, etc).
     *
     */
    getCharacterPvpBracketStatistics(realmSlug, characterName, pvpBracket) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-bracket/${pvpBracket}`, 'Error fetching character pvp bracket statistics.');
        });
    }
    /**
     * Returns a PvP summary for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterPvpSummary(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-summary`, 'Error fetching character pvp summary.');
        });
    }
    /**
     * Returns a summary of a character's reputations.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterReputations(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/reputations`, 'Error fetching character reputations.');
        });
    }
    /**
     * Returns a summary of a character's specializations.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterSpecializations(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/specializations`, 'Error fetching character specializations.');
        });
    }
    /**
     * Returns a statistics summary for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterStatistics(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/statistics`, 'Error fetching character statistics.');
        });
    }
    /**
     * Returns a summary of titles a character has obtained.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    getCharacterTitles(realmSlug, characterName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/${realmSlug}/${characterName}/titles`, 'Error fetching character titles.');
        });
    }
    /**
     * Returns a single guild summary by its name and realm.
     *
     * @param realmSlug The slug of the realm.
     * @param guildName The slug of the guild.
     *
     */
    getGuildSummary(realmSlug, guildName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/data/wow/guild//${realmSlug}/${guildName}`, 'Error fetching guild summary.');
        });
    }
    /**
     * Returns a single guild's achievements by name and realm.
     *
     * @param realmSlug The slug of the realm.
     * @param guildName The slug of the guild.
     *
     */
    getGuildAchievements(realmSlug, guildName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/data/wow/guild/${realmSlug}/${guildName}/achievements`, 'Error fetching guild achievements.');
        });
    }
    /**
     * Returns a single guild's roster by its name and realm.
     *
     * @param realmSlug The slug of the realm.
     * @param guildName The slug of the guild.
     *
     */
    getGuildRoster(realmSlug, guildName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`/data/wow/guild/${realmSlug}/${guildName}/roster`, 'Error fetching guild roster.');
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
                if (error.response.status === 304)
                    console.log(error.response.statusText);
                if (error.response.status === 404)
                    console.log(error.response.statusText);
                if (error.response.status === 403)
                    console.log(error.response.statusText);
                throw new Error(`WoW Game Data Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = WowProfileData;
