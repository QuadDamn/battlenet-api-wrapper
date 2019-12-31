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

    /**
     * Returns data for the specified season, queue, team, and league.
     *
     * **queueId**: the standard available queueIds are:
     * `1`=WoL 1v1, `2`=WoL 2v2, `3`=WoL 3v3, `4`=WoL 4v4, `101`=HotS 1v1, `102`=HotS 2v2, `103`=HotS 3v3, `104`=HotS 4v4,
     * `201`=LotV 1v1, `202`=LotV 2v2, `203`=LotV 3v3, `204`=LotV 4v4, `206`=LotV Archon.
     *
     * Note that other available queues may not be listed here.
     *
     * **teamType**: there are two available teamTypes: `0`=arranged, `1`=random. **leagueId**:
     * available leagueIds are: `0`=Bronze, `1`=Silver, `2`=Gold, `3`=Platinum, `4`=Diamond, `5`=Master, `6`=Grandmaster.
     *
     * @param seasonId The season ID of the data to retrieve.
     * @param queueId The queue ID of the data to retrieve.
     * @param teamType The team type of the data to retrieve.
     * @param leagueId The league ID of the data to retrieve.
     */
    async getLeagueData(seasonId: string, queueId: string, teamType: string, leagueId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/league/${seasonId}/${queueId}/${teamType}/${leagueId}`,
            'Error fetching the league data.'
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
            throw new Error(`Starcraft 2 Game Data Error :: ${errorMessage}`);
        }
    }
}

export default Starcraft2GameData;