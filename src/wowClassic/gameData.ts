// WoW Classic Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis

import {AxiosInstance} from "axios";

class WowClassicGameData {
    private axios: AxiosInstance;
    private readonly defaultAxiosParams: object;
    private readonly origin: string;
    private readonly namespace: string;
    private gameBaseUrlPath: string = '/data/wow';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object,origin: string) {
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.origin = origin;
        this.namespace = `static-classic-${origin}`;
    }

    /****************************
     * Creature API
     ****************************/

    async getCreatureFamiliesIndex(): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/creature-family/index`,
            'WoW Classic Game Data Error :: Error fetching creature families index.'
        );
    }

    async getCreatureFamily(creatureFamilyId: number): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`,
            'WoW Classic Game Data Error :: Error fetching specified creature family.'
        );
    }

    async getCreatureTypesIndex(): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/creature-type/index`,
            'WoW Classic Game Data Error :: Error fetching creature types index.'
        );
    }

    async getCreatureType(creatureTypeId: number): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`,
            'WoW Classic Game Data Error :: Error fetching specified creature type.'
        );
    }

    async getCreature(creatureId: number): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/creature/${creatureId}`,
            'WoW Classic Game Data Error :: Error fetching specified creature.'
        );
    }

    async getCreatureDisplayMedia(creatureDisplayId: number): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`,
            'WoW Classic Game Data Error :: Error fetching specified creature display media.'
        );
    }

    async getCreatureFamilyMedia(creatureFamilyId: number): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`,
            'WoW Classic Game Data Error :: Error fetching specified creature family media.'
        );
    }

    /****************************
     * Guild Crest API
     ****************************/

    async getGuildCrestComponentsIndex(): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/guild-crest/index`,
            'WoW Classic Game Data Error :: Error fetching guild crest components index.'
        );
    }

    async getGuildCrestBorderMedia(borderId: number): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/guild-crest/border/${borderId}`,
            'WoW Classic Game Data Error :: Error fetching guild crest border media.'
        );
    }

    async getGuildCrestEmblemMedia(emblemId: number): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`,
            'WoW Classic Game Data Error :: Error fetching guild crest emblem media.'
        );
    }

    /****************************
     * Item API
     ****************************/

    async getItemClassesIndex(): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/item-class/index`,
            'WoW Classic Game Data Error :: Error fetching item class index.'
        );
    }

    async getItemClass(itemClassId: string): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}`,
            'WoW Classic Game Data Error :: Error fetching specified item class.'
        );
    }

    async getItemSubclass(itemClassId: string, itemSubclassId: string): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
            'WoW Classic Game Data Error :: Error fetching specified item class subclass.'
        );
    }

    async getItem(itemId: string): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/item/${itemId}`,
            'WoW Classic Game Data Error :: Error fetching specified item.'
        );
    }

    async getItemMedia(itemId: string): Promise<object> {
        return await this._apiCall(
            `${this.gameBaseUrlPath}/media/item/${itemId}`,
            'WoW Classic Game Data Error :: Error fetching specified item media.'
        );
    }



    async _apiCall(apiUrl: string, errorMessage: string) {
        try {
            const response = await this.axios.get(apiUrl, {
                params: {
                    namespace: this.namespace,
                    ...this.defaultAxiosParams
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(errorMessage);
        }
    }
}

export default WowClassicGameData;