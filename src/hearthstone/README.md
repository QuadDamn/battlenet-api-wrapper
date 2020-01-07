
## Hearthstone Game Data  
  In order to use these functions, you will need to have initialized the BattleNetWrapper class and then you can use these functions.    
    
***Example implementation:*** 

```
const battleNetWrapper = require('battlenet-api-wrapper');
    
const clientId = 'YOUR_CLIENT_ID'; 
const clientSecret = 'YOUR_CLIENT_SECRET';    

(async function() {    
    const bnw = new battleNetWrapper();    
    await bnw.init(clientId, clientSecret);    
    const data = await bnw.HearthstoneGameData.searchCards({ class: 'mage', page: 1, pageSize: 3 }); 
}()); 
```   
  
**Available Functions**   

- [searchCards][36]
- [getCard][37] 
- [getDeck][39] 
- [getMetadata][41] 
- [getSpecificMetadata][42]  

### searchCards  
  
Returns all of the cards that match the passed parameters.  
  
**IMPORTANT NOTE:** Please ensure that your parameters match the field name, otherwise the Blizzard API won't know  
what to do with that particular query parameter and will just ignore it as you will see in the data returned to you.  
  
#### Parameters  
  
- `searchParams` **[CardSearch][28]**   

Returns **[Promise][310]&lt;[object][311]>**     
### getCard    
 Returns the card with an ID or slug that matches the one you specify.    
    
#### Parameters    
 - `cardSlug` **[number][312]** An ID or slug that uniquely identifies a card. You can discover these values by using the `/hearthstone/cards` search endpoint.    
    
Returns **[Promise][310]&lt;[object][311]>**     
 ### getDeck    
 Finds a deck by its deck code.    
    
#### Parameters    
 - `deckCode` **[string][313]** A code that identifies a deck. You can copy one from the game or various Hearthstone websites.    
    
Returns **[Promise][310]&lt;[object][311]>**     
 ### getMetadata    
 Returns information about the categorization of cards. Metadata includes the card set,    
set group (for example, Standard or Year of the Dragon), rarity, class, card type, minion type, and keywords.    
    
Returns **[Promise][310]&lt;[object][311]>**     
 ### getSpecificMetadata    
 Returns information about just one type of metadata.    
    
#### Parameters    
 - `type` **[string][313]** The type of the metadata to retrieve. Valid values include sets, setGroups, types,    
    rarities, classes, minionTypes, and keywords.    
    
Returns **[Promise][310]&lt;[object][311]>**  
  
________________________________  
  
### CardSearch  
  
Object parameters used for the drilldown searching of hearthstone cards.  
  
#### set  
  
(OPTIONAL) The slug of the set the card belongs to. If you do not supply a value, cards from all sets will be returned.  
  
Type: [string][313]  
  
#### classSlug  
  
(OPTIONAL) The slug of the card's class.  
  
Type: [string][313]  
  
#### manaCost  
  
(OPTIONAL) The mana cost required to play the card. You can include multiple values in a comma-separated list of numeric values.  
  
Type: [string][313]  
  
#### attack  
  
(OPTIONAL) The attack power of the minion or weapon. You can include multiple values in a comma-separated list of numeric values.  
  
Type: [string][313]  
  
#### health  
  
(OPTIONAL) The health of a minion. You can include multiple values in a comma-separated list of numeric values.  
  
Type: [string][313]  
  
#### collectible  
  
(OPTIONAL) Whether a card is collectible. A value of 1 indicates that collectible cards should be returned; 0 indicates uncollectible cards. To return all cards, use a value of '0,1'.  
  
Type: [string][313]  
  
#### rarity  
  
(OPTIONAL) The type of card (for example, minion, spell, and so on). This value must match the type slugs found in metadata.  
  
Type: [string][313]  
  
#### type  
  
(OPTIONAL) The type of minion card (for example, beast, murloc, dragon, and so on). This value must match the minion type slugs found in metadata.  
  
Type: [string][26]  
  
#### minionType  
  
(OPTIONAL) The type of minion card (for example, beast, murloc, dragon, and so on). This value must match the minion type slugs found in metadata.  
  
Type: [string][313]  
  
#### keyword  
  
(OPTIONAL) A required keyword on the card (for example, battlecry, deathrattle, and so on). This value must match the keyword slugs found in metadata.  
  
Type: [string][313]  
  
#### textFilter  
  
(OPTIONAL) A text string used to filter cards. You must include a locale along with the textFilter parameter.  
  
Type: [string][313]  
  
#### page  
  
(OPTIONAL) A page number.  
  
Type: [number][312]  
  
#### pageSize  
  
(OPTIONAL) The number of results to choose per page. A value will be selected automatically if you do not supply a pageSize or if the pageSize is higher than the maximum allowed.  
  
Type: [number][312]  
  
#### sort  
  
(OPTIONAL) The field used to sort the results. Valid values include manaCost, attack, health, and name. Results are sorted by manaCost by default. Cards will also be sorted by class automatically in most cases.  
  
Type: [string][313]  
  
#### order  
  
(OPTIONAL) The order in which to sort the results. Valid values are asc or desc. The default value is asc.  
  
Type: [string][313]   
  
[28]: #CardSearch  
  
[36]: #searchcards  
  [37]: #getcard    
 [39]: #getdeck    
 [41]: #getmetadata    
 [42]: #getspecificmetadata   
[310]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise    
 [311]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object    
 [312]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number    
 [313]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String