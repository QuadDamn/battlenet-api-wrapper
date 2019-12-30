// Hearthstone Game Data API documentation: https://develop.battle.net/documentation/hearthstone/game-data-apis

import {AxiosInstance} from "axios";

class HearthstoneGameData {
    private readonly axios: AxiosInstance;
    private readonly locale: string;
    private readonly defaultAxiosParams: object;
    private readonly gameBaseUrlPath: string = '/hearthstone';

    constructor(axiosInstance: AxiosInstance, locale: string, defaultAxiosParams: object) {
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

    async getCard(cardSlug: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/cards/${cardSlug}`,
            'Error fetching the specified card.'
        );
    }

    /****************************
     * Decks API
     ****************************/

    async getDeck(deckCode: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/deck/${deckCode}`,
            'Error fetching the specified deck.'
        );
    }

    /****************************
     * Metadata API
     ****************************/

    async getMetadata(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/metadata`,
            'Error fetching the metadata.'
        );
    }

    async getSpecificMetadata(type: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/metadata/${type}`,
            'Error fetching the specified metadata.'
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Hearthstone Game Data Error :: ${errorMessage}`);
        }
    }
}

export default HearthstoneGameData;