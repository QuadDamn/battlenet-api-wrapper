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
    constructor(axiosInstance, defaultAxiosParams, locale) {
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
    /**
     * Returns the card with an ID or slug that matches the one you specify.
     *
     * @param cardSlug An ID or slug that uniquely identifies a card. You can discover these values by using the `/hearthstone/cards` search endpoint.
     */
    getCard(cardSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/cards/${cardSlug}`, 'Error fetching the specified card.');
        });
    }
    /****************************
     * Decks API
     ****************************/
    /**
     * Finds a deck by its deck code.
     *
     * @param deckCode A code that identifies a deck. You can copy one from the game or various Hearthstone websites.
     */
    getDeck(deckCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/deck/${deckCode}`, 'Error fetching the specified deck.');
        });
    }
    /****************************
     * Metadata API
     ****************************/
    /**
     * Returns information about the categorization of cards. Metadata includes the card set,
     * set group (for example, Standard or Year of the Dragon), rarity, class, card type, minion type, and keywords.
     */
    getMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/metadata`, 'Error fetching the metadata.');
        });
    }
    /**
     * Returns information about just one type of metadata.
     *
     * @param type The type of the metadata to retrieve. Valid values include sets, setGroups, types,
     * rarities, classes, minionTypes, and keywords.
     */
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
                const response = yield this.axios.get(encodeURI(apiUrl));
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
