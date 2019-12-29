// Starcraft 2 Community API documentation: https://develop.battle.net/documentation/starcraft-2/community-apis

import {AxiosInstance} from "axios";

class Starcraft2Community {
    private axios: AxiosInstance;
    private readonly locale: string;
    private gameBaseUrlPath: string = '/sc2';

    constructor(axiosInstance: AxiosInstance, locale: string) {
        this.axios = axiosInstance;
        this.locale = locale;
    }

    /****************************
     * Profile API
     ****************************/

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getStaticProfileData(regionId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/static/profile/${regionId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching static profile data for the specified region.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getMetadata(regionId: number, realmId: number, profileId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/static/profile/${regionId}/${realmId}/${profileId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching profile data for the specified region.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getProfile(regionId: number, realmId: number, profileId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified profile data.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLadderSummary(regionId: number, realmId: number, profileId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/summary`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified ladder summary.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLadder(regionId: number, realmId: number, profileId: number, ladderId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified ladder.');
        }
    }

    /****************************
     * Ladder API
     ****************************/

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getGrandmasterLeaderboard(regionId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/ladder/grandmaster/${regionId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching static profile data for the specified region.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getSeason(regionId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/ladder/season/${regionId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching static profile data for the specified region.');
        }
    }

    /****************************
     * Account API
     ****************************/

    async getPlayer(accountId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/player/${accountId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching metadata for player account.');
        }
    }

    /****************************
     * Legacy API
     ****************************/

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyProfile(regionId: number, realmId: number, profileId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy profile data.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyProfileLadders(regionId: number, realmId: number, profileId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy profile ladder data.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyProfileMatches(regionId: number, realmId: number, profileId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/legacy/profile/${regionId}/${realmId}/${profileId}/matches`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy profile match data.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyAchievements(regionId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/legacy/data/achievements/${regionId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy achievement data.');
        }
    }

    // The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).
    async getLegacyRewards(regionId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/legacy/data/rewards/${regionId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Community Error :: Error fetching specified legacy rewards data.');
        }
    }
}

export default Starcraft2Community;