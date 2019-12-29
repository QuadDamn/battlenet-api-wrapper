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
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getStaticProfileData(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/static/profile/${regionId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching static profile data for the specified region.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getMetadata(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/static/profile/${regionId}/${realmId}/${profileId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching profile data for the specified region.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getProfile(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified profile data.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getLadderSummary(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/summary`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified ladder summary.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getLadder(regionId, realmId, profileId, ladderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified ladder.');
            }
        });
    }
    /****************************
     * Ladder API
     ****************************/
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getGrandmasterLeaderboard(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/ladder/grandmaster/${regionId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching static profile data for the specified region.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getSeason(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/ladder/season/${regionId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching static profile data for the specified region.');
            }
        });
    }
    /****************************
     * Account API
     ****************************/
    getPlayer(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/player/${accountId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching metadata for player account.');
            }
        });
    }
    /****************************
     * Legacy API
     ****************************/
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getLegacyProfile(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy profile data.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getLegacyProfileLadders(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy profile ladder data.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getLegacyProfileMatches(regionId, realmId, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/matches`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy profile match data.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getLegacyAchievements(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/legacy/data/achievements/${regionId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy achievement data.');
            }
        });
    }
    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    getLegacyRewards(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/legacy/data/rewards/${regionId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy rewards data.');
            }
        });
    }
}
exports.default = Starcraft2Community;
