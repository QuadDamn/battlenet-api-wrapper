// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis

import {AxiosInstance} from "axios";

class WowGameData {
    private readonly axios: AxiosInstance;
    private readonly defaultAxiosParams: object;
    private readonly dynamicNamespace: string;
    private readonly staticNamespace: string;
    private readonly gameBaseUrlPath: string = '/data/wow';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object, origin: string) {
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.staticNamespace = `static-${origin}`;
        this.dynamicNamespace = `dynamic-${origin}`;
    }

    /****************************
     * Achievement API
     ****************************/

    async getAchievementCategoriesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/achievement-category/index`,
            'Error fetching achievement categories index.',
            this.staticNamespace
        );
    }

    async getAchievementCategory(achievementCategoryId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/achievement-category/${achievementCategoryId}`,
            'Error fetching specified achievement category.',
            this.staticNamespace
        );
    }

    async getAchievementIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/achievement/index`,
            'Error fetching achievement index.',
            this.staticNamespace
        );
    }

    async getAchievement(achievementId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/achievement/${achievementId}`,
            'Error fetching specified achievement.',
            this.staticNamespace
        );
    }

    async getAchievementMedia(achievementId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/achievement/${achievementId}`,
            'Error fetching specified achievement media.',
            this.staticNamespace
        );
    }

    /****************************
     * Azerite Essence API
     ****************************/

    async getAzeriteEssenceIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/azerite-essence/index`,
            'Error fetching azerite essence index.',
            this.staticNamespace
        );
    }

    async getAzeriteEssence(azeriteEssenceId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/azerite-essence/${azeriteEssenceId}`,
            'Error fetching specified azerite essence.',
            this.staticNamespace
        );
    }

    async getAzeriteEssenceMedia(azeriteEssenceId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/azerite-essence/${azeriteEssenceId}`,
            'Error fetching specified azerite essence media.',
            this.staticNamespace
        );
    }

    /****************************
     * Azerite Essence API
     ****************************/

    async getConnectedRealmsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/index`,
            'Error fetching connected realm index.',
            this.dynamicNamespace
        );
    }

    async getConnectedRealm(connectedRealmId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}`,
            'Error fetching specified connected realm.',
            this.dynamicNamespace
        );
    }

    /****************************
     * Creature API
     ****************************/

    async getCreatureFamiliesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/index`,
            'Error fetching creature families index.',
            this.staticNamespace
        );
    }

    async getCreatureFamily(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family.',
            this.staticNamespace
        );
    }

    async getCreatureTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/index`,
            'Error fetching creature types index.',
            this.staticNamespace
        );
    }

    async getCreatureType(creatureTypeId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`,
            'Error fetching specified creature type.',
            this.staticNamespace
        );
    }

    async getCreature(creatureId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/creature/${creatureId}`,
            'Error fetching specified creature.',
            this.staticNamespace
        );
    }

    async getCreatureDisplayMedia(creatureDisplayId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`,
            'Error fetching specified creature display media.',
            this.staticNamespace
        );
    }

    async getCreatureFamilyMedia(creatureFamilyId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`,
            'Error fetching specified creature family media.',
            this.staticNamespace
        );
    }

    /****************************
     * Guild Crest API
     ****************************/

    async getGuildCrestComponentsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/index`,
            'Error fetching guild crest components index.',
            this.staticNamespace
        );
    }

    async getGuildCrestBorderMedia(borderId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/border/${borderId}`,
            'Error fetching guild crest border media.',
            this.staticNamespace
        );
    }

    async getGuildCrestEmblemMedia(emblemId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`,
            'Error fetching guild crest emblem media.',
            this.staticNamespace
        );
    }

    /****************************
     * Item API
     ****************************/

    async getItemClassesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/index`,
            'Error fetching item class index.',
            this.staticNamespace
        );
    }

    async getItemClass(itemClassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}`,
            'Error fetching specified item class.',
            this.staticNamespace
        );
    }

    async getItemSubclass(itemClassId: string, itemSubclassId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
            'Error fetching specified item class subclass.',
            this.staticNamespace
        );
    }

    async getItem(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/item/${itemId}`,
            'Error fetching specified item.',
            this.staticNamespace
        );
    }

    async getItemMedia(itemId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/item/${itemId}`,
            'Error fetching specified item media.',
            this.staticNamespace
        );
    }

    /****************************
     * Mythic Keystone Affix API
     ****************************/

    async getMythicKeystoneAffixesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/keystone-affix/index`,
            'Error fetching mythic keystone affix index.',
            this.staticNamespace
        );
    }

    async getMythicKeystoneAffix(keystoneAffixId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/keystone-affix/${keystoneAffixId}`,
            'Error fetching specified mythic keystone affix.',
            this.staticNamespace
        );
    }

    /*****************************
     * Mythic Raid Leaderboard API
     ****************************/

    async getMythicRaidLeaderboard(raid: string, faction: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/leaderboard/hall-of-fame/${raid}/${faction}`,
            'Error fetching specified mythic raid leaderboard.',
            this.dynamicNamespace
        );
    }

    /*****************************
     * Mounts API
     ****************************/

    async getMountsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mount/index`,
            'Error fetching mount index.',
            this.staticNamespace
        );
    }

    async getMount(mountId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mount/${mountId}`,
            'Error fetching specified mount.',
            this.staticNamespace
        );
    }

    /*****************************
     * Mythic Keystone Dungeon API
     ****************************/

    async getMythicKeystoneDungeonsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mythic-keystone/dungeon/index`,
            'Error fetching mythic keystone dungeon index.',
            this.dynamicNamespace
        );
    }

    async getMythicKeystoneDungeon(dungeonId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mythic-keystone/dungeon/${dungeonId}`,
            'Error fetching specified mythic keystone dungeon.',
            this.dynamicNamespace
        );
    }

    async getMythicKeystoneIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mythic-keystone/index`,
            'Error fetching mythic keystone index.',
            this.dynamicNamespace
        );
    }

    async getMythicKeystonePeriodsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mythic-keystone/period/index`,
            'Error fetching mythic keystone periods index.',
            this.dynamicNamespace
        );
    }

    async getMythicKeystonePeriod(periodId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mythic-keystone/period/${periodId}`,
            'Error fetching specified mythic keystone period.',
            this.dynamicNamespace
        );
    }

    async getMythicKeystoneSeasonsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mythic-keystone/season/index`,
            'Error fetching mythic keystone seasons index.',
            this.dynamicNamespace
        );
    }

    async getMythicKeystoneSeason(seasonId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/mythic-keystone/season/${seasonId}`,
            'Error fetching specified mythic keystone season.',
            this.dynamicNamespace
        );
    }

    /*********************************
     * Mythic Keystone Leaderboard API
     ********************************/

    async getMythicKeystoneLeaderboardsIndex(connectedRealmId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`,
            'Error fetching mythic keystone leaderboard index for specified connected realm.',
            this.dynamicNamespace
        );
    }

    async getMythicKeystoneLeaderboard(connectedRealmId: number, dungeonId: number, period: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`,
            'Error fetching specified mythic keystone leaderboard for connected realm.',
            this.dynamicNamespace
        );
    }

    /*****************************
     * Pets API
     ****************************/

    async getPetsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pet/index`,
            'Error fetching pet index.',
            this.staticNamespace
        );
    }

    async getPet(petId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pet/${petId}`,
            'Error fetching specified pet.',
            this.staticNamespace
        );
    }

    /****************************
     * Playable Class API
     ****************************/

    async getPlayableClassIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/index`,
            'Error fetching playable class index.',
            this.staticNamespace
        );
    }

    async getPlayableClass(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/${playableClassId}`,
            'Error fetching specified playable class.',
            this.staticNamespace
        );
    }

    async getPlayableClassMedia(playableClassId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`,
            'Error fetching specified playable class media.',
            this.staticNamespace
        );
    }

    /****************************
     * Playable Race API
     ****************************/

    async getPlayableRaceIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/index`,
            'Error fetching playable race index.',
            this.staticNamespace
        );
    }

    async getPlayableRace(playableRaceId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/${playableRaceId}`,
            'Error fetching specified playable race.',
            this.staticNamespace
        );
    }

    /*****************************
     * Playable Specialization API
     ****************************/

    async getPlayableSpecializationIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-specialization/index`,
            'Error fetching playable specialization index.',
            this.staticNamespace
        );
    }

    async getPlayableSpecialization(playableSpecializationId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/playable-specialization/${playableSpecializationId}`,
            'Error fetching specified playable specialization.',
            this.staticNamespace
        );
    }

    /****************************
     * Power Type API
     ****************************/

    async getPowerTypesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/power-type/index`,
            'Error fetching power type index.',
            this.staticNamespace
        );
    }

    async getPowerType(powerTypeId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/power-type/${powerTypeId}`,
            'Error fetching specified power type.',
            this.staticNamespace
        );
    }

    /****************************
     * PvP Season API
     ****************************/

    async getPvpSeasonsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pvp-season/index`,
            'Error fetching pvp season index.',
            this.dynamicNamespace
        );
    }

    async getPvpSeason(pvpSeasonId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}`,
            'Error fetching specified pvp season.',
            this.dynamicNamespace
        );
    }

    async getPvpLeaderboardsIndex(pvpSeasonId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
            'Error fetching pvp season leaderboard index.',
            this.dynamicNamespace
        );
    }

    async getPvpLeaderboard(pvpSeasonId: number, pvpBracket: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}`,
            'Error fetching specified pvp season leaderboard.',
            this.dynamicNamespace
        );
    }

    async getPvpRewardsIndex(pvpSeasonId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}/pvp-reward/index`,
            'Error fetching pvp reward index.',
            this.dynamicNamespace
        );
    }

    /****************************
     * PvP Tier API
     ****************************/

    async getPvpTierMedia(pvpTierId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/media/pvp-tier/${pvpTierId}`,
            'Error fetching specified pvp tier media.',
            this.staticNamespace
        );
    }

    async getPvpTiersIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pvp-tier/index`,
            'Error fetching pvp tier index.',
            this.staticNamespace
        );
    }

    async getPvpTier(pvpTierId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/pvp-tier/${pvpTierId}`,
            'Error fetching specified pvp tier.',
            this.staticNamespace
        );
    }

    /****************************
     * Realm API
     ****************************/

    async getRealmsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/realm/index`,
            'Error fetching realm index.',
            this.dynamicNamespace
        );
    }

    async getRealm(realmSlug: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/realm/${realmSlug}`,
            'Error fetching specified realm.',
            this.dynamicNamespace
        );
    }

    /****************************
     * Region API
     ****************************/

    async getRegionsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/region/index`,
            'Error fetching region index.',
            this.dynamicNamespace
        );
    }

    async getRegion(regionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/region/${regionId}`,
            'Error fetching specified region.',
            this.dynamicNamespace
        );
    }


    /****************************
     * Reputations API
     ****************************/

    async getReputationFactionsIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/reputation-faction/index`,
            'Error fetching reputation faction index.',
            this.staticNamespace
        );
    }

    async getReputationFaction(reputationFactionId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/reputation-faction/${reputationFactionId}`,
            'Error fetching specified reputation faction.',
            this.staticNamespace
        );
    }

    async getReputationTiersIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/reputation-tiers/index`,
            'Error fetching reputation faction index.',
            this.staticNamespace
        );
    }

    async getReputationTiers(reputationTiersId: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/reputation-tiers/${reputationTiersId}`,
            'Error fetching specified reputation tiers.',
            this.staticNamespace
        );
    }

    /****************************
     * Realm API
     ****************************/

    async getTitlesIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/title/index`,
            'Error fetching title index.',
            this.staticNamespace
        );
    }

    async getTitle(titleId: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/title/${titleId}`,
            'Error fetching specified title.',
            this.staticNamespace
        );
    }

    /****************************
     * WoW Token API
     ****************************/

    async getWowTokenIndex(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/token/index`,
            'Error fetching token index.',
            this.dynamicNamespace
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string, namespace: string): Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl), {
                params: {
                    namespace: namespace,
                    ...this.defaultAxiosParams
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`WoW Game Data Error :: ${errorMessage}`);
        }
    }
}

export default WowGameData;