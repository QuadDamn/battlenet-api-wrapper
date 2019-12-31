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

    /**
     * Returns an index of creature families.
     */
    async getCreatureFamiliesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/index`,
            'Error fetching creature families index.'
        );
    }

    /**
     * Returns a creature family by ID.
     *
     * @param creatureFamilyId The ID of the creature family.
     */
    async getCreatureFamily(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family.'
        );
    }

    /**
     * Returns an index of creature types.
     */
    async getCreatureTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/index`,
            'Error fetching creature types index.'
        );
    }

    /**
     * Returns a creature type by ID.
     *
     * @param creatureTypeId The ID of the creature type.
     */
    async getCreatureType(creatureTypeId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`,
            'Error fetching specified creature type.'
        );
    }

    /**
     * Returns a creature by ID.
     *
     * @param creatureId The ID of the creature.
     */
    async getCreature(creatureId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature/${creatureId}`,
            'Error fetching specified creature.'
        );
    }

    /**
     * Returns media for a creature display by ID.
     *
     * @param creatureDisplayId The ID of the creature display.
     */
    async getCreatureDisplayMedia(creatureDisplayId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`,
            'Error fetching specified creature display media.'
        );
    }

    /**
     * Returns media for a creature family by ID.
     *
     * @param creatureFamilyId The ID of the creature family.
     */
    async getCreatureFamilyMedia(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family media.'
        );
    }

    /****************************
     * Guild Crest API
     ****************************/

    /**
     * Returns an index of guild crest media.
     */
    async getGuildCrestComponentsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/index`,
            'Error fetching guild crest components index.'
        );
    }

    /**
     * Returns media for a guild crest border by ID.
     *
     * @param borderId The ID of the guild crest border.
     */
    async getGuildCrestBorderMedia(borderId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/border/${borderId}`,
            'Error fetching guild crest border media.'
        );
    }

    /**
     * Returns media for a guild crest emblem by ID.
     *
     * @param emblemId The ID of the guild crest emblem.
     */
    async getGuildCrestEmblemMedia(emblemId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`,
            'Error fetching guild crest emblem media.'
        );
    }

    /****************************
     * Item API
     ****************************/

    /**
     * Returns an index of item classes.
     */
    async getItemClassesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/index`,
            'Error fetching item class index.'
        );
    }

    /**
     * Returns an item class by ID.
     *
     * @param itemClassId The ID of the item class.
     */
    async getItemClass(itemClassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}`,
            'Error fetching specified item class.'
        );
    }

    /**
     * Returns an item subclass by ID.
     *
     * @param itemClassId The ID of the item class.
     * @param itemSubclassId The ID of the item subclass.
     */
    async getItemSubclass(itemClassId: string, itemSubclassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
            'Error fetching specified item class subclass.'
        );
    }

    /**
     * Returns an item by ID.
     *
     * @param itemId The ID of the item.
     */
    async getItem(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/${itemId}`,
            'Error fetching specified item.'
        );
    }

    /**
     * Returns media for an item by ID.
     *
     * @param itemId The ID of the item.
     */
    async getItemMedia(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/item/${itemId}`,
            'Error fetching specified item media.'
        );
    }

    /****************************
     * Playable Class API
     ****************************/

    /**
     * Returns an index of playable classes.
     */
    async getPlayableClassIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/index`,
            'Error fetching playable class index.'
        );
    }

    /**
     * Returns a playable class by ID.
     *
     * @param playableClassId The ID of the playable class.
     */
    async getPlayableClass(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/${playableClassId}`,
            'Error fetching specified playable class.'
        );
    }

    /**
     * Returns media for a playable class by ID.
     *
     * @param playableClassId The ID of the playable class.
     */
    async getPlayableClassMedia(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`,
            'Error fetching specified playable class media.'
        );
    }

    /****************************
     * Playable Race API
     ****************************/

    /**
     * Returns an index of playable races.
     */
    async getPlayableRaceIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/index`,
            'Error fetching playable race index.'
        );
    }

    /**
     * Returns a playable race by ID.
     *
     * @param playableRaceId The ID of the playable race.
     */
    async getPlayableRace(playableRaceId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/${playableRaceId}`,
            'Error fetching specified playable race.'
        );
    }

    /****************************
     * Power Type API
     ****************************/

    /**
     * Returns an index of power types.
     */
    async getPowerTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/power-type/index`,
            'Error fetching power type index.'
        );
    }

    /**
     * Returns a power type by ID.
     *
     * @param powerTypeId
     */
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
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Classic Game Data Error :: ${errorMessage}`);
        }
    }
}

export default WowClassicGameData;