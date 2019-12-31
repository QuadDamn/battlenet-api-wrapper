"use strict";
// Diablo 3 Community API documentation: https://develop.battle.net/documentation/diablo-3/community-apis
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
const utils_1 = require("../utils");
class Diablo3Community {
    constructor(axiosInstance) {
        this.gameBaseUrlPath = '/d3/data';
        this.axios = axiosInstance;
    }
    /****************************
     * Act API
     ****************************/
    /**
     * Returns an index of acts.
     */
    getActIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/act`, 'Error fetching the act index.');
        });
    }
    /**
     * Returns a single act by ID.
     *
     * @param actId The ID of the act to retrieve.
     */
    getAct(actId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/act/${actId}`, 'Error fetching the specified act.');
        });
    }
    /****************************
     * Artisan and Recipe API
     ****************************/
    /**
     * Returns a single artisan by slug.
     *
     * @param artisanSlug The slug of the artisan to retrieve.
     */
    getArtisan(artisanSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/artisan/${artisanSlug}`, 'Error fetching the specified artisan.');
        });
    }
    /**
     * Returns a single recipe by slug for the specified artisan.
     *
     * @param artisanSlug The slug of the artisan to retrieve.
     * @param recipeSlug The slug of the recipe to retrieve.
     */
    getRecipe(artisanSlug, recipeSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/artisan/${artisanSlug}/recipe/${recipeSlug}`, 'Error fetching specified recipe.');
        });
    }
    /****************************
     * Follower API
     ****************************/
    /**
     * Returns a single follower by slug.
     *
     * @param followerSlug The slug of the follower to retrieve.
     */
    getFollower(followerSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/follower/${followerSlug}`, 'Error fetching the specified follower.');
        });
    }
    /****************************
     * Character Class & Skill API
     ****************************/
    /**
     * Returns a single character class by slug.
     *
     * @param classSlug The slug of the character class to retrieve.
     */
    getCharacterClass(classSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/hero/${classSlug}`, 'Error fetching specified hero class.');
        });
    }
    /**
     * Returns a single skill by slug for a specific character class.
     *
     * @param classSlug The slug of the character class to retrieve.
     * @param skillSlug The slug of the skill to retrieve.
     */
    getApiSkill(classSlug, skillSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/hero/${classSlug}/skill/${skillSlug}`, 'Error fetching specified hero class skill.');
        });
    }
    /****************************
     * Item Type API
     ****************************/
    /**
     * Returns an index of item types.
     */
    getItemTypeIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-type`, 'Error fetching the item type index.');
        });
    }
    /**
     * Returns a single item type by slug.
     *
     * @param itemTypeSlug The slug of the item type to retrieve.
     */
    getItemType(itemTypeSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-type/${itemTypeSlug}`, 'Error fetching the specified item type.');
        });
    }
    /****************************
     * Item API
     ****************************/
    /**
     * Returns a single item by item slug and ID.
     *
     * @param itemSlugAndId The slug and ID of the item to retrieve.
     */
    getItem(itemSlugAndId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemSlugAndId}`, 'Error fetching the specified item.');
        });
    }
    /****************************
     * Profile API
     ****************************/
    /**
     * Returns the specified account profile.
     *
     * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
     * match perfectly with what Blizzard has on record.
     *
     * @param account The BattleTag for the account to retrieve.
     */
    getApiAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const formattedBattleTag = yield utils_1.formatBattleTag(account);
            return yield this._handleApiCall(`/d3/profile/${formattedBattleTag}/`, 'Error fetching profile information.');
        });
    }
    /**
     * Returns a single hero.
     *
     * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
     * match perfectly with what Blizzard has on record.
     *
     * @param account The BattleTag for the account to retrieve.
     * @param heroId The ID of the hero to retrieve.
     */
    getApiHero(account, heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            const formattedBattleTag = yield utils_1.formatBattleTag(account);
            return yield this._handleApiCall(`/d3/profile/${formattedBattleTag}/hero/${heroId}`, 'Error fetching specified hero.');
        });
    }
    /**
     * Returns a list of items for the specified hero.
     *
     * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
     * match perfectly with what Blizzard has on record.
     *
     * @param account The BattleTag for the account to retrieve.
     * @param heroId The ID of the hero to retrieve.
     */
    getApiDetailedHeroItems(account, heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            const formattedBattleTag = yield utils_1.formatBattleTag(account);
            return yield this._handleApiCall(`/d3/profile/${formattedBattleTag}/hero/${heroId}/items`, 'Error fetching specified hero items.');
        });
    }
    /**
     * Returns a list of items for the specified hero's followers.
     *
     * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
     * match perfectly with what Blizzard has on record.
     *
     * @param account The BattleTag for the account to retrieve.
     * @param heroId The ID of the hero to retrieve.
     */
    getApiDetailedFollowerItems(account, heroId) {
        return __awaiter(this, void 0, void 0, function* () {
            const formattedBattleTag = yield utils_1.formatBattleTag(account);
            return yield this._handleApiCall(`/d3/profile/${formattedBattleTag}/hero/${heroId}/follower-items`, 'Error fetching specified hero follower items.');
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(apiUrl));
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`Diablo 3 Community Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = Diablo3Community;
