// Diablo 3 Game Data API documentation: https://develop.battle.net/documentation/diablo-3/game-data-apis

import {AxiosInstance} from "axios";

class Diablo3GameData {
    private readonly axios: AxiosInstance;
    private readonly gameBaseUrlPath: string = '/data/d3';

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    /**
     * Returns an index of available seasons.
     */
    async getSeasonIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/season`,
            'Error fetching the season index.'
        );
    }

    /**
     * Returns a leaderboard list for the specified season.
     *
     * @param seasonId The season for the leaderboard list; get a list of seasons with `getSeasonIndex`.
     */
    async getSeason(seasonId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/season/${seasonId}`,
            'Error fetching the specified season.'
        );
    }

    /**
     * Returns a the specified leaderboard for the specified season.
     *
     * @param seasonId The season for the leaderboard; get a list of seasons with `getSeasonIndex`.
     * @param leaderboardId The leaderboard to retrieve; get a list of leaderboards with `getSeason`.
     */
    async getSeasonLeaderboard(seasonId: number, leaderboardId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/season/${seasonId}/leaderboard/${leaderboardId}`,
            'Error fetching the specified season leaderboard.'
        );
    }

    /**
     * Returns an index of available eras.
     */
    async getEraIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/era`,
            'Error fetching the era index.'
        );
    }

    /**
     * Returns a leaderboard list for a particular era.
     *
     * @param eraId The era to retrieve; get a list of eras with `getEraIndex`.
     */
    async getEra(eraId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/era/${eraId}`,
            'Error fetching the specified era.'
        );
    }

    /**
     * Returns the specified leaderboard for the specified era.
     *
     * @param eraId The era for the leaderboard; get a list of eras with `getEraIndex`.
     * @param leaderboardId The leaderboard to retrieve; get a list of leaderboards with `getEra`.
     */
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
            const response = await this.axios.get(encodeURI(apiUrl));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: ${errorMessage}`);
        }
    }
}

export default Diablo3GameData;