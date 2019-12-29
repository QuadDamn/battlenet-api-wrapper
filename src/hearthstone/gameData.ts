// Hearthstone Game Data API documentation: https://develop.battle.net/documentation/hearthstone/game-data-apis

import {AxiosInstance} from "axios";

class HearthstoneGameData {
    private axios: AxiosInstance;
    private readonly locale: string;
    private defaultAxiosParams: object;
    private gameBaseUrlPath: string = '/hearthstone';

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
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/cards/${cardSlug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Hearthstone Game Data Error :: Error fetching the specified card.');
        }
    }

    /****************************
     * Decks API
     ****************************/

    async getDeck(deckCode: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/deck/${deckCode}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Hearthstone Game Data Error :: Error fetching the specified deck.');
        }
    }

    /****************************
     * Metadata API
     ****************************/

    async getMetadata(): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/metadata`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Hearthstone Game Data Error :: Error fetching the metadata.');
        }
    }

    async getSpecificMetadata(type: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/metadata/${type}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Hearthstone Game Data Error :: Error fetching the specified metadata.');
        }
    }
}

export default HearthstoneGameData;