"use strict";
// Starcraft 2 Game Data API documentation: https://develop.battle.net/documentation/starcraft-2/game-data-apis
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
class Starcraft2GameData {
    constructor(axiosInstance, locale) {
        this.gameBaseUrlPath = '/data/sc2';
        this.axios = axiosInstance;
        this.locale = locale;
    }
    getLeagueData(seasonId, queueId, teamType, leagueId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/league/${seasonId}/${queueId}/${teamType}/${leagueId}`, 'Error fetching the league data.');
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
                throw new Error(`Starcraft 2 Game Data Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = Starcraft2GameData;
