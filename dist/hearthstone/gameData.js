"use strict";
// Hearthstone Game Data API documentation: https://develop.battle.net/documentation/hearthstone/game-data-apis
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
class HearthstoneGameData {
    constructor(axiosInstance, locale, defaultAxiosParams) {
        this.gameBaseUrlPath = '/hearthstone';
        this.axios = axiosInstance;
        this.locale = locale;
        this.defaultAxiosParams = defaultAxiosParams;
    }
    /****************************
     * Cards API
     ****************************/
    // async searchCards(defaultParams: object, set: string, classSlug: string, manaCost: string, attack: string, health: string,
    //                   collectible: string, rarity: string, type: string, minionType: string, keyword: string, textFilter: string,
    //                   page: number, pageSize: number, sort: string, order: string): Promise<object> {
    //     try {
    //         const response = await this.axios.get(`${this.gameBaseUrlPath}/cards`, {
    //
    //
    //             ...this.defaultAxiosParams
    //
    //         });
    //         return response.data;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error('Error fetching the season index.');
    //     }
    // }
    getCard(cardSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/cards/${cardSlug}`, 'Error fetching the specified card.');
        });
    }
    /****************************
     * Decks API
     ****************************/
    getDeck(deckCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/deck/${deckCode}`, 'Error fetching the specified deck.');
        });
    }
    /****************************
     * Metadata API
     ****************************/
    getMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/metadata`, 'Error fetching the metadata.');
        });
    }
    getSpecificMetadata(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/metadata/${type}`, 'Error fetching the specified metadata.');
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(apiUrl);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Hearthstone Game Data Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = HearthstoneGameData;
