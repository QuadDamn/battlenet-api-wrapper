// WoW Profile Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/profile-apis

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

    /**
     * Returns a profile summary for an account.
     *
     * Because this endpoint provides data about the current logged-in user's World of Warcraft account,
     *  it requires an access token with the wow.profile scope acquired via the Authorization Code Flow.
     *`
     * @param accessToken The access token of the user requesting the profile information
     *
     */
    async getAccountProfile(accessToken: string) : Promise<object> {
        return await this._handleAccessTokenApiCall(
            `/profile/user/wow`,
            'Error fetching account summary.',
            accessToken
        );
    }

    /**
     * Returns a protected profile summary for a character.
     *
     * Because this endpoint provides data about the current logged-in user's World of Warcraft account,
     *  it requires an access token with the wow.profile scope acquired via the Authorization Code Flow.
     *`
     * @param realmId The ID of the character's realm.
     * @param characterId The ID of the character.
     * @param accessToken The access token of the user requesting the profile information
     *
     */
    async getProtectedCharacterSummary(realmId: number, characterId: number, accessToken: string) : Promise<object> {
        return await this._handleAccessTokenApiCall(
            `/profile/user/wow/protected-character/${realmId}-${characterId}`,
            'Error fetching protected character summary.',
            accessToken
        );
    }

    /**
     * Returns an index of collection types for an account.
     *
     * Because this endpoint provides data about the current logged-in user's World of Warcraft account,
     *  it requires an access token with the wow.profile scope acquired via the Authorization Code Flow.
     *
     * @param accessToken The access token of the user requesting the profile information
     *
     */
    async getAccountCollectionsIndex(accessToken: string) : Promise<object> {
        return await this._handleAccessTokenApiCall(
            `/profile/user/wow/collections`,
            'Error fetching account collections.',
            accessToken
        );
    }

    /**
     *
     * Returns a summary of the mounts an account has obtained.
     *
     * Because this endpoint provides data about the current logged-in user's World of Warcraft account,
     *  it requires an access token with the wow.profile scope acquired via the Authorization Code Flow.
     *
     * @param accessToken The access token of the user requesting the profile information
     *
     */
    async getAccountMountsCollectionSummary(accessToken: string) : Promise<object> {
        return await this._handleAccessTokenApiCall(
            `/profile/user/wow/collections/mounts`,
            'Error fetching account mount collections.',
            accessToken
        );
    }

        /**
     *
     * Returns a summary of the battle pets an account has obtained.
     *
     * Because this endpoint provides data about the current logged-in user's World of Warcraft account,
     *  it requires an access token with the wow.profile scope acquired via the Authorization Code Flow.
     *
     * @param accessToken The access token of the user requesting the profile information
     *
     */
    async getAccountPetsCollectionSummary(accessToken: string) : Promise<object> {
        return await this._handleAccessTokenApiCall(
            `/profile/user/wow/collections/pets`,
            'Error fetching account mount collections.',
            accessToken
        );
    }

    /**
     * Returns a summary of the achievements a character has completed.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterAchievements(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/achievements`,
            'Error fetching character achievements.'
        );
    }

    /**
     * Returns a summary of a character's appearance settings.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterAppearance(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/appearance`,
            'Error fetching character appearance.'
        );
    }

    /**
     * Returns an index of collection types for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterCollectionsIndex(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections`,
            'Error fetching character collections.'
        );
    }

    /**
     * Returns a summary of the mounts a character has obtained.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterMountsCollection(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/mounts`,
            'Error fetching character mounts collection.'
        );
    }

    /**
     * Returns a summary of the battle pets a character has obtained.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterPetsCollection(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/collections/pets`,
            'Error fetching character pets collection.'
        );
    }

    /**
     * Returns a summary of the items equipped by a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterEquipment(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/equipment`,
            'Error fetching character equipment.'
        );
    }

    /**
     * If the character is a hunter, returns a summary of the character's hunter pets.
     * Otherwise, returns an HTTP 404 Not Found error.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterHunterPets(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/hunter-pets`,
            'Error fetching character hunter pets.'
        );
    }

    /**
     * Returns a summary of the media assets available for a character (such as an avatar render).
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterMedia(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/character-media`,
            'Error fetching character media.'
        );
    }

    /**
     * Returns the Mythic Keystone profile index for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterMythicKeystoneProfile(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile`,
            'Error fetching character mythic keystone profile.'
        );
    }

    /**
     * Returns the Mythic Keystone season details for a character.
     * Returns a **404 Not Found** for characters that have not yet completed a Mythic Keystone dungeon for the specified season.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterMythicKeystoneSeasonDetails(realmSlug: string, characterName: string, seasonId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`,
            'Error fetching character mythic keystone profile for specified season.'
        );
    }

    /**
     * Returns a profile summary for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterSummary(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}`,
            'Error fetching character summary.'
        );
    }

    /**
     * Returns the PvP bracket statistics for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     * @param pvpBracket The PvP bracket type (1v1, 3v3, etc).
     *
     */
    async getCharacterPvpBracketStatistics(realmSlug: string, characterName: string, pvpBracket: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-bracket/${pvpBracket}`,
            'Error fetching character pvp bracket statistics.'
        );
    }

    /**
     * Returns a PvP summary for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterPvpSummary(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/pvp-summary`,
            'Error fetching character pvp summary.'
        );
    }

    /**
     * Returns a summary of a character's reputations.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterReputations(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/reputations`,
            'Error fetching character reputations.'
        );
    }

    /**
     * Returns a summary of a character's specializations.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterSpecializations(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/specializations`,
            'Error fetching character specializations.'
        );
    }

    /**
     * Returns a statistics summary for a character.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterStatistics(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/statistics`,
            'Error fetching character statistics.'
        );
    }

    /**
     * Returns a summary of titles a character has obtained.
     *
     * @param realmSlug The slug of the realm.
     * @param characterName The lowercase name of the character.
     *
     */
    async getCharacterTitles(realmSlug: string, characterName: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/${realmSlug}/${characterName}/titles`,
            'Error fetching character titles.'
        );
    }

    /**
     * Returns a single guild summary by its name and realm.
     *
     * @param realmSlug The slug of the realm.
     * @param guildName The slug of the guild.
     *
     */
    async getGuildSummary(realmSlug: string, guildName: string): Promise<object> {
        return await this._handleApiCall(
            `/data/wow/guild//${realmSlug}/${guildName}`,
            'Error fetching guild summary.'
        );
    }

    /**
     * Returns a single guild's achievements by name and realm.
     *
     * @param realmSlug The slug of the realm.
     * @param guildName The slug of the guild.
     *
     */
    async getGuildAchievements(realmSlug: string, guildName: string): Promise<object> {
        return await this._handleApiCall(
            `/data/wow/guild/${realmSlug}/${guildName}/achievements`,
            'Error fetching guild achievements.'
        );
    }

    /**
     * Returns a single guild's roster by its name and realm.
     *
     * @param realmSlug The slug of the realm.
     * @param guildName The slug of the guild.
     *
     */
    async getGuildRoster(realmSlug: string, guildName: string): Promise<object> {
        return await this._handleApiCall(
            `/data/wow/guild/${realmSlug}/${guildName}/roster`,
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

    async _handleAccessTokenApiCall(apiUrl: string, errorMessage: string, accessToken: string) : Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl), {
                params: {
                    namespace: this.namespace,
                    ...this.defaultAxiosParams
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Profile Error :: ${errorMessage}`);
        }
    }
}

export default WowProfileData;
