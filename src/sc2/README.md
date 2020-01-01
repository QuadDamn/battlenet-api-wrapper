## Starcraft 2 Community
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('./dist/battleNetWrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.Starcraft2Community.getSeason(seasonId);  
}());  
```  
  
**Available Functions**  

-   [getStaticProfileData][44]  
-   [getMetadata][46]  
-   [getProfile][48]  
-   [getLadderSummary][50]  
-   [getLadder][52]
-   [getGrandmasterLeaderboard][54]  
-   [getSeason][56]  
-   [getPlayer][58]    
-   [getLegacyProfile][60]  
-   [getLegacyProfileLadders][62]  
-   [getLegacyProfileMatches][64]  
-   [getLegacyAchievements][66]  
-   [getLegacyRewards][68]  

  
### getStaticProfileData  
  
Returns all static SC2 profile data (achievements, categories, criteria, and rewards).  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
  
Returns **[Promise][310]&lt;[object][311]>**  
  
### getMetadata  
  
Returns metadata for an individual's profile.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
-   `realmId` **[number][312]** The region of the profile (`1` or `2`).  
-   `profileId` **[number][312]** The profile ID.  
  
Returns **[Promise][310]&lt;[object][311]>**  
  
  
### getProfile  
  
Returns data about an individual SC2 profile.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
-   `realmId` **[number][312]** The region of the profile (`1` or `2`).  
-   `profileId` **[number][312]** The profile ID.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getLadderSummary  
  
Returns a ladder summary for an individual SC2 profile.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
-   `realmId` **[number][312]** The region of the profile (`1` or `2`).  
-   `profileId` **[number][312]** The profile ID.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getLadder  
  
Returns data about an individual profile's ladder.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
-   `realmId` **[number][312]** The region of the profile (`1` or `2`).  
-   `profileId` **[number][312]** The profile ID.  
-   `ladderId` **[number][312]** The ID of the ladder for which to retrieve data.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getGrandmasterLeaderboard  
  
Returns ladder data for the current season's grandmaster leaderboard.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getSeason  
  
Returns data about the current season.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayer  
  
Returns metadata for an individual's account.  
  
#### Parameters  
  
-   `accountId` **[number][312]** The ID of the account for which to retrieve data.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getLegacyProfile  
  
Retrieves data about an individual SC2 profile.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
-   `realmId` **[number][312]** The region of the profile (`1` or `2`).  
-   `profileId` **[number][312]** The profile ID.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getLegacyProfileLadders  
  
Retrieves data about an individual SC2 profile's ladders.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
-   `realmId` **[number][312]** The region of the profile (`1` or `2`).  
-   `profileId` **[number][312]** The profile ID.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getLegacyProfileMatches  
  
Returns data about an individual SC2 profile's match history.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
-   `realmId` **[number][312]** The region of the profile (`1` or `2`).  
-   `profileId` **[number][312]** The profile ID.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getLegacyAchievements  
  
Returns data about the achievements available in SC2.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getLegacyRewards  
  
Returns data about the rewards available in SC2.  
  
#### Parameters  
  
-   `regionId` **[number][312]** The region for the profile (`1`=US, `2`=EU, `3`=KO and TW, `5`=CN).  
  
Returns **[Promise][310]&lt;[object][311]>**

## Starcraft 2 Game Data
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('./dist/battleNetWrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.Starcraft2GameData.getLeagueData('seasonId', 'queueId', 'teamType', 'leagueId');  
}());  
```  
  
**Available Functions** 

-   [getLeagueData][70]  

### getLeagueData  
  
Returns data for the specified season, queue, team, and league.  
  
**queueId**: the standard available queueIds are:  
`1`=WoL 1v1, `2`=WoL 2v2, `3`=WoL 3v3, `4`=WoL 4v4, `101`=HotS 1v1, `102`=HotS 2v2, `103`=HotS 3v3, `104`=HotS 4v4,  
`201`=LotV 1v1, `202`=LotV 2v2, `203`=LotV 3v3, `204`=LotV 4v4, `206`=LotV Archon.  
  
Note that other available queues may not be listed here.  
  
**teamType**: there are two available teamTypes: `0`=arranged, `1`=random.
 
**leagueId**: available leagueIds are: `0`=Bronze, `1`=Silver, `2`=Gold, `3`=Platinum, `4`=Diamond, `5`=Master, `6`=Grandmaster.  
  
#### Parameters  
  
-   `seasonId` **[string][313]** The season ID of the data to retrieve.  
-   `queueId` **[string][313]** The queue ID of the data to retrieve.  
-   `teamType` **[string][313]** The team type of the data to retrieve.  
-   `leagueId` **[string][313]** The league ID of the data to retrieve.  
  
Returns **[Promise][310]&lt;[object][311]>**

[44]: #getstaticprofiledata  
  
[45]: #parameters-19  
  
[46]: #getmetadata  
  
[47]: #parameters-20  
  
[48]: #getprofile  
  
[49]: #parameters-21  
  
[50]: #getladdersummary  
  
[51]: #parameters-22  
  
[52]: #getladder  
  
[53]: #parameters-23  
  
[54]: #getgrandmasterleaderboard  
  
[55]: #parameters-24  
  
[56]: #getseason-1  
  
[57]: #parameters-25  
  
[58]: #getplayer  
  
[59]: #parameters-26  
  
[60]: #getlegacyprofile  
  
[61]: #parameters-27  
  
[62]: #getlegacyprofileladders  
  
[63]: #parameters-28  
  
[64]: #getlegacyprofilematches  
  
[65]: #parameters-29  
  
[66]: #getlegacyachievements  
  
[67]: #parameters-30  
  
[68]: #getlegacyrewards  
  
[69]: #parameters-31

[70]: #getleaguedata  
  
[71]: #parameters-32

[310]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise  
  
[311]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object  
  
[312]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number  
  
[313]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String