"use strict";
// Diablo 3 Game Data API documentation: https://develop.battle.net/documentation/diablo-3/game-data-apis
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
class Diablo3GameData {
    constructor(axiosInstance) {
        this.gameBaseUrlPath = '/data/d3';
        this.axios = axiosInstance;
    }
    /**
     * Returns an index of available seasons.
     */
    getSeasonIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameBaseUrlPath}/season`));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Game Data Error :: Error fetching the season index.`);
            }
        });
    }
    /**
     * Returns a leaderboard list for the specified season.
     *
     * @param seasonId The season for the leaderboard list; get a list of seasons with `getSeasonIndex`.
     */
    getSeason(seasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameBaseUrlPath}/season/${seasonId}`));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified season.`);
            }
        });
    }
    /**
     * Returns a the specified leaderboard for the specified season.
     *
     * @param seasonId The season for the leaderboard; get a list of seasons with `getSeasonIndex`.
     * @param leaderboardId The leaderboard to retrieve; get a list of leaderboards with `getSeason`.
     */
    getSeasonLeaderboard(seasonId, leaderboardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameBaseUrlPath}/season/${seasonId}/leaderboard/${leaderboardId}`));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified season leaderboard.`);
            }
        });
    }
    /**
     * Returns an index of available eras.
     */
    getEraIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameBaseUrlPath}/era`));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Game Data Error :: Error fetching the era index.`);
            }
        });
    }
    /**
     * Returns a leaderboard list for a particular era.
     *
     * @param eraId The era to retrieve; get a list of eras with `getEraIndex`.
     */
    getEra(eraId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameBaseUrlPath}/era/${eraId}`));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified era.`);
            }
        });
    }
    /**
     * Returns the specified leaderboard for the specified era.
     *
     * @param eraId The era for the leaderboard; get a list of eras with `getEraIndex`.
     * @param leaderboardId The leaderboard to retrieve; get a list of leaderboards with `getEra`.
     */
    getEraLeaderboard(eraId, leaderboardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(`${this.gameBaseUrlPath}/era/${eraId}/leaderboard/${leaderboardId}`));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified era leaderboard.`);
            }
        });
    }
}
exports.default = Diablo3GameData;
