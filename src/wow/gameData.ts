// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis

import {AxiosInstance} from "axios";

class WowGameData {
    private readonly axios: AxiosInstance;
    private readonly defaultAxiosParams: object;
    private readonly origin: string;
    private readonly dynamicNamespace: string;
    private readonly staticNamespace: string;
    private readonly gameBaseUrlPath: string = '/data/wow';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object, origin: string) {
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.origin = origin;
        this.staticNamespace = `static-${origin}`;
        this.dynamicNamespace = `dynamic-${origin}`;
    }

    /****************************
     * Creature API
     ****************************/

    async getCreatureFamiliesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/index`,
            'Error fetching creature families index.',
            this.staticNamespace
        );
    }

    async getCreatureFamily(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family.',
            this.staticNamespace
        );
    }

    async getCreatureTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/index`,
            'Error fetching creature types index.',
            this.staticNamespace
        );
    }

    async getCreatureType(creatureTypeId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`,
            'Error fetching specified creature type.',
            this.staticNamespace
        );
    }

    async getCreature(creatureId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature/${creatureId}`,
            'Error fetching specified creature.',
            this.staticNamespace
        );
    }

    async getCreatureDisplayMedia(creatureDisplayId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`,
            'Error fetching specified creature display media.',
            this.staticNamespace
        );
    }

    async getCreatureFamilyMedia(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family media.',
            this.staticNamespace
        );
    }

    /****************************
     * Guild Crest API
     ****************************/

    async getGuildCrestComponentsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/index`,
            'Error fetching guild crest components index.',
            this.staticNamespace
        );
    }

    async getGuildCrestBorderMedia(borderId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/border/${borderId}`,
            'Error fetching guild crest border media.',
            this.staticNamespace
        );
    }

    async getGuildCrestEmblemMedia(emblemId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`,
            'Error fetching guild crest emblem media.',
            this.staticNamespace
        );
    }

    /****************************
     * Item API
     ****************************/

    async getItemClassesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/index`,
            'Error fetching item class index.',
            this.staticNamespace
        );
    }

    async getItemClass(itemClassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}`,
            'Error fetching specified item class.',
            this.staticNamespace
        );
    }

    async getItemSubclass(itemClassId: string, itemSubclassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
            'Error fetching specified item class subclass.',
            this.staticNamespace
        );
    }

    async getItem(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/${itemId}`,
            'Error fetching specified item.',
            this.staticNamespace
        );
    }

    async getItemMedia(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/item/${itemId}`,
            'Error fetching specified item media.',
            this.staticNamespace
        );
    }

    /****************************
     * Playable Class API
     ****************************/

    async getPlayableClassIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/index`,
            'Error fetching playable class index.',
            this.staticNamespace
        );
    }

    async getPlayableClass(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/${playableClassId}`,
            'Error fetching specified playable class.',
            this.staticNamespace
        );
    }

    async getPlayableClassMedia(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`,
            'Error fetching specified playable class media.',
            this.staticNamespace
        );
    }

    /****************************
     * Playable Race API
     ****************************/

    async getPlayableRaceIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/index`,
            'Error fetching playable race index.',
            this.staticNamespace
        );
    }

    async getPlayableRace(playableRaceId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/${playableRaceId}`,
            'Error fetching specified playable race.',
            this.staticNamespace
        );
    }

    /****************************
     * Power Type API
     ****************************/

    async getPowerTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/power-type/index`,
            'Error fetching power type index.',
            this.staticNamespace
        );
    }

    async getPowerType(powerTypeId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/power-type/${powerTypeId}`,
            'Error fetching specified power type.',
            this.staticNamespace
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string, namespace: string): Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl), {
                params: {
                    namespace: namespace,
                    ...this.defaultAxiosParams
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Game Data Error :: ${errorMessage}`);
        }
    }
}

export default WowGameData;