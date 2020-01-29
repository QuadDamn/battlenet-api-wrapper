# Battle.net API Wrapper

A promised-based Node.js wrapper for the Battle.net Community and Data APIs (supports WoW, WoW Classic, SC2, D3, and Hearthstone).

## Installation

`$ npm install --save battlenet-api-wrapper`

## Prerequisites / General Information

- To get your `Client ID` and `Client Secret` needed for this library, please refer to the steps in the [Battle.net API Getting Started documentation](https://develop.battle.net/documentation/guides/getting-started).
- Battle.net API Documentation Reference: https://develop.battle.net/documentation

## Usage

The basic implementation of this library is as follows:

```
const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);
}());  
```

Once you have the `battleNetWrapper` class object instantiated, you then have access to all of the classes
that exist under that umbrella.  For each of the classes below, you will see a link to the full abstraction
documentation.  Each of functions are available on the respective class objects.

- `bnw.Diablo3Community` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/d3#diablo-3-community)
- `bnw.Diablo3GameData` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/d3#diablo-3-game-data)
- `bnw.HearthstoneGameData` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/hearthstone#hearthstone-game-data)
- `bnw.Starcraft2GameData` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/sc2#starcraft-2-game-data)
- `bnw.WowCommunity` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/wow#wow-community)
- `bnw.WowGameData` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/wow#wow-game-data)
- `bnw.WowProfileData` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/wow#wow-profile-data)
- `bnw.WowClassicGameData` [Usage Documentation](https://github.com/QuadDamn/battlenet-api-wrapper/tree/master/src/wowClassic#wow-classic-game-data)

## Having issues or have questions?

[Post an issue](https://github.com/QuadDamn/battlenet-api-wrapper/issues) and it will be responded to ASAP!

## Want to contribute?

Feel free!  [Create a Pull Request](https://github.com/QuadDamn/battlenet-api-wrapper/pulls) and I'll review it ASAP!

## Todos

- Add in test coverage.

## License

Battle.net API Wrapper is released under the  [MIT License](https://opensource.org/licenses/MIT).
