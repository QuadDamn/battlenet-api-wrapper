## WoW Community
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';
const region = 'us';
const locale = 'en_US';
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret, region, locale);  
   const data = await bnw.WowCommunity.getBossMasterList();  
}());  
```  
  
**Available Functions**  

-   [getAchievement][74]  
-   [getBossMasterList][76]  
-   [getBoss][77]  
-   [getChallengeModeRealmLeaderboard][79]  
-   [getChallengeModeRegionLeaderboard][81]  
-   [getCharacterProfile][82]  
-   [getGuildProfile][84]    
-   [getItem][86]  
-   [getItemSet][88]  
-   [getMountMasterList][90]  
-   [getPetMasterList][91]  
-   [getPetAbilities][92]  
-   [getPetSpecies][94]    
-   [getPetStats][96]    
-   [getPvpLeaderboards][98]  
-   [getQuest][100]  
-   [getRealmStatusList][102]  
-   [getRecipe][103]  
-   [getSpell][105]  
-   [getZoneMasterList][107]  
-   [getZone][108]  
-   [getBattlegroups][110]  
-   [getCharacterRaces][111]  
-   [getCharacterClasses][112]  
-   [getCharacterAchievements][113]  
-   [getGuildRewards][114]  
-   [getGuildPerks][115]  
-   [getGuildAchievements][116]  
-   [getItemClasses][117]  
-   [getTalents][118]  
-   [getPetTypes][119]

### getAchievement  
  
Returns data about an individual achievement.  
  
#### Parameters  
  
-   `achievementId` **[number][312]** The ID of the achievement to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getBossMasterList  
  
Returns a list of all supported bosses. A "boss" in this context should be considered a boss encounter,  
which may include more than one NPC.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getBoss  
  
Returns information about the specified boss. A "boss" in this context should be considered a boss encounter,  
which may include more than one NPC.  
  
#### Parameters  
  
-   `bossId` **[number][312]** The ID of the boss to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getChallengeModeRealmLeaderboard  
  
The request returns data for all nine challenge mode maps (currently). The map field includes the current medal  
times for each dungeon. Each ladder provides data about each character that was part of each run. The  
character data includes the current cached specialization of the character while the member field includes the  
specialization of the character during the challenge mode run.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The realm to request.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getChallengeModeRegionLeaderboard  
  
The region leaderboard has the exact same data format as the realm leaderboards except there is no `realm` field.  
Instead, the response has the top 100 results gathered for each map for all of the available realm leaderboards  
in a region.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterProfile  
  
Returns a character profile.  In order to get additional fields, you have to specify them in the fields parameter  
as comma-delimited list.  
  
Your options for the fields are:  
  
achievements, appearance, feed, guild, hunterPets, items, mounts, pets, petSlots, professions, progression,  
pvp, quests, reputation, statistics, stats, talents, titles, audit.  
  
#### Parameters  
  
-   `realm` **[string][313]** The character's realm. Can be provided as the proper realm name or the normalized realm name.  
-   `characterName` **[string][313]** The name of the character to retrieve.  
-   `fields` **[string][313]** Specifies the data to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildProfile  
  
Returns a guild profile.  In order to get additional fields, you have to specify them in the fields parameter  
as comma-delimited list.  
  
Your options for the fields are:  
  
achievements, challenges, members, news  
  
#### Parameters  
  
-   `realm` **[string][313]** The guild's realm.  
-   `guildName` **[string][313]** The name of the guild to query.  
-   `fields` **[string][313]** The optional data to retrieve about the guild.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItem  
  
Returns detailed information about the item.  
  
#### Parameters  
  
-   `itemId` **[number][312]** The requested item's unique ID.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemSet  
  
Returns detailed information about the item set.  
  
#### Parameters  
  
-   `setId` **[string][313]** The requested set's unique ID.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMountMasterList  
  
Returns a list of all supported mounts.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPetMasterList  
  
Returns a list of all supported battle and vanity pets.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPetAbilities  
  
Returns data about a individual battle pet ability ID. This resource does not provide ability tooltips.  
  
#### Parameters  
  
-   `abilityId` **[string][313]** The ID of the ability to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPetSpecies  
  
Returns data about an individual pet species. Use pets as the `field` value in a  
character profile request to get species IDs. Each species also has data about its six abilities.  
  
#### Parameters  
  
-   `speciesId` **[string][313]**   
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPetStats  
  
Returns detailed information about a given species of pet.  
  
#### Parameters  
  
-   `speciesId` **[string][313]** The pet's species ID. This can be found by querying a user's list of pets via the Character Profile API.  
-   `level` **[number][312]** The pet's level. Pet levels max out at 25. If omitted, the API assumes a default value of 1. (optional, default `1`)  
-   `breedId` **[number][312]** The pet's breed. Retrievable via the Character Profile API. If omitted the API assumes a default value of 3. (optional, default `3`)  
-   `qualityId` **[number][312]** The pet's quality. Retrievable via the Character Profile API. Pet quality can range from 0 to 5  
    (0 is poor quality and 5 is legendary). If omitted, the API will assume a default value of 1. (optional, default `1`)  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpLeaderboards  
  
Returns leaderboard information for the 2v2, 3v3, 5v5, and Rated Battleground leaderboards.  
  
#### Parameters  
  
-   `bracket` **[string][313]** The type of leaderboard to retrieve. Valid entries are `2v2`, `3v3`, `5v5`, and `rbg`.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getQuest  
  
Returns metadata for a specified quest.  
  
#### Parameters  
  
-   `questId` **[string][313]** The ID of the quest to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getRealmStatusList  
  
Retrieves realm status information. This information is limited to whether or not the realm is up, the type  
and state of the realm, and the current population.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getRecipe  
  
Returns basic recipe information.  
  
#### Parameters  
  
-   `recipeId` **[string][313]** Unique ID for the desired recipe.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getSpell  
  
Returns information about spells.  
  
#### Parameters  
  
-   `spellId` **[string][313]** The ID of the spell to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getZoneMasterList  
  
Returns a list of all supported zones and their bosses. A "zone" in this context should be considered a  
dungeon or a raid, not a world zone. A "boss" in this context should be considered a boss encounter,  
which may include more than one NPC.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getZone  
  
Returns information about zones.  
  
#### Parameters  
  
-   `zoneId` **[string][313]** The ID of the zone to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getBattlegroups  
  
Returns a list of battlegroups for the specified region.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterRaces  
  
Returns a list of races and their associated faction, name, unique ID, and skin.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterClasses  
  
Returns a list of character classes.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterAchievements  
  
Returns a list of all achievements that characters can earn as well as the category structure and hierarchy.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildRewards  
  
The guild rewards data API provides a list of all guild rewards.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildPerks  
  
Returns a list of all guild perks.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildAchievements  
  
Returns a list of all guild achievements as well as the category structure and hierarchy.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemClasses  
  
Returns a list of item classes.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getTalents  
  
Returns a list of talents, specs, and glyphs for each class.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPetTypes  
  
Returns a list of the different battle pet types, including what they are strong and weak against.  
  
Returns **[Promise][310]&lt;[object][311]>**

## WoW Game Data
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.WowGameData.getBossMasterList();  
}());  
```  
  
**Available Functions**  

-   [getAchievementCategoriesIndex][120]  
-   [getAchievementCategory][121]  
-   [getAchievementIndex][123]  
-   [getAchievement][124]  
-   [getAchievementMedia][126]  
-   [getAzeriteEssenceIndex][128]  
-   [getAzeriteEssence][129]  
-   [getAzeriteEssenceMedia][131]    
-   [getConnectedRealmsIndex][133]  
-   [getConnectedRealm][134]  
-   [getCreatureFamiliesIndex][136]  
-   [getCreatureFamily][137]  
-   [getCreatureTypesIndex][139]  
-   [getCreatureType][140]  
-   [getCreature][142]  
-   [getCreatureDisplayMedia][144]   
-   [getCreatureFamilyMedia][146]    
-   [getGuildCrestComponentsIndex][148]  
-   [getGuildCrestBorderMedia][149]  
-   [getGuildCrestEmblemMedia][151]  
-   [getItemClassesIndex][153]  
-   [getItemClass][154]  
-   [getItemSubclass][156]  
-   [getItem][158]  
-   [getItemMedia][160]  
-   [getMythicKeystoneAffixesIndex][162]  
-   [getMythicKeystoneAffix][163]  
-   [getMythicRaidLeaderboard][165]  
-   [getMountsIndex][167]  
-   [getMount][168]  
-   [getMythicKeystoneDungeonsIndex][170]  
-   [getMythicKeystoneDungeon][171]  
-   [getMythicKeystoneIndex][173]  
-   [getMythicKeystonePeriodsIndex][174]  
-   [getMythicKeystonePeriod][175]  
-   [getMythicKeystoneSeasonsIndex][177]  
-   [getMythicKeystoneSeason][178]  
-   [getMythicKeystoneLeaderboardsIndex][180]  
-   [getMythicKeystoneLeaderboard][182]  
-   [getPetsIndex][184]  
-   [getPet][185]  
-   [getPlayableClassIndex][187]  
-   [getPlayableClass][188]  
-   [getPlayableClassMedia][190]  
-   [getPlayableClassPvpTalentSlots][192]  
-   [getPlayableRaceIndex][194]  
-   [getPlayableRace][195]  
-   [getPlayableSpecializationIndex][197]  
-   [getPlayableSpecialization][198]  
-   [getPowerTypesIndex][200]  
-   [getPowerType][201]  
-   [getPvpSeasonsIndex][203]  
-   [getPvpSeason][204]  
-   [getPvpLeaderboardsIndex][206]  
-   [getPvpLeaderboard][208]  
-   [getPvpRewardsIndex][210]  
-   [getPvpTierMedia][212]  
-   [getPvpTiersIndex][214]  
-   [getPvpTier][215]  
-   [getRealmsIndex][217]  
-   [getRealm][218]  
-   [getRegionsIndex][220]  
-   [getRegion][221]  
-   [getReputationFactionsIndex][223]  
-   [getReputationFaction][224]  
-   [getReputationTiersIndex][226]  
-   [getReputationTiers][227]  
-   [getTitlesIndex][229]  
-   [getTitle][230]  
-   [getWowTokenIndex][232]

### getAchievementCategoriesIndex  
  
Returns an index of achievement categories.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAchievementCategory  
  
Returns an achievement category by ID.  
  
#### Parameters  
  
-   `achievementCategoryId` **[number][312]** The ID of the achievement category.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAchievementIndex  
  
Returns an index of achievements.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAchievement  
  
Returns an achievement by ID.  
  
#### Parameters  
  
-   `achievementId` **[number][312]** The ID of the achievement.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAchievementMedia  
  
Returns media for an achievement by ID.  
  
#### Parameters  
  
-   `achievementId` **[number][312]** The ID of the achievement.  
  
Returns **[Promise][310]&lt;[object][311]>**   

### getAuctionHouse  
  
Returns all active auctions for a connected realm.
  
#### Parameters  
  
- `connectedRealmId` **[number][312]** The ID of the connected realm.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAzeriteEssenceIndex  
  
Returns an index of azerite essences.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAzeriteEssence  
  
Returns an azerite essence by ID.  
  
#### Parameters  
  
-   `azeriteEssenceId` **[string][313]** The ID of the azerite essence.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAzeriteEssenceMedia  
  
Returns media for an azerite essence by ID.  
  
#### Parameters  
  
-   `azeriteEssenceId` **[number][312]** The ID of the azerite essence.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getConnectedRealmsIndex  
  
Returns an index of connected realms.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getConnectedRealm  
  
Returns a connected realm by ID.  
  
#### Parameters  
  
-   `connectedRealmId` **[number][312]** The ID of the connected realm.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCreatureFamiliesIndex  
  
Returns an index of creature families.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCreatureFamily  
  
Returns a creature family by ID.  
  
#### Parameters  
  
-   `creatureFamilyId` **[number][312]** The ID of the creature family.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCreatureTypesIndex  
  
Returns an index of creature types.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCreatureType  
  
Returns a creature type by ID.  
  
#### Parameters  
  
-   `creatureTypeId` **[number][312]** The ID of the creature type.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCreature  
  
Returns a creature by ID.  
  
#### Parameters  
  
-   `creatureId` **[number][312]** The ID of the creature.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCreatureDisplayMedia  
  
Returns media for a creature display by ID.  
  
#### Parameters  
  
-   `creatureDisplayId` **[number][312]** The ID of the creature display.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCreatureFamilyMedia  
  
Returns media for a creature family by ID.  
  
#### Parameters  
  
-   `creatureFamilyId` **[number][312]** The ID of the creature family.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildCrestComponentsIndex  
  
Returns an index of guild crest media.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildCrestBorderMedia  
  
Returns media for a guild crest border by ID.  
  
#### Parameters  
  
-   `borderId` **[number][312]** The ID of the guild crest border.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildCrestEmblemMedia  
  
Returns media for a guild crest emblem by ID.  
  
#### Parameters  
  
-   `emblemId` **[number][312]** The ID of the guild crest emblem.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemClassesIndex  
  
Returns an index of item classes.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemClass  
  
Returns an item class by ID.  
  
#### Parameters  
  
-   `itemClassId` **[string][313]** The ID of the item class.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemSubclass  
  
Returns an item subclass by ID.  
  
#### Parameters  
  
-   `itemClassId` **[string][313]** The ID of the item class.  
-   `itemSubclassId` **[string][313]** The ID of the item subclass.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItem  
  
Returns an item by ID.  
  
#### Parameters  
  
-   `itemId` **[string][313]** The ID of the item.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemMedia  
  
Returns media for an item by ID.  
  
#### Parameters  
  
-   `itemId` **[string][313]** The ID of the item.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneAffixesIndex  
  
Returns a index of mythic keystone affixes.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneAffix  
  
Returns a mythic keystone affix by ID.  
  
#### Parameters  
  
-   `keystoneAffixId` **[number][312]** The ID of the Keystone affix.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicRaidLeaderboard  
  
Returns the leaderboard for a given raid and faction.  
  
#### Parameters  
  
-   `raid` **[string][313]** The raid for a leaderboard.  
-   `faction` **[string][313]** Player faction (`alliance` or `horde`).  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMountsIndex  
  
Returns an index of mounts.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMount  
  
Returns a mount by ID.  
  
#### Parameters  
  
-   `mountId` **[number][312]**   
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneDungeonsIndex  
  
Returns an index of Mythic Keystone dungeons.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneDungeon  
  
Returns a Mythic Keystone dungeon by ID.  
  
#### Parameters  
  
-   `dungeonId` **[number][312]**   
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneIndex  
  
Returns an index of links to other documents related to Mythic Keystone dungeons.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystonePeriodsIndex  
  
Returns an index of Mythic Keystone periods.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystonePeriod  
  
Returns a Mythic Keystone period by ID.  
  
#### Parameters  
  
-   `periodId` **[number][312]** The ID of the Mythic Keystone season period.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneSeasonsIndex  
  
Returns an index of Mythic Keystone seasons.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneSeason  
  
Returns a Mythic Keystone season by ID.  
  
#### Parameters  
  
-   `seasonId` **[number][312]**   
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneLeaderboardsIndex  
  
Returns an index of Mythic Keystone Leaderboard dungeon instances for a connected realm.  
  
#### Parameters  
  
-   `connectedRealmId` **[number][312]** The ID of the connected realm.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMythicKeystoneLeaderboard  
  
Returns a weekly Mythic Keystone Leaderboard by period.  
  
#### Parameters  
  
-   `connectedRealmId` **[number][312]** The ID of the connected realm.  
-   `dungeonId` **[number][312]** The ID of the dungeon.  
-   `period` **[number][312]** The unique identifier for the leaderboard period.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPetsIndex  
  
Returns an index of pets.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPet  
  
Returns a pet by ID.  
  
#### Parameters  
  
-   `petId` **[number][312]** The ID of the pet.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableClassIndex  
  
Returns an index of playable classes.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableClass  
  
Returns a playable class by ID.  
  
#### Parameters  
  
-   `playableClassId` **[number][312]** The ID of the playable class.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableClassMedia  
  
Returns media for a playable class by ID.  
  
#### Parameters  
  
-   `playableClassId` **[number][312]** The ID of the playable class.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableClassPvpTalentSlots  
  
Returns the PvP talent slots for a playable class by ID.  
  
#### Parameters  
  
-   `playableClassId` **[number][312]** The ID of the playable class.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableRaceIndex  
  
Returns an index of playable races.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableRace  
  
Returns a playable race by ID.  
  
#### Parameters  
  
-   `playableRaceId` **[number][312]** The ID of the playable race.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableSpecializationIndex  
  
Returns an index of playable specializations.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableSpecialization  
  
Returns a playable specialization by ID.  
  
#### Parameters  
  
-   `playableSpecializationId` **[number][312]** The ID of the playable specialization.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPowerTypesIndex  
  
Returns an index of power types.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPowerType  
  
Returns a power type by ID.  
  
#### Parameters  
  
-   `powerTypeId` **[number][312]**   
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpSeasonsIndex  
  
Returns an index of PvP seasons.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpSeason  
  
Returns a PvP season by ID.  
  
#### Parameters  
  
-   `pvpSeasonId` **[number][312]** The ID of the PvP season.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpLeaderboardsIndex  
  
Returns an index of PvP leaderboards for a PvP season.  
  
#### Parameters  
  
-   `pvpSeasonId` **[number][312]** The ID of the PvP season.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpLeaderboard  
  
Returns the PvP leaderboard of a specific PvP bracket for a PvP season.  
  
#### Parameters  
  
-   `pvpSeasonId` **[number][312]** The ID of the PvP season.  
-   `pvpBracket` **[string][313]** The PvP bracket type (1v1, 3v3, etc).  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpRewardsIndex  
  
Returns an index of PvP rewards for a PvP season.  
  
#### Parameters  
  
-   `pvpSeasonId` **[number][312]** The ID of the PvP season.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpTierMedia  
  
Returns media for a PvP tier by ID.  
  
#### Parameters  
  
-   `pvpTierId` **[number][312]** The ID of the PvP tier.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpTiersIndex  
  
Returns an index of PvP tiers.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPvpTier  
  
Returns a PvP tier by ID.  
  
#### Parameters  
  
-   `pvpTierId` **[number][312]** The ID of the PvP tier.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getRealmsIndex  
  
Returns an index of realms.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getRealm  
  
Returns a single realm by slug or ID.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getRegionsIndex  
  
Returns an index of regions.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getRegion  
  
Returns a region by ID.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The ID of the region.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getReputationFactionsIndex  
  
Returns an index of reputation factions.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getReputationFaction  
  
Returns a single reputation faction by ID.  
  
#### Parameters  
  
-   `reputationFactionId` **[number][312]** The ID of the reputation faction.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getReputationTiersIndex  
  
Returns an index of reputation tiers.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getReputationTiers  
  
Returns a single set of reputation tiers by ID.  
  
#### Parameters  
  
-   `reputationTiersId` **[number][312]** The ID of the set of reputation tiers.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getTitlesIndex  
  
Returns an index of titles.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getTitle  
  
Returns a title by ID.  
  
#### Parameters  
  
-   `titleId` **[string][313]** The ID of the title.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getWowTokenIndex  
  
Returns the WoW Token index.  
  
Returns **[Promise][310]&lt;[object][311]>**

## WoW Profile Data
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.WowProfileData.getCharacterAchievements('realmSlug', 'characterName');  
}());  
```  
  
**Available Functions**  

-   [getCharacterAchievements][233]  
-   [getCharacterAppearance][235]  
-   [getCharacterCollectionsIndex][237]    
-   [getCharacterMountsCollection][239]   
-   [getCharacterPetsCollection][241]  
-   [getCharacterEquipment][243]  
-   [getCharacterHunterPets][245]   
-   [getCharacterMedia][247]  
-   [getCharacterMythicKeystoneProfile][249]   
-   [getCharacterMythicKeystoneSeasonDetails][251]  
-   [getCharacterSummary][253]  
-   [getCharacterPvpBracketStatistics][255]  
-   [getCharacterPvpSummary][257]  
-   [getCharacterReputations][259]  
-   [getCharacterSpecializations][261]  
-   [getCharacterStatistics][263]  
-   [getCharacterTitles][265]  
-   [getGuildSummary][267]  
-   [getGuildAchievements][269]  
-   [getGuildRoster][271]  

### getCharacterAchievements  
  
Returns a summary of the achievements a character has completed.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterAppearance  
  
Returns a summary of a character's appearance settings.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterCollectionsIndex  
  
Returns an index of collection types for a character.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterMountsCollection  
  
Returns a summary of the mounts a character has obtained.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterPetsCollection  
  
Returns a summary of the battle pets a character has obtained.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterEquipment  
  
Returns a summary of the items equipped by a character.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterHunterPets  
  
If the character is a hunter, returns a summary of the character's hunter pets.  
Otherwise, returns an HTTP 404 Not Found error.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterMedia  
  
Returns a summary of the media assets available for a character (such as an avatar render).  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterMythicKeystoneProfile  
  
Returns the Mythic Keystone profile index for a character.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterMythicKeystoneSeasonDetails  
  
Returns the Mythic Keystone season details for a character.  
Returns a **404 Not Found** for characters that have not yet completed a Mythic Keystone dungeon for the specified season.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
-   `seasonId` **[string][313]**   
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterSummary  
  
Returns a profile summary for a character.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterPvpBracketStatistics  
  
Returns the PvP bracket statistics for a character.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
-   `pvpBracket` **[string][313]** The PvP bracket type (1v1, 3v3, etc).  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterPvpSummary  
  
Returns a PvP summary for a character.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterReputations  
  
Returns a summary of a character's reputations.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterSpecializations  
  
Returns a summary of a character's specializations.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterStatistics  
  
Returns a statistics summary for a character.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterTitles  
  
Returns a summary of titles a character has obtained.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `characterName` **[string][313]** The lowercase name of the character.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildSummary  
  
Returns a single guild summary by its name and realm.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `guildName` **[string][313]** The slug of the guild.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildAchievements  
  
Returns a single guild's achievements by name and realm.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `guildName` **[string][313]** The slug of the guild.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGuildRoster  
  
Returns a single guild's roster by its name and realm.  
  
#### Parameters  
  
-   `realmSlug` **[string][313]** The slug of the realm.  
-   `guildName` **[string][313]** The slug of the guild.  
  
Returns **[Promise][310]&lt;[object][311]>**

[74]: #getachievement  
  
[75]: #parameters-34  
  
[76]: #getbossmasterlist  
  
[77]: #getboss  
  
[78]: #parameters-35  
  
[79]: #getchallengemoderealmleaderboard  
  
[80]: #parameters-36  
  
[81]: #getchallengemoderegionleaderboard  
  
[82]: #getcharacterprofile  
  
[83]: #parameters-37  
  
[84]: #getguildprofile  
  
[85]: #parameters-38  
  
[86]: #getitem  
  
[87]: #parameters-39  
  
[88]: #getitemset  
  
[89]: #parameters-40  
  
[90]: #getmountmasterlist  
  
[91]: #getpetmasterlist  
  
[92]: #getpetabilities  
  
[93]: #parameters-41  
  
[94]: #getpetspecies  
  
[95]: #parameters-42  
  
[96]: #getpetstats  
  
[97]: #parameters-43  
  
[98]: #getpvpleaderboards  
  
[99]: #parameters-44  
  
[100]: #getquest  
  
[101]: #parameters-45  
  
[102]: #getrealmstatuslist  
  
[103]: #getrecipe  
  
[104]: #parameters-46  
  
[105]: #getspell  
  
[106]: #parameters-47  
  
[107]: #getzonemasterlist  
  
[108]: #getzone  
  
[109]: #parameters-48  
  
[110]: #getbattlegroups  
  
[111]: #getcharacterraces  
  
[112]: #getcharacterclasses  
  
[113]: #getcharacterachievements  
  
[114]: #getguildrewards  
  
[115]: #getguildperks  
  
[116]: #getguildachievements  
  
[117]: #getitemclasses  
  
[118]: #gettalents  
  
[119]: #getpettypes  
  
[120]: #getachievementcategoriesindex  
  
[121]: #getachievementcategory  
  
[122]: #parameters-49  
  
[123]: #getachievementindex  
  
[124]: #getachievement  
  
[125]: #parameters-50  
  
[126]: #getachievementmedia  
  
[127]: #parameters-51  
  
[128]: #getazeriteessenceindex  
  
[129]: #getazeriteessence  
  
[130]: #parameters-52  
  
[131]: #getazeriteessencemedia  
  
[132]: #parameters-53  
  
[133]: #getconnectedrealmsindex  
  
[134]: #getconnectedrealm  
  
[135]: #parameters-54  
  
[136]: #getcreaturefamiliesindex  
  
[137]: #getcreaturefamily  
  
[138]: #parameters-55  
  
[139]: #getcreaturetypesindex  
  
[140]: #getcreaturetype  
  
[141]: #parameters-56  
  
[142]: #getcreature  
  
[143]: #parameters-57  
  
[144]: #getcreaturedisplaymedia  
  
[145]: #parameters-58  
  
[146]: #getcreaturefamilymedia  
  
[147]: #parameters-59  
  
[148]: #getguildcrestcomponentsindex  
  
[149]: #getguildcrestbordermedia  
  
[150]: #parameters-60  
  
[151]: #getguildcrestemblemmedia  
  
[152]: #parameters-61  
  
[153]: #getitemclassesindex  
  
[154]: #getitemclass  
  
[155]: #parameters-62  
  
[156]: #getitemsubclass  
  
[157]: #parameters-63  
  
[158]: #getitem  
  
[159]: #parameters-64  
  
[160]: #getitemmedia  
  
[161]: #parameters-65  
  
[162]: #getmythickeystoneaffixesindex  
  
[163]: #getmythickeystoneaffix  
  
[164]: #parameters-66  
  
[165]: #getmythicraidleaderboard  
  
[166]: #parameters-67  
  
[167]: #getmountsindex  
  
[168]: #getmount  
  
[169]: #parameters-68  
  
[170]: #getmythickeystonedungeonsindex  
  
[171]: #getmythickeystonedungeon  
  
[172]: #parameters-69  
  
[173]: #getmythickeystoneindex  
  
[174]: #getmythickeystoneperiodsindex  
  
[175]: #getmythickeystoneperiod  
  
[176]: #parameters-70  
  
[177]: #getmythickeystoneseasonsindex  
  
[178]: #getmythickeystoneseason  
  
[179]: #parameters-71  
  
[180]: #getmythickeystoneleaderboardsindex  
  
[181]: #parameters-72  
  
[182]: #getmythickeystoneleaderboard  
  
[183]: #parameters-73  
  
[184]: #getpetsindex  
  
[185]: #getpet  
  
[186]: #parameters-74  
  
[187]: #getplayableclassindex  
  
[188]: #getplayableclass  
  
[189]: #parameters-75  
  
[190]: #getplayableclassmedia  
  
[191]: #parameters-76  
  
[192]: #getplayableclasspvptalentslots  
  
[193]: #parameters-77  
  
[194]: #getplayableraceindex  
  
[195]: #getplayablerace  
  
[196]: #parameters-78  
  
[197]: #getplayablespecializationindex  
  
[198]: #getplayablespecialization  
  
[199]: #parameters-79  
  
[200]: #getpowertypesindex  
  
[201]: #getpowertype  
  
[202]: #parameters-80  
  
[203]: #getpvpseasonsindex  
  
[204]: #getpvpseason  
  
[205]: #parameters-81  
  
[206]: #getpvpleaderboardsindex  
  
[207]: #parameters-82  
  
[208]: #getpvpleaderboard  
  
[209]: #parameters-83  
  
[210]: #getpvprewardsindex  
  
[211]: #parameters-84  
  
[212]: #getpvptiermedia  
  
[213]: #parameters-85  
  
[214]: #getpvptiersindex  
  
[215]: #getpvptier  
  
[216]: #parameters-86  
  
[217]: #getrealmsindex  
  
[218]: #getrealm  
  
[219]: #parameters-87  
  
[220]: #getregionsindex  
  
[221]: #getregion  
  
[222]: #parameters-88  
  
[223]: #getreputationfactionsindex  
  
[224]: #getreputationfaction  
  
[225]: #parameters-89  
  
[226]: #getreputationtiersindex  
  
[227]: #getreputationtiers  
  
[228]: #parameters-90  
  
[229]: #gettitlesindex  
  
[230]: #gettitle  
  
[231]: #parameters-91  
  
[232]: #getwowtokenindex  
  
[233]: #getcharacterachievements  
  
[234]: #parameters-92  
  
[235]: #getcharacterappearance  
  
[236]: #parameters-93  
  
[237]: #getcharactercollectionsindex  
  
[238]: #parameters-94  
  
[239]: #getcharactermountscollection  
  
[240]: #parameters-95  
  
[241]: #getcharacterpetscollection  
  
[242]: #parameters-96  
  
[243]: #getcharacterequipment  
  
[244]: #parameters-97  
  
[245]: #getcharacterhunterpets  
  
[246]: #parameters-98  
  
[247]: #getcharactermedia  
  
[248]: #parameters-99  
  
[249]: #getcharactermythickeystoneprofile  
  
[250]: #parameters-100  
  
[251]: #getcharactermythickeystoneseasondetails  
  
[252]: #parameters-101  
  
[253]: #getcharactersummary  
  
[254]: #parameters-102  
  
[255]: #getcharacterpvpbracketstatistics  
  
[256]: #parameters-103  
  
[257]: #getcharacterpvpsummary  
  
[258]: #parameters-104  
  
[259]: #getcharacterreputations  
  
[260]: #parameters-105  
  
[261]: #getcharacterspecializations  
  
[262]: #parameters-106  
  
[263]: #getcharacterstatistics  
  
[264]: #parameters-107  
  
[265]: #getcharactertitles  
  
[266]: #parameters-108  
  
[267]: #getguildsummary  
  
[268]: #parameters-109  
  
[269]: #getguildachievements  
  
[270]: #parameters-110  
  
[271]: #getguildroster  
  
[272]: #parameters-111

[310]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise  
  
[311]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object  
  
[312]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number  
  
[313]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
