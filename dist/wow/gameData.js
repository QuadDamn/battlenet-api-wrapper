"use strict";
// WoW Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WowGameData {
    constructor(axiosInstance, defaultAxiosParams, origin) {
        this.gameBaseUrlPath = '/data/wow';
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
        this.staticNamespace = `static-${origin}`;
        this.dynamicNamespace = `dynamic-${origin}`;
    }
    /****************************
     * Achievement API
     ****************************/
    /**
     * Returns an index of achievement categories.
     */
    getAchievementCategoriesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement-category/index`, 'Error fetching achievement categories index.', this.staticNamespace);
        });
    }
    /**
     * Returns an achievement category by ID.
     *
     * @param achievementCategoryId The ID of the achievement category.
     */
    getAchievementCategory(achievementCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement-category/${achievementCategoryId}`, 'Error fetching specified achievement category.', this.staticNamespace);
        });
    }
    /**
     * Returns an index of achievements.
     */
    getAchievementIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement/index`, 'Error fetching achievement index.', this.staticNamespace);
        });
    }
    /**
     * Returns an achievement by ID.
     *
     * @param achievementId The ID of the achievement.
     */
    getAchievement(achievementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement/${achievementId}`, 'Error fetching specified achievement.', this.staticNamespace);
        });
    }
    /**
     * Returns media for an achievement by ID.
     *
     * @param achievementId The ID of the achievement.
     */
    getAchievementMedia(achievementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/achievement/${achievementId}`, 'Error fetching specified achievement media.', this.staticNamespace);
        });
    }
    /****************************
     * Auction House API
     ****************************/
    /**
     * Returns all active auctions for a connected realm.
     *
     * @param connectedRealmId The ID of the connected realm.
     * @param header If-Modified-Since request HTTP header
     */
    getAuctionHouse(connectedRealmId, header) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/auctions`, 'Error fetching auction house data.', this.dynamicNamespace, header);
        });
    }
    /****************************
     * Azerite Essence API
     ****************************/
    /**
     * Returns an index of azerite essences.
     */
    getAzeriteEssenceIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/azerite-essence/index`, 'Error fetching azerite essence index.', this.staticNamespace);
        });
    }
    /**
     * Returns an azerite essence by ID.
     *
     * @param azeriteEssenceId The ID of the azerite essence.
     */
    getAzeriteEssence(azeriteEssenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/azerite-essence/${azeriteEssenceId}`, 'Error fetching specified azerite essence.', this.staticNamespace);
        });
    }
    /**
     * Returns media for an azerite essence by ID.
     *
     * @param azeriteEssenceId The ID of the azerite essence.
     */
    getAzeriteEssenceMedia(azeriteEssenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/azerite-essence/${azeriteEssenceId}`, 'Error fetching specified azerite essence media.', this.staticNamespace);
        });
    }
    /****************************
     * Connected Realms API
     ****************************/
    /**
     * Returns an index of connected realms.
     */
    getConnectedRealmsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/index`, 'Error fetching connected realm index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a connected realm by ID.
     *
     * @param connectedRealmId The ID of the connected realm.
     */
    getConnectedRealm(connectedRealmId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}`, 'Error fetching specified connected realm.', this.dynamicNamespace);
        });
    }
    /****************************
     * Creature API
     ****************************/
    /**
     * Returns an index of creature families.
     */
    getCreatureFamiliesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/index`, 'Error fetching creature families index.', this.staticNamespace);
        });
    }
    /**
     * Returns a creature family by ID.
     *
     * @param creatureFamilyId The ID of the creature family.
     */
    getCreatureFamily(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family.', this.staticNamespace);
        });
    }
    /**
     * Returns an index of creature types.
     */
    getCreatureTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/index`, 'Error fetching creature types index.', this.staticNamespace);
        });
    }
    /**
     * Returns a creature type by ID.
     *
     * @param creatureTypeId The ID of the creature type.
     */
    getCreatureType(creatureTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`, 'Error fetching specified creature type.', this.staticNamespace);
        });
    }
    /**
     * Returns a creature by ID.
     *
     * @param creatureId The ID of the creature.
     */
    getCreature(creatureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature/${creatureId}`, 'Error fetching specified creature.', this.staticNamespace);
        });
    }
    /**
     * Returns media for a creature display by ID.
     *
     * @param creatureDisplayId The ID of the creature display.
     */
    getCreatureDisplayMedia(creatureDisplayId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`, 'Error fetching specified creature display media.', this.staticNamespace);
        });
    }
    /**
     * Returns media for a creature family by ID.
     *
     * @param creatureFamilyId The ID of the creature family.
     */
    getCreatureFamilyMedia(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family media.', this.staticNamespace);
        });
    }
    /****************************
     * Guild Crest API
     ****************************/
    /**
     * Returns an index of guild crest media.
     */
    getGuildCrestComponentsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/index`, 'Error fetching guild crest components index.', this.staticNamespace);
        });
    }
    /**
     * Returns media for a guild crest border by ID.
     *
     * @param borderId The ID of the guild crest border.
     */
    getGuildCrestBorderMedia(borderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/border/${borderId}`, 'Error fetching guild crest border media.', this.staticNamespace);
        });
    }
    /**
     * Returns media for a guild crest emblem by ID.
     *
     * @param emblemId The ID of the guild crest emblem.
     */
    getGuildCrestEmblemMedia(emblemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`, 'Error fetching guild crest emblem media.', this.staticNamespace);
        });
    }
    /****************************
     * Item API
     ****************************/
    /**
     * Returns an index of item classes.
     */
    getItemClassesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/index`, 'Error fetching item class index.', this.staticNamespace);
        });
    }
    /**
     * Returns an item class by ID.
     *
     * @param itemClassId The ID of the item class.
     */
    getItemClass(itemClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}`, 'Error fetching specified item class.', this.staticNamespace);
        });
    }
    /**
     * Returns an item subclass by ID.
     *
     * @param itemClassId The ID of the item class.
     * @param itemSubclassId The ID of the item subclass.
     */
    getItemSubclass(itemClassId, itemSubclassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`, 'Error fetching specified item class subclass.', this.staticNamespace);
        });
    }
    /**
     * Returns an item by ID.
     *
     * @param itemId The ID of the item.
     */
    getItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemId}`, 'Error fetching specified item.', this.staticNamespace);
        });
    }
    /**
     * Returns media for an item by ID.
     *
     * @param itemId The ID of the item.
     */
    getItemMedia(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/item/${itemId}`, 'Error fetching specified item media.', this.staticNamespace);
        });
    }
    /****************************
     * Mythic Keystone Affix API
     ****************************/
    /**
     * Returns a index of mythic keystone affixes.
     */
    getMythicKeystoneAffixesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/keystone-affix/index`, 'Error fetching mythic keystone affix index.', this.staticNamespace);
        });
    }
    /**
     * Returns a mythic keystone affix by ID.
     *
     * @param keystoneAffixId The ID of the Keystone affix.
     */
    getMythicKeystoneAffix(keystoneAffixId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/keystone-affix/${keystoneAffixId}`, 'Error fetching specified mythic keystone affix.', this.staticNamespace);
        });
    }
    /*****************************
     * Mythic Raid Leaderboard API
     ****************************/
    /**
     * Returns the leaderboard for a given raid and faction.
     *
     * @param raid The raid for a leaderboard.
     * @param faction Player faction (`alliance` or `horde`).
     */
    getMythicRaidLeaderboard(raid, faction) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/leaderboard/hall-of-fame/${raid}/${faction}`, 'Error fetching specified mythic raid leaderboard.', this.dynamicNamespace);
        });
    }
    /*****************************
     * Mounts API
     ****************************/
    /**
     * Returns an index of mounts.
     */
    getMountsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mount/index`, 'Error fetching mount index.', this.staticNamespace);
        });
    }
    /**
     * Returns a mount by ID.
     *
     * @param mountId
     */
    getMount(mountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mount/${mountId}`, 'Error fetching specified mount.', this.staticNamespace);
        });
    }
    /*****************************
     * Mythic Keystone Dungeon API
     ****************************/
    /**
     * Returns an index of Mythic Keystone dungeons.
     */
    getMythicKeystoneDungeonsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/dungeon/index`, 'Error fetching mythic keystone dungeon index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a Mythic Keystone dungeon by ID.
     *
     * @param dungeonId
     */
    getMythicKeystoneDungeon(dungeonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/dungeon/${dungeonId}`, 'Error fetching specified mythic keystone dungeon.', this.dynamicNamespace);
        });
    }
    /**
     * Returns an index of links to other documents related to Mythic Keystone dungeons.
     */
    getMythicKeystoneIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/index`, 'Error fetching mythic keystone index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns an index of Mythic Keystone periods.
     */
    getMythicKeystonePeriodsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/period/index`, 'Error fetching mythic keystone periods index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a Mythic Keystone period by ID.
     *
     * @param periodId The ID of the Mythic Keystone season period.
     */
    getMythicKeystonePeriod(periodId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/period/${periodId}`, 'Error fetching specified mythic keystone period.', this.dynamicNamespace);
        });
    }
    /**
     * Returns an index of Mythic Keystone seasons.
     */
    getMythicKeystoneSeasonsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/season/index`, 'Error fetching mythic keystone seasons index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a Mythic Keystone season by ID.
     *
     * @param seasonId
     */
    getMythicKeystoneSeason(seasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/season/${seasonId}`, 'Error fetching specified mythic keystone season.', this.dynamicNamespace);
        });
    }
    /*********************************
     * Mythic Keystone Leaderboard API
     ********************************/
    /**
     * Returns an index of Mythic Keystone Leaderboard dungeon instances for a connected realm.
     *
     * @param connectedRealmId The ID of the connected realm.
     */
    getMythicKeystoneLeaderboardsIndex(connectedRealmId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`, 'Error fetching mythic keystone leaderboard index for specified connected realm.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a weekly Mythic Keystone Leaderboard by period.
     *
     * @param connectedRealmId The ID of the connected realm.
     * @param dungeonId The ID of the dungeon.
     * @param period The unique identifier for the leaderboard period.
     */
    getMythicKeystoneLeaderboard(connectedRealmId, dungeonId, period) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`, 'Error fetching specified mythic keystone leaderboard for connected realm.', this.dynamicNamespace);
        });
    }
    /*****************************
     * Pets API
     ****************************/
    /**
     * Returns an index of pets.
     */
    getPetsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pet/index`, 'Error fetching pet index.', this.staticNamespace);
        });
    }
    /**
     * Returns a pet by ID.
     *
     * @param petId The ID of the pet.
     */
    getPet(petId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pet/${petId}`, 'Error fetching specified pet.', this.staticNamespace);
        });
    }
    /****************************
     * Playable Class API
     ****************************/
    /**
     * Returns an index of playable classes.
     */
    getPlayableClassIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/index`, 'Error fetching playable class index.', this.staticNamespace);
        });
    }
    /**
     * Returns a playable class by ID.
     *
     * @param playableClassId The ID of the playable class.
     */
    getPlayableClass(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/${playableClassId}`, 'Error fetching specified playable class.', this.staticNamespace);
        });
    }
    /**
     * Returns media for a playable class by ID.
     *
     * @param playableClassId The ID of the playable class.
     */
    getPlayableClassMedia(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`, 'Error fetching specified playable class media.', this.staticNamespace);
        });
    }
    /**
     * Returns the PvP talent slots for a playable class by ID.
     *
     * @param playableClassId The ID of the playable class.
     */
    getPlayableClassPvpTalentSlots(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/${playableClassId}/pvp-talent-slots`, 'Error fetching specified playable class pvp talent slots.', this.staticNamespace);
        });
    }
    /****************************
     * Playable Race API
     ****************************/
    /**
     * Returns an index of playable races.
     */
    getPlayableRaceIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/index`, 'Error fetching playable race index.', this.staticNamespace);
        });
    }
    /**
     * Returns a playable race by ID.
     *
     * @param playableRaceId The ID of the playable race.
     */
    getPlayableRace(playableRaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/${playableRaceId}`, 'Error fetching specified playable race.', this.staticNamespace);
        });
    }
    /*****************************
     * Playable Specialization API
     ****************************/
    /**
     * Returns an index of playable specializations.
     */
    getPlayableSpecializationIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-specialization/index`, 'Error fetching playable specialization index.', this.staticNamespace);
        });
    }
    /**
     * Returns a playable specialization by ID.
     *
     * @param playableSpecializationId The ID of the playable specialization.
     */
    getPlayableSpecialization(playableSpecializationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-specialization/${playableSpecializationId}`, 'Error fetching specified playable specialization.', this.staticNamespace);
        });
    }
    /****************************
     * Power Type API
     ****************************/
    /**
     * Returns an index of power types.
     */
    getPowerTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/index`, 'Error fetching power type index.', this.staticNamespace);
        });
    }
    /**
     * Returns a power type by ID.
     *
     * @param powerTypeId
     */
    getPowerType(powerTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/${powerTypeId}`, 'Error fetching specified power type.', this.staticNamespace);
        });
    }
    /****************************
     * PvP Season API
     ****************************/
    /**
     * Returns an index of PvP seasons.
     */
    getPvpSeasonsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pvp-season/index`, 'Error fetching pvp season index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a PvP season by ID.
     *
     * @param pvpSeasonId The ID of the PvP season.
     */
    getPvpSeason(pvpSeasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}`, 'Error fetching specified pvp season.', this.dynamicNamespace);
        });
    }
    /**
     * Returns an index of PvP leaderboards for a PvP season.
     *
     * @param pvpSeasonId The ID of the PvP season.
     */
    getPvpLeaderboardsIndex(pvpSeasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`, 'Error fetching pvp season leaderboard index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns the PvP leaderboard of a specific PvP bracket for a PvP season.
     *
     * @param pvpSeasonId The ID of the PvP season.
     * @param pvpBracket The PvP bracket type (1v1, 3v3, etc).
     */
    getPvpLeaderboard(pvpSeasonId, pvpBracket) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}`, 'Error fetching specified pvp season leaderboard.', this.dynamicNamespace);
        });
    }
    /**
     * Returns an index of PvP rewards for a PvP season.
     *
     * @param pvpSeasonId The ID of the PvP season.
     */
    getPvpRewardsIndex(pvpSeasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pvp-season/${pvpSeasonId}/pvp-reward/index`, 'Error fetching pvp reward index.', this.dynamicNamespace);
        });
    }
    /****************************
     * PvP Tier API
     ****************************/
    /**
     * Returns media for a PvP tier by ID.
     *
     * @param pvpTierId The ID of the PvP tier.
     */
    getPvpTierMedia(pvpTierId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/pvp-tier/${pvpTierId}`, 'Error fetching specified pvp tier media.', this.staticNamespace);
        });
    }
    /**
     * Returns an index of PvP tiers.
     */
    getPvpTiersIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pvp-tier/index`, 'Error fetching pvp tier index.', this.staticNamespace);
        });
    }
    /**
     * Returns a PvP tier by ID.
     *
     * @param pvpTierId The ID of the PvP tier.
     */
    getPvpTier(pvpTierId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pvp-tier/${pvpTierId}`, 'Error fetching specified pvp tier.', this.staticNamespace);
        });
    }
    /****************************
     * Realm API
     ****************************/
    /**
     * Returns an index of realms.
     */
    getRealmsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/realm/index`, 'Error fetching realm index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a single realm by slug or ID.
     *
     * @param realmSlug The slug of the realm.
     */
    getRealm(realmSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/realm/${realmSlug}`, 'Error fetching specified realm.', this.dynamicNamespace);
        });
    }
    /****************************
     * Region API
     ****************************/
    /**
     * Returns an index of regions.
     */
    getRegionsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/region/index`, 'Error fetching region index.', this.dynamicNamespace);
        });
    }
    /**
     * Returns a region by ID.
     *
     * @param regionId The ID of the region.
     */
    getRegion(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/region/${regionId}`, 'Error fetching specified region.', this.dynamicNamespace);
        });
    }
    /****************************
     * Reputations API
     ****************************/
    /**
     * Returns an index of reputation factions.
     */
    getReputationFactionsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/reputation-faction/index`, 'Error fetching reputation faction index.', this.staticNamespace);
        });
    }
    /**
     * Returns a single reputation faction by ID.
     *
     * @param reputationFactionId The ID of the reputation faction.
     */
    getReputationFaction(reputationFactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/reputation-faction/${reputationFactionId}`, 'Error fetching specified reputation faction.', this.staticNamespace);
        });
    }
    /**
     * Returns an index of reputation tiers.
     */
    getReputationTiersIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/reputation-tiers/index`, 'Error fetching reputation faction index.', this.staticNamespace);
        });
    }
    /**
     * Returns a single set of reputation tiers by ID.
     *
     * @param reputationTiersId The ID of the set of reputation tiers.
     */
    getReputationTiers(reputationTiersId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/reputation-tiers/${reputationTiersId}`, 'Error fetching specified reputation tiers.', this.staticNamespace);
        });
    }
    /****************************
     * Titles API
     ****************************/
    /**
     * Returns an index of titles.
     */
    getTitlesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/title/index`, 'Error fetching title index.', this.staticNamespace);
        });
    }
    /**
     * Returns a title by ID.
     *
     * @param titleId The ID of the title.
     */
    getTitle(titleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/title/${titleId}`, 'Error fetching specified title.', this.staticNamespace);
        });
    }
    /****************************
     * WoW Token API
     ****************************/
    /**
     * Returns the WoW Token index.
     */
    getWowTokenIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/token/index`, 'Error fetching token index.', this.dynamicNamespace);
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage, namespace, header = '') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (namespace.includes("static-")) {
                    const response = yield this.axios.get(encodeURI(apiUrl), {
                        params: Object.assign({ namespace: namespace }, this.defaultAxiosParams),
                    });
                    return response.data;
                }
                else {
                    const response = yield this.axios.get(encodeURI(apiUrl), {
                        params: Object.assign({ namespace: namespace }, this.defaultAxiosParams),
                        headers: { 'If-Modified-Since': header },
                    });
                    if (apiUrl.includes("auctions")) {
                        return { auctions: response.data.auctions, lastModified: response.headers['last-modified'] };
                    }
                    else {
                        return response.data;
                    }
                }
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Game Data Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = WowGameData;
