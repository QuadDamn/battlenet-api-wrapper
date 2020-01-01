## Hearthstone Game Data
  
In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.  
  
***Example implementation:***  
```  
const battleNetWrapper = require('./dist/battleNetWrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);  
   const data = await bnw.HearthstoneGameData.getCard('cardSlug');  
}());  
```  
  
**Available Functions**  

-   [getCard][37]  
-   [getDeck][39]   
-   [getMetadata][41]  
-   [getSpecificMetadata][42]  

### getCard  
  
Returns the card with an ID or slug that matches the one you specify.  
  
#### Parameters  
  
-   `cardSlug` **[number][312]** An ID or slug that uniquely identifies a card. You can discover these values by using the `/hearthstone/cards` search endpoint.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getDeck  
  
Finds a deck by its deck code.  
  
#### Parameters  
  
-   `deckCode` **[string][313]** A code that identifies a deck. You can copy one from the game or various Hearthstone websites.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getMetadata  
  
Returns information about the categorization of cards. Metadata includes the card set,  
set group (for example, Standard or Year of the Dragon), rarity, class, card type, minion type, and keywords.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
### getSpecificMetadata  
  
Returns information about just one type of metadata.  
  
#### Parameters  
  
-   `type` **[string][313]** The type of the metadata to retrieve. Valid values include sets, setGroups, types,  
    rarities, classes, minionTypes, and keywords.  
  
Returns **[Promise][310]&lt;[object][311]>**   
  
[37]: #getcard  
  
[38]: #parameters-16  
  
[39]: #getdeck  
  
[40]: #parameters-17  
  
[41]: #getmetadata  
  
[42]: #getspecificmetadata  
  
[43]: #parameters-18

[310]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise  
  
[311]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object  
  
[312]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number  
  
[313]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String