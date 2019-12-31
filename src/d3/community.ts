// Diablo 3 Community API documentation: https://develop.battle.net/documentation/diablo-3/community-apis

import {AxiosInstance} from "axios";
import {formatBattleTag} from '../utils';

class Diablo3Community {
    private readonly axios: AxiosInstance;
    private readonly gameBaseUrlPath: string = '/d3/data';

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    /****************************
     * Act API
     ****************************/

    /**
     * Returns an index of acts.
     */
    async getActIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/act`,
            'Error fetching the act index.'
        );
    }

    /**
     * Returns a single act by ID.
     *
     * @param actId The ID of the act to retrieve.
     */
    async getAct(actId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/act/${actId}`,
            'Error fetching the specified act.'
        );
    }

    /****************************
     * Artisan and Recipe API
     ****************************/

    /**
     * Returns a single artisan by slug.
     *
     * @param artisanSlug The slug of the artisan to retrieve.
     */
    async getArtisan(artisanSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/artisan/${artisanSlug}`,
            'Error fetching the specified artisan.'
        );
    }

    /**
     * Returns a single recipe by slug for the specified artisan.
     *
     * @param artisanSlug The slug of the artisan to retrieve.
     * @param recipeSlug The slug of the recipe to retrieve.
     */
    async getRecipe(artisanSlug: string, recipeSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/artisan/${artisanSlug}/recipe/${recipeSlug}`,
            'Error fetching specified recipe.'
        );
    }

    /****************************
     * Follower API
     ****************************/

    /**
     * Returns a single follower by slug.
     *
     * @param followerSlug The slug of the follower to retrieve.
     */
    async getFollower(followerSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/follower/${followerSlug}`,
            'Error fetching the specified follower.'
        );
    }

    /****************************
     * Character Class & Skill API
     ****************************/

    /**
     * Returns a single character class by slug.
     *
     * @param classSlug The slug of the character class to retrieve.
     */
    async getCharacterClass(classSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/hero/${classSlug}`,
            'Error fetching specified hero class.'
        );
    }

    /**
     * Returns a single skill by slug for a specific character class.
     *
     * @param classSlug The slug of the character class to retrieve.
     * @param skillSlug The slug of the skill to retrieve.
     */
    async getApiSkill(classSlug: string, skillSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/hero/${classSlug}/skill/${skillSlug}`,
            'Error fetching specified hero class skill.'
        );
    }

    /****************************
     * Item Type API
     ****************************/

    /**
     * Returns an index of item types.
     */
    async getItemTypeIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-type`,
            'Error fetching the item type index.'
        );
    }

    /**
     * Returns a single item type by slug.
     *
     * @param itemTypeSlug The slug of the item type to retrieve.
     */
    async getItemType(itemTypeSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-type/${itemTypeSlug}`,
            'Error fetching the specified item type.'
        );
    }

    /****************************
     * Item API
     ****************************/

    /**
     * Returns a single item by item slug and ID.
     *
     * @param itemSlugAndId The slug and ID of the item to retrieve.
     */
    async getItem(itemSlugAndId): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/${itemSlugAndId}`,
            'Error fetching the specified item.'
        );
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
    async getApiAccount(account: string): Promise<object> {
        const formattedBattleTag = await formatBattleTag(account);

        return await this._handleApiCall(
            `/d3/profile/${formattedBattleTag}/`,
            'Error fetching profile information.'
        );
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
    async getApiHero(account: string, heroId: string): Promise<object> {
        const formattedBattleTag = await formatBattleTag(account);

        return await this._handleApiCall(
            `/d3/profile/${formattedBattleTag}/hero/${heroId}`,
            'Error fetching specified hero.'
        );
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
    async getApiDetailedHeroItems(account: string, heroId: string): Promise<object> {
        const formattedBattleTag = await formatBattleTag(account);

        return await this._handleApiCall(
            `/d3/profile/${formattedBattleTag}/hero/${heroId}/items`,
            'Error fetching specified hero items.'
        );
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
    async getApiDetailedFollowerItems(account: string, heroId: string): Promise<object> {
        const formattedBattleTag = await formatBattleTag(account);

        return await this._handleApiCall(
            `/d3/profile/${formattedBattleTag}/hero/${heroId}/follower-items`,
            'Error fetching specified hero follower items.'
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Community Error :: ${errorMessage}`);
        }
    }
}

export default Diablo3Community;