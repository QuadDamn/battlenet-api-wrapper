"use strict";
// Starcraft 2 Community API documentation: https://develop.battle.net/documentation/starcraft-2/community-apis
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
class Starcraft2Community {
    constructor(axiosInstance, locale) {
        this.gameBaseUrlPath = '/sc2';
        this.axios = axiosInstance;
        this.locale = locale;
    }
    /****************************
     * Profile API
     ****************************/
    /**
     * Returns all static SC2 profile data (achievements, categories, criteria, and rewards).
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    getStaticProfileData(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/static/profile/${regionId}`, 'Error fetching static profile data for the specified region.');
        });
    }
    /**
     * Returns metadata for an individual's profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    getMetadata(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/static/profile/${regionId}/${realmId}/${profileId}`, 'Error fetching profile data for the specified region.');
        });
    }
    /**
     * Returns data about an individual SC2 profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    getProfile(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}`, 'Error fetching specified profile data.');
        });
    }
    /**
     * Returns a ladder summary for an individual SC2 profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    getLadderSummary(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/summary`, 'Error fetching specified ladder summary.');
        });
    }
    /**
     * Returns data about an individual profile's ladder.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     * @param ladderId The ID of the ladder for which to retrieve data.
     */
    getLadder(regionId, realmId, profileId, ladderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}`, 'Error fetching specified ladder.');
        });
    }
    /****************************
     * Ladder API
     ****************************/
    /**
     * Returns ladder data for the current season's grandmaster leaderboard.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    getGrandmasterLeaderboard(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/ladder/grandmaster/${regionId}`, 'Error fetching static profile data for the specified region.');
        });
    }
    /**
     * Returns data about the current season.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    getSeason(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/ladder/season/${regionId}`, 'Error fetching static profile data for the specified region.');
        });
    }
    /****************************
     * Account API
     ****************************/
    /**
     * Returns metadata for an individual's account.
     *
     * @param accountId The ID of the account for which to retrieve data.
     */
    getPlayer(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/player/${accountId}`, 'Error fetching metadata for player account.');
        });
    }
    /****************************
     * Legacy API
     ****************************/
    /**
     * Retrieves data about an individual SC2 profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    getLegacyProfile(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}`, 'Error fetching specified legacy profile data.');
        });
    }
    /**
     * Retrieves data about an individual SC2 profile's ladders.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    getLegacyProfileLadders(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`, 'Error fetching specified legacy profile ladder data.');
        });
    }
    /**
     * Returns data about an individual SC2 profile's match history.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    getLegacyProfileMatches(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/matches`, 'Error fetching specified legacy profile match data.');
        });
    }
    /**
     * Returns data about the achievements available in SC2.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    getLegacyAchievements(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/legacy/data/achievements/${regionId}`, 'Error fetching specified legacy achievement data.');
        });
    }
    /**
     * Returns data about the rewards available in SC2.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    getLegacyRewards(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/legacy/data/rewards/${regionId}`, 'Error fetching specified legacy rewards data.');
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(apiUrl));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Starcraft 2 Community Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = Starcraft2Community;
