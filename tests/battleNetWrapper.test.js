const battleNetWrapper = require('../index');

const d3Community = require('../dist/d3/community');
const d3GameData = require('../dist/d3/gameData');
const hearthstoneGameData = require('../dist/hearthstone/gameData');
const sc2Community = require('../dist/sc2/community');
const sc2GameData = require('../dist/sc2/gameData');
const wowGameData = require('../dist/wow/gameData');
const wowCommunity = require('../dist/wow/community');
const wowProfileData = require('../dist/wow/profileData');
const wowClassicGameData = require('../dist/wowClassic/gameData');

let bnw;

describe('/battleNetWrapper', () => {
    beforeEach(() => {
        bnw = new battleNetWrapper();
        bnw.init('clientId', 'clientSecret');
        bnw.axios.mockClear();
    });

    test('should have API properties', () => {



        expect(bnw).toEqual(
            expect(objectContaining({
               diablo3Community: expect.any(d3Community),

            }))
        )

    });


});