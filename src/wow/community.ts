// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis

import {AxiosInstance} from "axios";

class WowCommunity {
    private readonly axios: AxiosInstance;
    private readonly defaultAxiosParams: object;
    private readonly gameBaseUrlPath: string = '/wow';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object) {
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
    }

    /****************************
     * Achievement API
     ****************************/

    /**
     * Returns data about an individual achievement.
     *
     * @param achievementId The ID of the achievement to retrieve.
     */
    async getAchievement(achievementId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/achievement/${achievementId}`,
            'Error fetching specified achievement.'
        );
    }

    /****************************
     * Boss API
     ****************************/

    /**
     * Returns a list of all supported bosses. A "boss" in this context should be considered a boss encounter,
     * which may include more than one NPC.
     */
    async getBossMasterList(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/boss`,
            'Error fetching master boss list.'
        );
    }

    /**
     * Returns information about the specified boss. A "boss" in this context should be considered a boss encounter,
     * which may include more than one NPC.
     *
     * @param bossId The ID of the boss to retrieve.
     */
    async getBoss(bossId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/boss/${bossId}`,
            'Error fetching specified boss.'
        );
    }

    /****************************
     * Challenge Mode API
     ****************************/

    /**
     * The request returns data for all nine challenge mode maps (currently). The map field includes the current medal
     * times for each dungeon. Each ladder provides data about each character that was part of each run. The
     * character data includes the current cached specialization of the character while the member field includes the
     * specialization of the character during the challenge mode run.
     *
     * @param realmSlug The realm to request.
     */
    async getChallengeModeRealmLeaderboard(realmSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/challenge/${realmSlug}`,
            'Error fetching challenge mode realm leaderboard.'
        );
    }

    /**
     * The region leaderboard has the exact same data format as the realm leaderboards except there is no `realm` field.
     * Instead, the response has the top 100 results gathered for each map for all of the available realm leaderboards
     * in a region.
     */
    async getChallengeModeRegionLeaderboard(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/challenge/region`,
            'Error fetching challenge mode region leaderboard.'
        );
    }

    /****************************
     * Character Profile API
     ****************************/

    /**
     * Returns a character profile.  In order to get additional fields, you have to specify them in the fields parameter
     * as comma-delimited list.
     *
     * Your options for the fields are:
     *
     * achievements, appearance, feed, guild, hunterPets, items, mounts, pets, petSlots, professions, progression,
     * pvp, quests, reputation, statistics, stats, talents, titles, audit.
     *
     * @param realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
     * @param characterName The name of the character to retrieve.
     * @param fields Specifies the data to retrieve.
     */
    async getCharacterProfile(realm: string, characterName: string, fields: string): Promise<object> {
        try {
            const response = await this.axios.get(
                encodeURI(`${this.gameBaseUrlPath}/character/${realm}/${characterName}`),
                {
                  params: {
                      fields: fields,
                      ...this.defaultAxiosParams
                  }
                });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Community Error :: Error fetching character profile.`);
        }
    }

    /****************************
     * Guild API
     ****************************/

    /**
     * Returns a guild profile.  In order to get additional fields, you have to specify them in the fields parameter
     * as comma-delimited list.
     *
     * Your options for the fields are:
     *
     * achievements, challenges, members, news
     *
     * @param realm The guild's realm.
     * @param guildName The name of the guild to query.
     * @param fields The optional data to retrieve about the guild.
     */
    async getGuildProfile(realm: string, guildName: string, fields: string): Promise<object> {
        try {
            const response = await this.axios.get(
                encodeURI(`${this.gameBaseUrlPath}/guild/${realm}/${guildName}`),
                {
                    params: {
                        fields: fields,
                        ...this.defaultAxiosParams
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Community Error :: Error fetching guild profile.`);
        }
    }

    /****************************
     * Item API
     ****************************/

    /**
     * Returns detailed information about the item.
     *
     * @param itemId The requested item's unique ID.
     */
    async getItem(itemId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/${itemId}`,
            'Error fetching specified item.'
        );
    }

    /**
     * Returns detailed information about the item set.
     *
     * @param setId The requested set's unique ID.
     */
    async getItemSet(setId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/set/${setId}`,
            'Error fetching specified item set.'
        );
    }

    /****************************
     * Mount API
     ****************************/

    /**
     * Returns a list of all supported mounts.
     */
    async getMountMasterList(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mount`,
            'Error fetching mount master list'
        );
    }

    /****************************
     * Pet API
     ****************************/

    /**
     * Returns a list of all supported battle and vanity pets.
     */
    async getPetMasterList(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pet`,
            'Error fetching pet master list.'
        );
    }

    /**
     * Returns data about a individual battle pet ability ID. This resource does not provide ability tooltips.
     *
     * @param abilityId The ID of the ability to retrieve.
     */
    async getPetAbilities(abilityId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pet/ability/${abilityId}`,
            'Error fetching specified pet abilities.'
        );
    }

    /**
     * Returns data about an individual pet species. Use pets as the `field` value in a
     * character profile request to get species IDs. Each species also has data about its six abilities.
     *
     * @param speciesId
     */
    async getPetSpecies(speciesId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pet/species/${speciesId}`,
            'Error fetching specified pet species.'
        );
    }

    /**
     * Returns detailed information about a given species of pet.
     *
     * @param speciesId The pet's species ID. This can be found by querying a user's list of pets via the Character Profile API.
     * @param level The pet's level. Pet levels max out at 25. If omitted, the API assumes a default value of 1.
     * @param breedId The pet's breed. Retrievable via the Character Profile API. If omitted the API assumes a default value of 3.
     * @param qualityId The pet's quality. Retrievable via the Character Profile API. Pet quality can range from 0 to 5
     * (0 is poor quality and 5 is legendary). If omitted, the API will assume a default value of 1.
     */
    async getPetStats(speciesId: string, level: number = 1, breedId: number = 3, qualityId: number = 1): Promise<object> {
        try {
            const response = await this.axios.get(
                encodeURI(`${this.gameBaseUrlPath}/pet/stats/${speciesId}`),
                {
                    params: {
                        level: level,
                        breedId: breedId,
                        qualityId: qualityId,
                        ...this.defaultAxiosParams
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Community Error :: Error fetching specified pet stats.`);
        }
    }

    /****************************
     * PvP Leaderboard API
     ****************************/

    /**
     * Returns leaderboard information for the 2v2, 3v3, 5v5, and Rated Battleground leaderboards.
     *
     * @param bracket The type of leaderboard to retrieve. Valid entries are `2v2`, `3v3`, `5v5`, and `rbg`.
     */
    async getPvpLeaderboards(bracket: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/leaderboard/${bracket}`,
            'Error fetching specified bracket leaderboard.'
        );
    }

    /****************************
     * Quest API
     ****************************/

    /**
     * Returns metadata for a specified quest.
     *
     * @param questId The ID of the quest to retrieve.
     */
    async getQuest(questId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/quest/${questId}`,
            'Error fetching specified quest.'
        );
    }

    /****************************
     * Realm Status API
     ****************************/

    /**
     * Retrieves realm status information. This information is limited to whether or not the realm is up, the type
     * and state of the realm, and the current population.
     */
    async getRealmStatusList(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/realm/status`,
            'Error fetching realm status list.'
        );
    }

    /****************************
     * Recipe API
     ****************************/

    /**
     * Returns basic recipe information.
     *
     * @param recipeId Unique ID for the desired recipe.
     */
    async getRecipe(recipeId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/recipe/${recipeId}`,
            'Error fetching specified recipe.'
        );
    }

    /****************************
     * Spell API
     ****************************/

    /**
     * Returns information about spells.
     *
     * @param spellId The ID of the spell to retrieve.
     */
    async getSpell(spellId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/spell/${spellId}`,
            'Error fetching specified spell.'
        );
    }


    /**
     * Returns a list of all supported zones and their bosses. A "zone" in this context should be considered a
     * dungeon or a raid, not a world zone. A "boss" in this context should be considered a boss encounter,
     * which may include more than one NPC.
     */
    async getZoneMasterList(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/zone`,
            'Error fetching zone master list.'
        );
    }

    /**
     * Returns information about zones.
     *
     * @param zoneId The ID of the zone to retrieve.
     */
    async getZone(zoneId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/zone`,
            'Error fetching specified zone.'
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
            throw new Error(`WoW Community Error :: ${errorMessage}`);
        }
    }
}

export default WowCommunity;