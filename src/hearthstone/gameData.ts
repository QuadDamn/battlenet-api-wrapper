// Hearthstone Game Data API documentation: https://develop.battle.net/documentation/hearthstone/game-data-apis

import {AxiosInstance} from "axios";

class HearthstoneGameData {
    private readonly axios: AxiosInstance;
    private readonly locale: string;
    private readonly defaultAxiosParams: object;
    private readonly gameBaseUrlPath: string = '/hearthstone';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object, locale: string) {
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
    async getCard(cardSlug: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/cards/${cardSlug}`,
            'Error fetching the specified card.'
        );
    }

    /****************************
     * Decks API
     ****************************/

    /**
     * Finds a deck by its deck code.
     *
     * @param deckCode A code that identifies a deck. You can copy one from the game or various Hearthstone websites.
     */
    async getDeck(deckCode: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/deck/${deckCode}`,
            'Error fetching the specified deck.'
        );
    }

    /****************************
     * Metadata API
     ****************************/

    /**
     * Returns information about the categorization of cards. Metadata includes the card set,
     * set group (for example, Standard or Year of the Dragon), rarity, class, card type, minion type, and keywords.
     */
    async getMetadata(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/metadata`,
            'Error fetching the metadata.'
        );
    }

    /**
     * Returns information about just one type of metadata.
     *
     * @param type The type of the metadata to retrieve. Valid values include sets, setGroups, types,
     * rarities, classes, minionTypes, and keywords.
     */
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