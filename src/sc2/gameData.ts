// Starcraft 2 Game Data API documentation: https://develop.battle.net/documentation/starcraft-2/game-data-apis

import {AxiosInstance} from "axios";

class Starcraft2GameData {
    private axios: AxiosInstance;
    private readonly locale: string;
    private gameBaseUrlPath: string = '/data/sc2';

    constructor(axiosInstance: AxiosInstance, locale: string) {
        this.axios = axiosInstance;
        this.locale = locale;
    }

    async getLeagueData(seasonId: string, queueId: string, teamType: string, leagueId: string): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/league/${seasonId}/${queueId}/${teamType}/${leagueId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Starcraft 2 Game Data Error :: Error fetching the league data.');
        }
    }
}

export default Starcraft2GameData;