"use strict";
// WoW Classic Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis
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
class WowClassicGameData {
    constructor(axiosInstance, defaultAxiosParams, origin) {
        this.gameBaseUrlPath = '/data/wow';
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.namespace = `static-classic-${origin}`;
    }
    /**
     * Returns an index of creature families.
     */
    getCreatureFamiliesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/index`, 'Error fetching creature families index.');
        });
    }
    /**
     * Returns a creature family by ID.
     *
     * @param creatureFamilyId The ID of the creature family.
     */
    getCreatureFamily(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family.');
        });
    }
    /**
     * Returns an index of creature types.
     */
    getCreatureTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/index`, 'Error fetching creature types index.');
        });
    }
    /**
     * Returns a creature type by ID.
     *
     * @param creatureTypeId The ID of the creature type.
     */
    getCreatureType(creatureTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`, 'Error fetching specified creature type.');
        });
    }
    /**
     * Returns a creature by ID.
     *
     * @param creatureId The ID of the creature.
     */
    getCreature(creatureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature/${creatureId}`, 'Error fetching specified creature.');
        });
    }
    /**
     * Returns media for a creature display by ID.
     *
     * @param creatureDisplayId The ID of the creature display.
     */
    getCreatureDisplayMedia(creatureDisplayId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`, 'Error fetching specified creature display media.');
        });
    }
    /**
     * Returns media for a creature family by ID.
     *
     * @param creatureFamilyId The ID of the creature family.
     */
    getCreatureFamilyMedia(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family media.');
        });
    }
    /****************************
     * Guild Crest API
     ****************************/
    /**
     * Returns an index of guild crest media.
     */
    getGuildCrestComponentsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/index`, 'Error fetching guild crest components index.');
        });
    }
    /**
     * Returns media for a guild crest border by ID.
     *
     * @param borderId The ID of the guild crest border.
     */
    getGuildCrestBorderMedia(borderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/border/${borderId}`, 'Error fetching guild crest border media.');
        });
    }
    /**
     * Returns media for a guild crest emblem by ID.
     *
     * @param emblemId The ID of the guild crest emblem.
     */
    getGuildCrestEmblemMedia(emblemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`, 'Error fetching guild crest emblem media.');
        });
    }
    /****************************
     * Item API
     ****************************/
    /**
     * Returns an index of item classes.
     */
    getItemClassesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/index`, 'Error fetching item class index.');
        });
    }
    /**
     * Returns an item class by ID.
     *
     * @param itemClassId The ID of the item class.
     */
    getItemClass(itemClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}`, 'Error fetching specified item class.');
        });
    }
    /**
     * Returns an item subclass by ID.
     *
     * @param itemClassId The ID of the item class.
     * @param itemSubclassId The ID of the item subclass.
     */
    getItemSubclass(itemClassId, itemSubclassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`, 'Error fetching specified item class subclass.');
        });
    }
    /**
     * Returns an item by ID.
     *
     * @param itemId The ID of the item.
     */
    getItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemId}`, 'Error fetching specified item.');
        });
    }
    /**
     * Returns media for an item by ID.
     *
     * @param itemId The ID of the item.
     */
    getItemMedia(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/item/${itemId}`, 'Error fetching specified item media.');
        });
    }
    /****************************
     * Playable Class API
     ****************************/
    /**
     * Returns an index of playable classes.
     */
    getPlayableClassIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/index`, 'Error fetching playable class index.');
        });
    }
    /**
     * Returns a playable class by ID.
     *
     * @param playableClassId The ID of the playable class.
     */
    getPlayableClass(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/${playableClassId}`, 'Error fetching specified playable class.');
        });
    }
    /**
     * Returns media for a playable class by ID.
     *
     * @param playableClassId The ID of the playable class.
     */
    getPlayableClassMedia(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`, 'Error fetching specified playable class media.');
        });
    }
    /****************************
     * Playable Race API
     ****************************/
    /**
     * Returns an index of playable races.
     */
    getPlayableRaceIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/index`, 'Error fetching playable race index.');
        });
    }
    /**
     * Returns a playable race by ID.
     *
     * @param playableRaceId The ID of the playable race.
     */
    getPlayableRace(playableRaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/${playableRaceId}`, 'Error fetching specified playable race.');
        });
    }
    /****************************
     * Power Type API
     ****************************/
    /**
     * Returns an index of power types.
     */
    getPowerTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/index`, 'Error fetching power type index.');
        });
    }
    /**
     * Returns a power type by ID.
     *
     * @param powerTypeId
     */
    getPowerType(powerTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/${powerTypeId}`, 'Error fetching specified power type.');
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(apiUrl), {
                    params: Object.assign({ namespace: this.namespace }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Classic Game Data Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = WowClassicGameData;
