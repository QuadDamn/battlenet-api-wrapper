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
            return yield this._apiCall(`${this.gameBaseUrlPath}/creature-family/index`, 'WoW Classic Game Data Error :: Error fetching creature families index.');
        });
    }
    getCreatureFamily(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`, 'WoW Classic Game Data Error :: Error fetching specified creature family.');
        });
    }
    getCreatureTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/creature-type/index`, 'WoW Classic Game Data Error :: Error fetching creature types index.');
        });
    }
    getCreatureType(creatureTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`, 'WoW Classic Game Data Error :: Error fetching specified creature type.');
        });
    }
    getCreature(creatureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/creature/${creatureId}`, 'WoW Classic Game Data Error :: Error fetching specified creature.');
        });
    }
    getCreatureDisplayMedia(creatureDisplayId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`, 'WoW Classic Game Data Error :: Error fetching specified creature display media.');
        });
    }
    getCreatureFamilyMedia(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`, 'WoW Classic Game Data Error :: Error fetching specified creature family media.');
        });
    }
    /****************************
     * Guild Crest API
     ****************************/
    getGuildCrestComponentsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/guild-crest/index`, 'WoW Classic Game Data Error :: Error fetching guild crest components index.');
        });
    }
    getGuildCrestBorderMedia(borderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/guild-crest/border/${borderId}`, 'WoW Classic Game Data Error :: Error fetching guild crest border media.');
        });
    }
    getGuildCrestEmblemMedia(emblemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`, 'WoW Classic Game Data Error :: Error fetching guild crest emblem media.');
        });
    }
    /****************************
     * Item API
     ****************************/
    getItemClassesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/item-class/index`, 'WoW Classic Game Data Error :: Error fetching item class index.');
        });
    }
    getItemClass(itemClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}`, 'WoW Classic Game Data Error :: Error fetching specified item class.');
        });
    }
    getItemSubclass(itemClassId, itemSubclassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`, 'WoW Classic Game Data Error :: Error fetching specified item class subclass.');
        });
    }
    getItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/item/${itemId}`, 'WoW Classic Game Data Error :: Error fetching specified item.');
        });
    }
    getItemMedia(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiCall(`${this.gameBaseUrlPath}/media/item/${itemId}`, 'WoW Classic Game Data Error :: Error fetching specified item media.');
        });
    }
    _apiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(apiUrl, {
                    params: Object.assign({ namespace: this.namespace }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(errorMessage);
            }
        });
    }
}
exports.default = WowClassicGameData;
