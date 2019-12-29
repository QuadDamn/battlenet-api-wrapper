// Diablo 3 Community API documentation: https://develop.battle.net/documentation/diablo-3/community-apis
import {AxiosInstance} from "axios";

class Diablo3Community {

    private axios: AxiosInstance;
    private readonly locale: string;
    private gameBaseUrlPath: string = '/d3/data';

    constructor(axiosInstance: AxiosInstance, locale: string) {
        this.axios = axiosInstance;
        this.locale = locale;
    }

    /****************************
     * Act API
     ****************************/

    async getActIndex(): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/act`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the act index.');
        }
    }

    async getAct(actId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/act/${actId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified act.');
        }
    }

    /****************************
     * Artisan and Recipe API
     ****************************/

    async getArtisan(artisanSlug: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/artisan/${artisanSlug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified artisan.');
        }
    }

    async getRecipe(artisanSlug: string, recipeSlug: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/artisan/${artisanSlug}/recipe/${recipeSlug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching specified recipe.');
        }
    }

    /****************************
     * Follower API
     ****************************/

    async getFollower(followerSlug: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/follower/${followerSlug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified follower.');
        }
    }

    /****************************
     * Character Class & Skill API
     ****************************/

    async getCharacterClass(classSlug: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/hero/${classSlug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching specified hero class.');
        }
    }

    async getApiSkill(classSlug: string, skillSlug: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/hero/${classSlug}/skill/${skillSlug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching specified hero class skill.');
        }
    }

    /****************************
     * Item Type API
     ****************************/

    async getItemTypeIndex(): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/item-type`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the item type index.');
        }
    }

    async getItemType(itemTypeSlug: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/item-type/${itemTypeSlug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified item type.');
        }
    }

    /****************************
     * Item API
     ****************************/

    async getItem(): Promise<object> {

    }

    /****************************
     * Profile API
     ****************************/

    async getApiAccount(): Promise<object> {

    }

    async getApiHero(): Promise<object> {

    }

    async getApiDetailedHeroItems(): Promise<object> {

    }

    async getApiDetailedFollowerItems(): Promise<object> {

    }
}

export default Diablo3Community;