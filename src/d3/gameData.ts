// Diablo 3 Game Data API documentation: https://develop.battle.net/documentation/diablo-3/game-data-apis

import {AxiosInstance} from "axios";

class Diablo3GameData {
    private axios: AxiosInstance;
    private readonly locale: string;
    private gameBaseUrlPath: string = '/data/d3';

    constructor(axiosInstance: AxiosInstance, locale: string) {
        this.axios = axiosInstance;
        this.locale = locale;
    }

    async getSeasonIndex(): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/season`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the season index.');
        }
    }

    async getSeason(seasonId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/season/${seasonId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified season.');
        }
    }

    async getSeasonLeaderboard(seasonId: number, leaderboardId: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/season/${seasonId}/leaderboard/${leaderboardId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified season leaderboard.');
        }
    }

    async getEraIndex(): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/era`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the era index.');
        }
    }

    async getEra(eraId: number): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/era/${eraId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified era.');
        }
    }

    async getEraLeaderboard(eraId: number, leaderboardId: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/era/${eraId}/leaderboard/${leaderboardId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching the specified era leaderboard.');
        }
    }
}

export default Diablo3GameData;