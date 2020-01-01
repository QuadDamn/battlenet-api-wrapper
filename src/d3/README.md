## Diablo 3 Community  
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.Diablo3Community.getActIndex();  
}());  
```  
  
**Available Functions**  
  
-   [getActIndex][1]  
-   [getAct][2]  
-   [getArtisan][4]  
-   [getRecipe][6]  
-   [getFollower][8]  
-   [getCharacterClass][10]  
-   [getApiSkill][12]  
-   [getItemTypeIndex][14]  
-   [getItemType][15]  
-   [getItem][17]  
-   [getApiAccount][19]  
-   [getApiHero][21]   
-   [getApiDetailedHeroItems][23]    
-   [getApiDetailedFollowerItems][25]  

### getActIndex  
  
Returns an index of acts.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getAct  
  
Returns a single act by ID.  
  
#### Parameters  
  
-   `actId` **[number][312]** The ID of the act to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getArtisan  
  
Returns a single artisan by slug.  
  
#### Parameters  
  
-   `artisanSlug` **[string][313]** The slug of the artisan to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getRecipe  
  
Returns a single recipe by slug for the specified artisan.  
  
#### Parameters  
  
-   `artisanSlug` **[string][313]** The slug of the artisan to retrieve.  
-   `recipeSlug` **[string][313]** The slug of the recipe to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getFollower  
  
Returns a single follower by slug.  
  
#### Parameters  
  
-   `followerSlug` **[string][313]** The slug of the follower to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getCharacterClass  
  
Returns a single character class by slug.  
  
#### Parameters  
  
-   `classSlug` **[string][313]** The slug of the character class to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getApiSkill  
  
Returns a single skill by slug for a specific character class.  
  
#### Parameters  
  
-   `classSlug` **[string][313]** The slug of the character class to retrieve.  
-   `skillSlug` **[string][313]** The slug of the skill to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemTypeIndex  
  
Returns an index of item types.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItemType  
  
Returns a single item type by slug.  
  
#### Parameters  
  
-   `itemTypeSlug` **[string][313]** The slug of the item type to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getItem  
  
Returns a single item by item slug and ID.  
  
#### Parameters  
  
-   `itemSlugAndId`  The slug and ID of the item to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getApiAccount  
  
Returns the specified account profile.  
  
**IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't  match perfectly with what Blizzard has on record.**
  
#### Parameters  
  
-   `account` **[string][313]** The BattleTag for the account to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getApiHero  
  
Returns a single hero.  
  
**IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't  match perfectly with what Blizzard has on record.**
  
#### Parameters  
  
-   `account` **[string][313]** The BattleTag for the account to retrieve.  
-   `heroId` **[string][313]** The ID of the hero to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getApiDetailedHeroItems  
  
Returns a list of items for the specified hero.  
  
**IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't  match perfectly with what Blizzard has on record.**
  
#### Parameters  
  
-   `account` **[string][313]** The BattleTag for the account to retrieve.  
-   `heroId` **[string][313]** The ID of the hero to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getApiDetailedFollowerItems  
  
Returns a list of items for the specified hero's followers.  
  
**IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't  match perfectly with what Blizzard has on record.**  
  
#### Parameters  
  
-   `account` **[string][313]** The BattleTag for the account to retrieve.  
-   `heroId` **[string][313]** The ID of the hero to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**


## Diablo 3 Game Data
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.Diablo3GameData.getSeasonIndex();  
}());
```

**Available Functions**  
  
-   [getSeasonIndex][27]  
-   [getSeason][28]   
-   [getSeasonLeaderboard][30]  
-   [getEraIndex][32]  
-   [getEra][33]   
-   [getEraLeaderboard][35]  

### getSeasonIndex  
  
Returns an index of available seasons.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getSeason  
  
Returns a leaderboard list for the specified season.  
  
#### Parameters  
  
-   `seasonId` **[number][312]** The season for the leaderboard list; get a list of seasons with `getSeasonIndex`.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getSeasonLeaderboard  
  
Returns a the specified leaderboard for the specified season.  
  
#### Parameters  
  
-   `seasonId` **[number][312]** The season for the leaderboard; get a list of seasons with `getSeasonIndex`.  
-   `leaderboardId` **[string][313]** The leaderboard to retrieve; get a list of leaderboards with `getSeason`.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getEraIndex  
  
Returns an index of available eras.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getEra  
  
Returns a leaderboard list for a particular era.  
  
#### Parameters  
  
-   `eraId` **[number][312]** The era to retrieve; get a list of eras with `getEraIndex`.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getEraLeaderboard  
  
Returns the specified leaderboard for the specified era.  
  
#### Parameters  
  
-   `eraId` **[number][312]** The era for the leaderboard; get a list of eras with `getEraIndex`.  
-   `leaderboardId` **[string][313]** The leaderboard to retrieve; get a list of leaderboards with `getEra`.  
  
Returns **[Promise][310]&lt;[object][311]>**

[1]: #getactindex  
  
[2]: #getact  
  
[3]: #parameters  
  
[4]: #getartisan  
  
[5]: #parameters-1  
  
[6]: #getrecipe  
  
[7]: #parameters-2  
  
[8]: #getfollower  
  
[9]: #parameters-3  
  
[10]: #getcharacterclass  
  
[11]: #parameters-4  
  
[12]: #getapiskill  
  
[13]: #parameters-5  
  
[14]: #getitemtypeindex  
  
[15]: #getitemtype  
  
[16]: #parameters-6  
  
[17]: #getitem  
  
[18]: #parameters-7  
  
[19]: #getapiaccount  
  
[20]: #parameters-8  
  
[21]: #getapihero  
  
[22]: #parameters-9  
  
[23]: #getapidetailedheroitems  
  
[24]: #parameters-10  
  
[25]: #getapidetailedfolloweritems  
  
[26]: #parameters-11  
  
[27]: #getseasonindex  
  
[28]: #getseason  
  
[29]: #parameters-12  
  
[30]: #getseasonleaderboard  
  
[31]: #parameters-13  
  
[32]: #geteraindex  
  
[33]: #getera  
  
[34]: #parameters-14  
  
[35]: #geteraleaderboard  
  
[36]: #parameters-15

[310]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise  
  
[311]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object  
  
[312]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number  
  
[313]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String