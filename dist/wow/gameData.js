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
        this.origin = origin;
        this.staticNamespace = `static-${origin}`;
        this.dynamicNamespace = `dynamic-${origin}`;
    }
    /****************************
     * Achievement API
     ****************************/
    getAchievementCategoriesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement-category/index`, 'Error fetching achievement categories index.', this.staticNamespace);
        });
    }
    getAchievementCategory(achievementCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement-category/${achievementCategoryId}`, 'Error fetching specified achievement category.', this.staticNamespace);
        });
    }
    getAchievementIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement/index`, 'Error fetching achievement index.', this.staticNamespace);
        });
    }
    getAchievement(achievementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/achievement/${achievementId}`, 'Error fetching specified achievement.', this.staticNamespace);
        });
    }
    getAchievementMedia(achievementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/achievement/${achievementId}`, 'Error fetching specified achievement media.', this.staticNamespace);
        });
    }
    /****************************
     * Azerite Essence API
     ****************************/
    getAzeriteEssenceIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/azerite-essence/index`, 'Error fetching azerite essence index.', this.staticNamespace);
        });
    }
    getAzeriteEssence(azeriteEssenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/azerite-essence/${azeriteEssenceId}`, 'Error fetching specified azerite essence.', this.staticNamespace);
        });
    }
    getAzeriteEssenceMedia(azeriteEssenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/azerite-essence/${azeriteEssenceId}`, 'Error fetching specified azerite essence media.', this.staticNamespace);
        });
    }
    /****************************
     * Azerite Essence API
     ****************************/
    getConnectedRealmsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/index`, 'Error fetching connected realm index.', this.dynamicNamespace);
        });
    }
    getConnectedRealm(connectedRealmId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}`, 'Error fetching specified connected realm.', this.dynamicNamespace);
        });
    }
    /****************************
     * Creature API
     ****************************/
    getCreatureFamiliesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/index`, 'Error fetching creature families index.', this.staticNamespace);
        });
    }
    getCreatureFamily(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family.', this.staticNamespace);
        });
    }
    getCreatureTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/index`, 'Error fetching creature types index.', this.staticNamespace);
        });
    }
    getCreatureType(creatureTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`, 'Error fetching specified creature type.', this.staticNamespace);
        });
    }
    getCreature(creatureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/creature/${creatureId}`, 'Error fetching specified creature.', this.staticNamespace);
        });
    }
    getCreatureDisplayMedia(creatureDisplayId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`, 'Error fetching specified creature display media.', this.staticNamespace);
        });
    }
    getCreatureFamilyMedia(creatureFamilyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`, 'Error fetching specified creature family media.', this.staticNamespace);
        });
    }
    /****************************
     * Guild Crest API
     ****************************/
    getGuildCrestComponentsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/index`, 'Error fetching guild crest components index.', this.staticNamespace);
        });
    }
    getGuildCrestBorderMedia(borderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/border/${borderId}`, 'Error fetching guild crest border media.', this.staticNamespace);
        });
    }
    getGuildCrestEmblemMedia(emblemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`, 'Error fetching guild crest emblem media.', this.staticNamespace);
        });
    }
    /****************************
     * Item API
     ****************************/
    getItemClassesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/index`, 'Error fetching item class index.', this.staticNamespace);
        });
    }
    getItemClass(itemClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}`, 'Error fetching specified item class.', this.staticNamespace);
        });
    }
    getItemSubclass(itemClassId, itemSubclassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`, 'Error fetching specified item class subclass.', this.staticNamespace);
        });
    }
    getItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/item/${itemId}`, 'Error fetching specified item.', this.staticNamespace);
        });
    }
    getItemMedia(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/item/${itemId}`, 'Error fetching specified item media.', this.staticNamespace);
        });
    }
    /****************************
     * Mythic Keystone Affix API
     ****************************/
    getMythicKeystoneAffixesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/keystone-affix/index`, 'Error fetching mythic keystone affix index.', this.staticNamespace);
        });
    }
    getMythicKeystoneAffix(keystoneAffixId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/keystone-affix/${keystoneAffixId}`, 'Error fetching specified mythic keystone affix.', this.staticNamespace);
        });
    }
    /*****************************
     * Mythic Raid Leaderboard API
     ****************************/
    getMythicRaidLeaderboard(raid, faction) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/leaderboard/hall-of-fame/${raid}/${faction}`, 'Error fetching specified mythic raid leaderboard.', this.dynamicNamespace);
        });
    }
    /*****************************
     * Mounts API
     ****************************/
    getMountsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mount/index`, 'Error fetching mount index.', this.staticNamespace);
        });
    }
    getMount(mountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mount/${mountId}`, 'Error fetching specified mount.', this.staticNamespace);
        });
    }
    /*****************************
     * Mythic Keystone Dungeon API
     ****************************/
    getMythicKeystoneDungeonsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/dungeon/index`, 'Error fetching mythic keystone dungeon index.', this.dynamicNamespace);
        });
    }
    getMythicKeystoneDungeon(dungeonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/dungeon/${dungeonId}`, 'Error fetching specified mythic keystone dungeon.', this.dynamicNamespace);
        });
    }
    getMythicKeystoneIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/index`, 'Error fetching mythic keystone index.', this.dynamicNamespace);
        });
    }
    getMythicKeystonePeriodsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/period/index`, 'Error fetching mythic keystone periods index.', this.dynamicNamespace);
        });
    }
    getMythicKeystonePeriod(periodId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/period/${periodId}`, 'Error fetching specified mythic keystone period.', this.dynamicNamespace);
        });
    }
    getMythicKeystoneSeasonsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/season/index`, 'Error fetching mythic keystone seasons index.', this.dynamicNamespace);
        });
    }
    getMythicKeystoneSeason(seasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/mythic-keystone/season/${seasonId}`, 'Error fetching specified mythic keystone season.', this.dynamicNamespace);
        });
    }
    /*********************************
     * Mythic Keystone Leaderboard API
     ********************************/
    getMythicKeystoneLeaderboardsIndex(connectedRealmId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`, 'Error fetching mythic keystone leaderboard index for specified connected realm.', this.dynamicNamespace);
        });
    }
    getMythicKeystoneLeaderboard(connectedRealmId, dungeonId, period) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`, 'Error fetching specified mythic keystone leaderboard for connected realm.', this.dynamicNamespace);
        });
    }
    /*****************************
     * Pets API
     ****************************/
    getPetsIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pet/index`, 'Error fetching pet index.', this.staticNamespace);
        });
    }
    getPet(petId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/pet/${petId}`, 'Error fetching specified pet.', this.staticNamespace);
        });
    }
    /****************************
     * Playable Class API
     ****************************/
    getPlayableClassIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/index`, 'Error fetching playable class index.', this.staticNamespace);
        });
    }
    getPlayableClass(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-class/${playableClassId}`, 'Error fetching specified playable class.', this.staticNamespace);
        });
    }
    getPlayableClassMedia(playableClassId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`, 'Error fetching specified playable class media.', this.staticNamespace);
        });
    }
    /****************************
     * Playable Race API
     ****************************/
    getPlayableRaceIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/index`, 'Error fetching playable race index.', this.staticNamespace);
        });
    }
    getPlayableRace(playableRaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-race/${playableRaceId}`, 'Error fetching specified playable race.', this.staticNamespace);
        });
    }
    /*****************************
     * Playable Specialization API
     ****************************/
    getPlayableSpecializationIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-specialization/index`, 'Error fetching playable specialization index.', this.staticNamespace);
        });
    }
    getPlayableSpecialization(playableSpecializationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/playable-specialization/${playableSpecializationId}`, 'Error fetching specified playable specialization.', this.staticNamespace);
        });
    }
    /****************************
     * Power Type API
     ****************************/
    getPowerTypesIndex() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/index`, 'Error fetching power type index.', this.staticNamespace);
        });
    }
    getPowerType(powerTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._handleApiCall(`${this.gameBaseUrlPath}/power-type/${powerTypeId}`, 'Error fetching specified power type.', this.staticNamespace);
        });
    }
    /********************************
     * Private Class Helper Functions
     ********************************/
    _handleApiCall(apiUrl, errorMessage, namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.get(encodeURI(apiUrl), {
                    params: Object.assign({ namespace: namespace }, this.defaultAxiosParams)
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error(`WoW Game Data Error :: ${errorMessage}`);
            }
        });
    }
}
exports.default = WowGameData;
