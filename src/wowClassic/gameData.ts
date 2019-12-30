// WoW Classic Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis

import {AxiosInstance} from "axios";

class WowClassicGameData {
    private readonly axios: AxiosInstance;
    private readonly defaultAxiosParams: object;
    private readonly origin: string;
    private readonly namespace: string;
    private readonly gameBaseUrlPath: string = '/data/wow';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object, origin: string) {
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.origin = origin;
        this.namespace = `static-classic-${origin}`;
    }

    /****************************
     * Creature API
     ****************************/

    async getCreatureFamiliesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/index`,
            'Error fetching creature families index.'
        );
    }

    async getCreatureFamily(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family.'
        );
    }

    async getCreatureTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/index`,
            'Error fetching creature types index.'
        );
    }

    async getCreatureType(creatureTypeId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`,
            'Error fetching specified creature type.'
        );
    }

    async getCreature(creatureId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature/${creatureId}`,
            'Error fetching specified creature.'
        );
    }

    async getCreatureDisplayMedia(creatureDisplayId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`,
            'Error fetching specified creature display media.'
        );
    }

    async getCreatureFamilyMedia(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family media.'
        );
    }

    /****************************
     * Guild Crest API
     ****************************/

    async getGuildCrestComponentsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/index`,
            'Error fetching guild crest components index.'
        );
    }

    async getGuildCrestBorderMedia(borderId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/border/${borderId}`,
            'Error fetching guild crest border media.'
        );
    }

    async getGuildCrestEmblemMedia(emblemId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`,
            'Error fetching guild crest emblem media.'
        );
    }

    /****************************
     * Item API
     ****************************/

    async getItemClassesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/index`,
            'Error fetching item class index.'
        );
    }

    async getItemClass(itemClassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}`,
            'Error fetching specified item class.'
        );
    }

    async getItemSubclass(itemClassId: string, itemSubclassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
            'Error fetching specified item class subclass.'
        );
    }

    async getItem(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/${itemId}`,
            'Error fetching specified item.'
        );
    }

    async getItemMedia(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/item/${itemId}`,
            'Error fetching specified item media.'
        );
    }

    /****************************
     * Playable Class API
     ****************************/

    async getPlayableClassIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/index`,
            'Error fetching playable class index.'
        );
    }

    async getPlayableClass(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/${playableClassId}`,
            'Error fetching specified playable class.'
        );
    }

    async getPlayableClassMedia(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`,
            'Error fetching specified playable class media.'
        );
    }

    /****************************
     * Playable Race API
     ****************************/

    async getPlayableRaceIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/index`,
            'Error fetching playable race index.'
        );
    }

    async getPlayableRace(playableRaceId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/${playableRaceId}`,
            'Error fetching specified playable race.'
        );
    }

    /****************************
     * Power Type API
     ****************************/

    async getPowerTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/power-type/index`,
            'Error fetching power type index.'
        );
    }

    async getPowerType(powerTypeId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/power-type/${powerTypeId}`,
            'Error fetching specified power type.'
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl), {
                params: {
                    namespace: this.namespace,
                    ...this.defaultAxiosParams
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Classic Game Data Error :: ${errorMessage}`);
        }
    }
}

export default WowClassicGameData;