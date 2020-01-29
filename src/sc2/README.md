## Starcraft 2 Game Data
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('battlenet-api-wrapper');  
  
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