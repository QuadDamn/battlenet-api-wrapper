// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis

import {AxiosInstance} from "axios";

class WowProfileData {
    private readonly axios: AxiosInstance;
    private readonly defaultAxiosParams: object;
    private readonly namespace: string;
    private readonly gameBaseUrlPath: string = '/profile/wow/character';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object, origin: string) {
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.namespace = `profile-${origin}`;
    }

    async getCharacterAchievements(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/achievements`,
            'Error fetching character achievements.'
        );
    }

    async getCharacterAppearance(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/appearance`,
            'Error fetching character appearance.'
        );
    }

    async getCharacterCollectionsIndex(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections`,
            'Error fetching character collections.'
        );
    }

    async getCharacterMountsCollection(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/mounts`,
            'Error fetching character mounts collection.'
        );
    }

    async getCharacterPetsCollection(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/pets`,
            'Error fetching character pets collection.'
        );
    }

    async getCharacterEquipment(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/equipment`,
            'Error fetching character equipment.'
        );
    }

    async getCharacterHunterPets(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/hunter-pets`,
            'Error fetching character hunter pets.'
        );
    }

    async getCharacterMedia(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/character-media`,
            'Error fetching character media.'
        );
    }

    async getCharacterMythicKeystoneProfile(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile`,
            'Error fetching character mythic keystone profile.'
        );
    }

    async getCharacterMythicKeystoneSeasonDetails(realmSlug: string, characterName: string, seasonId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`,
            'Error fetching character mythic keystone profile for specified season.'
        );
    }

    async getCharacterSummary(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}`,
            'Error fetching character summary.'
        );
    }

    async getCharacterPvpBracketStatistics(realmSlug: string, characterName: string, pvpBracket: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-bracket/${pvpBracket}`,
            'Error fetching character pvp bracket statistics.'
        );
    }

    async getCharacterPvpSummary(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-summary`,
            'Error fetching character pvp summary.'
        );
    }

    async getCharacterReputations(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/reputations`,
            'Error fetching character reputations.'
        );
    }

    async getCharacterStatistics(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/statistics`,
            'Error fetching character statistics.'
        );
    }

    async getCharacterTitles(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/titles`,
            'Error fetching character titles.'
        );
    }

    async getGuildSummary(realmSlug: string, guildName: string): Promise<object> {
        return await this._handleApiCall(
            `/data/wow/guild//${realmSlug}/${guildName}`,
            'Error fetching guild summary.'
        );
    }

    async getGuildAchievements(realmSlug: string, guildName: string): Promise<object> {
        return await this._handleApiCall(
            `/data/wow/guild/${realmSlug}/${guildName}/achievements`,
            'Error fetching guild achievements.'
        );
    }

    async getGuildRoster(realmSlug: string, guildName: string): Promise<object> {
        return await this._handleApiCall(
            `/data/wow/guild/${realmSlug}/${guildName}`,
            'Error fetching guild roster.'
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl), {
                params: {
                    namespace: this.namespace,
                    ...this.defaultAxiosParams
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Profile Error :: ${errorMessage}`);
        }
    }
}

export default WowProfileData;