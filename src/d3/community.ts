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

    async getActIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/act`,
            'Error fetching the act index.'
        );
    }

    async getAct(actId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/act/${actId}`,
            'Error fetching the specified act.'
        );
    }

    /****************************
     * Artisan and Recipe API
     ****************************/

    async getArtisan(artisanSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/artisan/${artisanSlug}`,
            'Error fetching the specified artisan.'
        );
    }

    async getRecipe(artisanSlug: string, recipeSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/artisan/${artisanSlug}/recipe/${recipeSlug}`,
            'Error fetching specified recipe.'
        );
    }

    /****************************
     * Follower API
     ****************************/

    async getFollower(followerSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/follower/${followerSlug}`,
            'Error fetching the specified follower.'
        );
    }

    /****************************
     * Character Class & Skill API
     ****************************/

    async getCharacterClass(classSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/hero/${classSlug}`,
            'Error fetching specified hero class.'
        );
    }

    async getApiSkill(classSlug: string, skillSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/hero/${classSlug}/skill/${skillSlug}`,
            'Error fetching specified hero class skill.'
        );
    }

    /****************************
     * Item Type API
     ****************************/

    async getItemTypeIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-type`,
            'Error fetching the item type index.'
        );
    }

    async getItemType(itemTypeSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-type/${itemTypeSlug}`,
            'Error fetching the specified item type.'
        );
    }

    /****************************
     * Item API
     ****************************/

    async getItem(itemSlugAndId): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/${itemSlugAndId}`,
            'Error fetching the specified item.'
        );
    }

    /****************************
     * Profile API
     ****************************/

    // Battletag is case-sensitive and will result in a 404 error response
    // if it doesn't match perfectly with what Blizzard has on record.
    async getApiAccount(account: string): Promise<object> {
        const formattedBattleTag = await formatBattleTag(account);

        return await this._handleApiCall(
            `/d3/profile/${formattedBattleTag}/`,
            'Error fetching profile information.'
        );
    }

    // Battletag is case-sensitive and will result in a 404 error response
    // if it doesn't match perfectly with what Blizzard has on record.
    async getApiHero(account: string, heroId: string): Promise<object> {
        const formattedBattleTag = await formatBattleTag(account);

        return await this._handleApiCall(
            `/d3/profile/${formattedBattleTag}/hero/${heroId}`,
            'Error fetching specified hero.'
        );
    }

    // Battletag is case-sensitive and will result in a 404 error response
    // if it doesn't match perfectly with what Blizzard has on record.
    async getApiDetailedHeroItems(account: string, heroId: string): Promise<object> {
        const formattedBattleTag = await formatBattleTag(account);

        return await this._handleApiCall(
            `/d3/profile/${formattedBattleTag}/hero/${heroId}/items`,
            'Error fetching specified hero items.'
        );
    }

    // Battletag is case-sensitive and will result in a 404 error response
    // if it doesn't match perfectly with what Blizzard has on record.
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