"use strict";
// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
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
class WowGameData {
    constructor(axiosInstance, defaultAxiosParams, origin) {
        this.gameBaseUrlPath = '/data/wow';
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.origin = origin;
        this.staticNamespace = `static-${origin}`;
        this.dynamicNamespace = `dynamic-${origin}`;
    }
    /****************************
     * Creature API
     ****************************/
    getCreatureFamiliesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/index`, 'Error fetching creature families index.', this.staticNamespace);
        });
    }
    getCreatureFamily(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family.', this.staticNamespace);
        });
    }
    getCreatureTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/index`, 'Error fetching creature types index.', this.staticNamespace);
        });
    }
    getCreatureType(creatureTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`, 'Error fetching specified creature type.', this.staticNamespace);
        });
    }
    getCreature(creatureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature/${creatureId}`, 'Error fetching specified creature.', this.staticNamespace);
        });
    }
    getCreatureDisplayMedia(creatureDisplayId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`, 'Error fetching specified creature display media.', this.staticNamespace);
        });
    }
    getCreatureFamilyMedia(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family media.', this.staticNamespace);
        });
    }
    /****************************
     * Guild Crest API
     ****************************/
    getGuildCrestComponentsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/index`, 'Error fetching guild crest components index.', this.staticNamespace);
        });
    }
    getGuildCrestBorderMedia(borderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/border/${borderId}`, 'Error fetching guild crest border media.', this.staticNamespace);
        });
    }
    getGuildCrestEmblemMedia(emblemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`, 'Error fetching guild crest emblem media.', this.staticNamespace);
        });
    }
    /****************************
     * Item API
     ****************************/
    getItemClassesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/index`, 'Error fetching item class index.', this.staticNamespace);
        });
    }
    getItemClass(itemClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}`, 'Error fetching specified item class.', this.staticNamespace);
        });
    }
    getItemSubclass(itemClassId, itemSubclassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`, 'Error fetching specified item class subclass.', this.staticNamespace);
        });
    }
    getItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemId}`, 'Error fetching specified item.', this.staticNamespace);
        });
    }
    getItemMedia(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/item/${itemId}`, 'Error fetching specified item media.', this.staticNamespace);
        });
    }
    /****************************
     * Playable Class API
     ****************************/
    getPlayableClassIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/index`, 'Error fetching playable class index.', this.staticNamespace);
        });
    }
    getPlayableClass(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/${playableClassId}`, 'Error fetching specified playable class.', this.staticNamespace);
        });
    }
    getPlayableClassMedia(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`, 'Error fetching specified playable class media.', this.staticNamespace);
        });
    }
    /****************************
     * Playable Race API
     ****************************/
    getPlayableRaceIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/index`, 'Error fetching playable race index.', this.staticNamespace);
        });
    }
    getPlayableRace(playableRaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/${playableRaceId}`, 'Error fetching specified playable race.', this.staticNamespace);
        });
    }
    /****************************
     * Power Type API
     ****************************/
    getPowerTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/index`, 'Error fetching power type index.', this.staticNamespace);
        });
    }
    getPowerType(powerTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/${powerTypeId}`, 'Error fetching specified power type.', this.staticNamespace);
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage, namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(apiUrl), {
                    params: Object.assign({ namespace: namespace }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Game Data Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = WowGameData;
