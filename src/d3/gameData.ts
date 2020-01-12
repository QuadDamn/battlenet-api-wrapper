// Diablo 3 Game Data API documentation: https://develop.battle.net/documentation/diablo-3/game-data-apis

import {AxiosInstance} from "axios";
import {ISeasonIndex, ISeason, ISeasonLeaderboard, IEraIndex, IEra, IEraLeaderboard} from "types/d3GameData";

class Diablo3GameData {
    private readonly axios: AxiosInstance;
    private readonly gameBaseUrlPath: string = '/data/d3';

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    /**
     * Returns an index of available seasons.
     */
    async getSeasonIndex(): Promise<ISeasonIndex> {
        try {
            const response = await this.axios.get<ISeasonIndex>(encodeURI(`${this.gameBaseUrlPath}/season`));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: Error fetching the season index.`);
        }
    }

    /**
     * Returns a leaderboard list for the specified season.
     *
     * @param seasonId The season for the leaderboard list; get a list of seasons with `getSeasonIndex`.
     */
    async getSeason(seasonId: number): Promise<ISeason> {
        try {
            const response = await this.axios.get<ISeason>(encodeURI(`${this.gameBaseUrlPath}/season/${seasonId}`));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified season.`);
        }
    }

    /**
     * Returns a the specified leaderboard for the specified season.
     *
     * @param seasonId The season for the leaderboard; get a list of seasons with `getSeasonIndex`.
     * @param leaderboardId The leaderboard to retrieve; get a list of leaderboards with `getSeason`.
     */
    async getSeasonLeaderboard(seasonId: number, leaderboardId: string): Promise<ISeasonLeaderboard> {
        try {
            const response = await this.axios.get<ISeasonLeaderboard>(encodeURI(`${this.gameBaseUrlPath}/season/${seasonId}/leaderboard/${leaderboardId}`));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified season leaderboard.`);
        }
    }

    /**
     * Returns an index of available eras.
     */
    async getEraIndex(): Promise<IEraIndex> {
        try {
            const response = await this.axios.get<IEraIndex>(encodeURI(`${this.gameBaseUrlPath}/era`));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: Error fetching the era index.`);
        }
    }

    /**
     * Returns a leaderboard list for a particular era.
     *
     * @param eraId The era to retrieve; get a list of eras with `getEraIndex`.
     */
    async getEra(eraId: number): Promise<IEra> {
        try {
            const response = await this.axios.get<IEra>(encodeURI(`${this.gameBaseUrlPath}/era/${eraId}`));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified era.`);
        }
    }

    /**
     * Returns the specified leaderboard for the specified era.
     *
     * @param eraId The era for the leaderboard; get a list of eras with `getEraIndex`.
     * @param leaderboardId The leaderboard to retrieve; get a list of leaderboards with `getEra`.
     */
    async getEraLeaderboard(eraId: number, leaderboardId: string): Promise<IEraLeaderboard> {
        try {
            const response = await this.axios.get<IEraLeaderboard>(encodeURI(`${this.gameBaseUrlPath}/era/${eraId}/leaderboard/${leaderboardId}`));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Diablo 3 Game Data Error :: Error fetching the specified era leaderboard.`);
        }
    }
}

export default Diablo3GameData;