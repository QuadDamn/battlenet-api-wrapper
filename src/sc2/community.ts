// Starcraft 2 Community API documentation: https://develop.battle.net/documentation/starcraft-2/community-apis

import {AxiosInstance} from "axios";

class Starcraft2Community {
    private readonly axios: AxiosInstance;
    private readonly locale: string;
    private readonly gameBaseUrlPath: string = '/sc2';

    constructor(axiosInstance: AxiosInstance, locale: string) {
        this.axios = axiosInstance;
        this.locale = locale;
    }

    /****************************
     * Profile API
     ****************************/

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getStaticProfileData(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/static/profile/${regionId}`,
            'Error fetching static profile data for the specified region.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getMetadata(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/static/profile/${regionId}/${realmId}/${profileId}`,
            'Error fetching profile data for the specified region.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getProfile(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}`,
            'Error fetching specified profile data.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLadderSummary(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/summary`,
            'Error fetching specified ladder summary.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLadder(regionId: number, realmId: number, profileId: number, ladderId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}`,
            'Error fetching specified ladder.'
        );
    }

    /****************************
     * Ladder API
     ****************************/

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getGrandmasterLeaderboard(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/ladder/grandmaster/${regionId}`,
            'Error fetching static profile data for the specified region.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getSeason(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/ladder/season/${regionId}`,
            'Error fetching static profile data for the specified region.'
        );
    }

    /****************************
     * Account API
     ****************************/

    async getPlayer(accountId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/player/${accountId}`,
            'Error fetching metadata for player account.'
        );
    }

    /****************************
     * Legacy API
     ****************************/

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyProfile(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}`,
            'Error fetching specified legacy profile data.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyProfileLadders(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`,
            'Error fetching specified legacy profile ladder data.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyProfileMatches(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/matches`,
            'Error fetching specified legacy profile match data.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyAchievements(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/data/achievements/${regionId}`,
            'Error fetching specified legacy achievement data.'
        );
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyRewards(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/data/rewards/${regionId}`,
            'Error fetching specified legacy rewards data.'
        );
    }

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(apiUrl);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Starcraft 2 Community Error :: ${errorMessage}`);
        }
    }
}

export default Starcraft2Community;