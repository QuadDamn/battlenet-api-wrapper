## WoW Classic Game Data
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('./dist/battleNetWrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.WowClassicGameData.getCreatureFamiliesIndex();  
}());  
```  
  
**Available Functions**  

-   [getCreatureFamiliesIndex][273]  
-   [getCreatureFamily][274]  
-   [getCreatureTypesIndex][276]  
-   [getCreatureType][277]  
-   [getCreature][279]   
-   [getCreatureDisplayMedia][281]  
-   [getCreatureFamilyMedia][283]  
-   [getGuildCrestComponentsIndex][285]  
-   [getGuildCrestBorderMedia][286]  
-   [getGuildCrestEmblemMedia][288]  
-   [getItemClassesIndex][290]  
-   [getItemClass][291]  
-   [getItemSubclass][293]  
-   [getItem][295]  
-   [getItemMedia][297]  
-   [getPlayableClassIndex][299]  
-   [getPlayableClass][300]  
-   [getPlayableClassMedia][302]  
-   [getPlayableRaceIndex][304]  
-   [getPlayableRace][305]  
-   [getPowerTypesIndex][307]  
-   [getPowerType][308]  

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
  
### getPlayableRaceIndex  
  
Returns an index of playable races.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPlayableRace  
  
Returns a playable race by ID.  
  
#### Parameters  
  
-   `playableRaceId` **[number][312]** The ID of the playable race.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPowerTypesIndex  
  
Returns an index of power types.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getPowerType  
  
Returns a power type by ID.  
  
#### Parameters  
  
-   `powerTypeId` **[number][312]**   
  
Returns **[Promise][310]&lt;[object][311]>**

[273]: #getcreaturefamiliesindex  
  
[274]: #getcreaturefamily  
  
[275]: #parameters-112  
  
[276]: #getcreaturetypesindex-1  
  
[277]: #getcreaturetype  
  
[278]: #parameters-113  
  
[279]: #getcreature
  
[280]: #parameters-114  
  
[281]: #getcreaturedisplaymedia
  
[282]: #parameters-115  
  
[283]: #getcreaturefamilymedia  
  
[284]: #parameters-116  
  
[285]: #getguildcrestcomponentsindex  
  
[286]: #getguildcrestbordermedia  
  
[287]: #parameters-117  
  
[288]: #getguildcrestemblemmedia 
  
[289]: #parameters-118  
  
[290]: #getitemclassesindex  
  
[291]: #getitemclass  
  
[292]: #parameters-119  
  
[293]: #getitemsubclass  
  
[294]: #parameters-120  
  
[295]: #getitem 
  
[296]: #parameters-121  
  
[297]: #getitemmedia  
  
[298]: #parameters-122  
  
[299]: #getplayableclassindex
  
[300]: #getplayableclass  
  
[301]: #parameters-123  
  
[302]: #getplayableclassmedia
  
[303]: #parameters-124  
  
[304]: #getplayableraceindex  
  
[305]: #getplayablerace
  
[306]: #parameters-125  
  
[307]: #getpowertypesindex  
  
[308]: #getpowertype 

[310]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise  
  
[311]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object  
  
[312]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number  
  
[313]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String