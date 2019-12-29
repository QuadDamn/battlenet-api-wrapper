"use strict";
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
class Diablo3Community {
    constructor(axiosInstance, locale) {
        this.gameBaseUrlPath = '/d3/data';
        this.axios = axiosInstance;
        this.locale = locale;
    }
    /****************************
     * Act API
     ****************************/
    getActIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/act`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching the act index.');
            }
        });
    }
    getAct(actId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/act/${actId}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching the specified act.');
            }
        });
    }
    /****************************
     * Artisan and Recipe API
     ****************************/
    getArtisan(artisanSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/artisan/${artisanSlug}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching the specified artisan.');
            }
        });
    }
    getRecipe(artisanSlug, recipeSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/artisan/${artisanSlug}/recipe/${recipeSlug}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching specified recipe.');
            }
        });
    }
    /****************************
     * Follower API
     ****************************/
    getFollower(followerSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/follower/${followerSlug}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching the specified follower.');
            }
        });
    }
    /****************************
     * Character Class & Skill API
     ****************************/
    getCharacterClass(classSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/hero/${classSlug}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching specified hero class.');
            }
        });
    }
    getApiSkill(classSlug, skillSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/hero/${classSlug}/skill/${skillSlug}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching specified hero class skill.');
            }
        });
    }
    /****************************
     * Item Type API
     ****************************/
    getItemTypeIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/item-type`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching the item type index.');
            }
        });
    }
    getItemType(itemTypeSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(`${this.gameBaseUrlPath}/item-type/${itemTypeSlug}`);
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error fetching the specified item type.');
            }
        });
    }
    /****************************
     * Item API
     ****************************/
    getItem() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /****************************
     * Profile API
     ****************************/
    getApiAccount() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getApiHero() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getApiDetailedHeroItems() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getApiDetailedFollowerItems() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = Diablo3Community;
