// Starcraft 2 Community API documentation: https://develop.battle.net/documentation/starcraft-2/community-apis

import {AxiosInstance} from "axios";

class Starcraft2Community {
    private readonly axios: AxiosInstance;
    private readonly gameBaseUrlPath: string = '/sc2';

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    /****************************
     * Profile API
     ****************************/

    /**
     * Returns all static SC2 profile data (achievements, categories, criteria, and rewards).
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    async getStaticProfileData(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/static/profile/${regionId}`,
            'Error fetching static profile data for the specified region.'
        );
    }

    /**
     * Returns metadata for an individual's profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    async getMetadata(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/static/profile/${regionId}/${realmId}/${profileId}`,
            'Error fetching profile data for the specified region.'
        );
    }

    /**
     * Returns data about an individual SC2 profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    async getProfile(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}`,
            'Error fetching specified profile data.'
        );
    }

    /**
     * Returns a ladder summary for an individual SC2 profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    async getLadderSummary(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/summary`,
            'Error fetching specified ladder summary.'
        );
    }

    /**
     * Returns data about an individual profile's ladder.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     * @param ladderId The ID of the ladder for which to retrieve data.
     */
    async getLadder(regionId: number, realmId: number, profileId: number, ladderId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}`,
            'Error fetching specified ladder.'
        );
    }

    /****************************
     * Ladder API
     ****************************/

    /**
     * Returns ladder data for the current season's grandmaster leaderboard.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    async getGrandmasterLeaderboard(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/ladder/grandmaster/${regionId}`,
            'Error fetching static profile data for the specified region.'
        );
    }

    /**
     * Returns data about the current season.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    async getSeason(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/ladder/season/${regionId}`,
            'Error fetching static profile data for the specified region.'
        );
    }

    /****************************
     * Account API
     ****************************/

    /**
     * Returns metadata for an individual's account.
     *
     * @param accountId The ID of the account for which to retrieve data.
     */
    async getPlayer(accountId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/player/${accountId}`,
            'Error fetching metadata for player account.'
        );
    }

    /****************************
     * Legacy API
     ****************************/

    /**
     * Retrieves data about an individual SC2 profile.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    async getLegacyProfile(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}`,
            'Error fetching specified legacy profile data.'
        );
    }

    /**
     * Retrieves data about an individual SC2 profile's ladders.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    async getLegacyProfileLadders(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`,
            'Error fetching specified legacy profile ladder data.'
        );
    }

    /**
     * Returns data about an individual SC2 profile's match history.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     * @param realmId The region of the profile (`1` or `2`).
     * @param profileId The profile ID.
     */
    async getLegacyProfileMatches(regionId: number, realmId: number, profileId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/matches`,
            'Error fetching specified legacy profile match data.'
        );
    }

    /**
     * Returns data about the achievements available in SC2.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    async getLegacyAchievements(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/data/achievements/${regionId}`,
            'Error fetching specified legacy achievement data.'
        );
    }

    /**
     * Returns data about the rewards available in SC2.
     *
     * @param regionId The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
     */
    async getLegacyRewards(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/legacy/data/rewards/${regionId}`,
            'Error fetching specified legacy rewards data.'
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
            throw new Error(`Starcraft 2 Community Error :: ${errorMessage}`);
        }
    }
}

export default Starcraft2Community;