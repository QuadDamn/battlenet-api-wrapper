// Starcraft 2 Game Data API documentation: https://develop.battle.net/documentation/starcraft-2/game-data-apis

import {AxiosInstance} from "axios";

class Starcraft2GameData {
    private readonly axios: AxiosInstance;
    private readonly locale: string;
    private readonly gameBaseUrlPath: string = '/data/sc2';

    constructor(axiosInstance: AxiosInstance, locale: string) {
        this.axios = axiosInstance;
        this.locale = locale;
    }

    async getLeagueData(seasonId: string, queueId: string, teamType: string, leagueId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/league/${seasonId}/${queueId}/${teamType}/${leagueId}`,
            'Error fetching the league data.'
        );
    }

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(apiUrl);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Starcraft 2 Game Data Error :: ${errorMessage}`);
        }
    }
}

export default Starcraft2GameData;