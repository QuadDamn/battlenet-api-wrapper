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
        this.origin = origin;
        this.namespace = `static-classic-${origin}`;
    }
    /****************************
     * Creature API
     ****************************/
    getCreatureFamiliesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/index`, 'Error fetching creature families index.');
        });
    }
    getCreatureFamily(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family.');
        });
    }
    getCreatureTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/index`, 'Error fetching creature types index.');
        });
    }
    getCreatureType(creatureTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`, 'Error fetching specified creature type.');
        });
    }
    getCreature(creatureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature/${creatureId}`, 'Error fetching specified creature.');
        });
    }
    getCreatureDisplayMedia(creatureDisplayId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`, 'Error fetching specified creature display media.');
        });
    }
    getCreatureFamilyMedia(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family media.');
        });
    }
    /****************************
     * Guild Crest API
     ****************************/
    getGuildCrestComponentsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/index`, 'Error fetching guild crest components index.');
        });
    }
    getGuildCrestBorderMedia(borderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/border/${borderId}`, 'Error fetching guild crest border media.');
        });
    }
    getGuildCrestEmblemMedia(emblemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`, 'Error fetching guild crest emblem media.');
        });
    }
    /****************************
     * Item API
     ****************************/
    getItemClassesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/index`, 'Error fetching item class index.');
        });
    }
    getItemClass(itemClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}`, 'Error fetching specified item class.');
        });
    }
    getItemSubclass(itemClassId, itemSubclassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`, 'Error fetching specified item class subclass.');
        });
    }
    getItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemId}`, 'Error fetching specified item.');
        });
    }
    getItemMedia(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/item/${itemId}`, 'Error fetching specified item media.');
        });
    }
    /****************************
     * Playable Class API
     ****************************/
    getPlayableClassIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/index`, 'Error fetching playable class index.');
        });
    }
    getPlayableClass(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/${playableClassId}`, 'Error fetching specified playable class.');
        });
    }
    getPlayableClassMedia(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`, 'Error fetching specified playable class media.');
        });
    }
    /****************************
     * Playable Race API
     ****************************/
    getPlayableRaceIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/index`, 'Error fetching playable race index.');
        });
    }
    getPlayableRace(playableRaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/${playableRaceId}`, 'Error fetching specified playable race.');
        });
    }
    /****************************
     * Power Type API
     ****************************/
    getPowerTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/index`, 'Error fetching power type index.');
        });
    }
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
                const response = yield this.axios.get(apiUrl, {
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
