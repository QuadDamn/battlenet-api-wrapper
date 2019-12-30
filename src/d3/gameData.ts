// Diablo 3 Game Data API documentation: https://develop.battle.net/documentation/diablo-3/game-data-apis

import {AxiosInstance} from "axios";

class Diablo3GameData {
    private readonly axios: AxiosInstance;
    private readonly locale: string;
    private readonly gameBaseUrlPath: string = '/data/d3';

    constructor(axiosInstance: AxiosInstance, locale: string) {
        this.axios = axiosInstance;
        this.locale = locale;
    }

    async getSeasonIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/season`,
            'Error fetching the season index.'
        );
    }

    async getSeason(seasonId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/season/${seasonId}`,
            'Error fetching the specified season.'
        );
    }

    async getSeasonLeaderboard(seasonId: number, leaderboardId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/season/${seasonId}/leaderboard/${leaderboardId}`,
            'Error fetching the specified season leaderboard.'
        );
    }

    async getEraIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/era`,
            'Error fetching the era index.'
        );
    }

    async getEra(eraId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/era/${eraId}`,
            'Error fetching the specified era.'
        );
    }

    async getEraLeaderboard(eraId: number, leaderboardId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/era/${eraId}/leaderboard/${leaderboardId}`,
            'Error fetching the specified era leaderboard.'
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(apiUrl);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: ${errorMessage}`);
        }
    }
}

export default Diablo3GameData;