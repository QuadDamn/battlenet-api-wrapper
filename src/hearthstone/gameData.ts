// Hearthstone Game Data API documentation: https://develop.battle.net/documentation/hearthstone/game-data-apis

import {AxiosInstance} from "axios";

/**
 * Object parameters used for the drilldown searching of hearthstone cards.
 */
interface CardSearch {

    /**
     * (OPTIONAL) The slug of the set the card belongs to. If you do not supply a value, cards from all sets will be returned.
     */
    set?: string,

    /**
     * (OPTIONAL) The slug of the card's class.
     */
    classSlug?: string,

    /**
     * (OPTIONAL) The mana cost required to play the card. You can include multiple values in a comma-separated list of numeric values.
     */
    manaCost?: string,

    /**
     * (OPTIONAL) The attack power of the minion or weapon. You can include multiple values in a comma-separated list of numeric values.
     */
    attack?: string,

    /**
     * (OPTIONAL) The health of a minion. You can include multiple values in a comma-separated list of numeric values.
     */
    health?: string,

    /**
     * (OPTIONAL) Whether a card is collectible. A value of 1 indicates that collectible cards should be returned; 0 indicates uncollectible cards. To return all cards, use a value of '0,1'.
     */
    collectible?: string,

    /**
     * (OPTIONAL) The type of card (for example, minion, spell, and so on). This value must match the type slugs found in metadata.
     */
    rarity?: string,

    /**
     * (OPTIONAL) The type of minion card (for example, beast, murloc, dragon, and so on). This value must match the minion type slugs found in metadata.
     */
    type?: string,

    /**
     * (OPTIONAL) The type of minion card (for example, beast, murloc, dragon, and so on). This value must match the minion type slugs found in metadata.
     */
    minionType?: string,

    /**
     * (OPTIONAL) A required keyword on the card (for example, battlecry, deathrattle, and so on). This value must match the keyword slugs found in metadata.
     */
    keyword?: string,

    /**
     * (OPTIONAL) A text string used to filter cards. You must include a locale along with the textFilter parameter.
     */
    textFilter?: string,

    /**
     * (OPTIONAL) A page number.
     */
    page?: number,

    /**
     * (OPTIONAL) The number of results to choose per page. A value will be selected automatically if you do not supply a pageSize or if the pageSize is higher than the maximum allowed.
     */
    pageSize?: number,

    /**
     * (OPTIONAL) The field used to sort the results. Valid values include manaCost, attack, health, and name. Results are sorted by manaCost by default. Cards will also be sorted by class automatically in most cases.
     */
    sort?: string,

    /**
     * (OPTIONAL) The order in which to sort the results. Valid values are asc or desc. The default value is asc.
     */
    order?: string
}

class HearthstoneGameData {
    private readonly axios: AxiosInstance;
    private readonly defaultAxiosParams: object;
    private readonly gameBaseUrlPath: string = '/hearthstone';

    constructor(axiosInstance: AxiosInstance, defaultAxiosParams: object) {
        this.axios = axiosInstance;
        this.defaultAxiosParams = defaultAxiosParams;
    }

    /****************************
     * Cards API
     ****************************/

    /**
     * Returns all of the cards that match the passed parameters.
     *
     * @param searchParams
     */
    async searchCards(searchParams: CardSearch): Promise<object> {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/cards`, {
                params: {
                    ...searchParams,
                    ...this.defaultAxiosParams,
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching cards that matched the passed parameters.');
        }
    }

    /**
     * Returns the card with an ID or slug that matches the one you specify.
     *
     * @param cardSlug An ID or slug that uniquely identifies a card. You can discover these values by using the `/hearthstone/cards` search endpoint.
     */
    async getCard(cardSlug: number): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/cards/${cardSlug}`,
            'Error fetching the specified card.'
        );
    }

    /****************************
     * Decks API
     ****************************/

    /**
     * Finds a deck by its deck code.
     *
     * @param deckCode A code that identifies a deck. You can copy one from the game or various Hearthstone websites.
     */
    async getDeck(deckCode: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/deck/${deckCode}`,
            'Error fetching the specified deck.'
        );
    }

    /****************************
     * Metadata API
     ****************************/

    /**
     * Returns information about the categorization of cards. Metadata includes the card set,
     * set group (for example, Standard or Year of the Dragon), rarity, class, card type, minion type, and keywords.
     */
    async getMetadata(): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/metadata`,
            'Error fetching the metadata.'
        );
    }

    /**
     * Returns information about just one type of metadata.
     *
     * @param type The type of the metadata to retrieve. Valid values include sets, setGroups, types,
     * rarities, classes, minionTypes, and keywords.
     */
    async getSpecificMetadata(type: string): Promise<object> {
        return await this._handleApiCall(
            `${this.gameBaseUrlPath}/metadata/${type}`,
            'Error fetching the specified metadata.'
        );
    }

    /********************************
     * Private Class Helper Functions
     ********************************/

    async _handleApiCall(apiUrl: string, errorMessage: string): Promise<object> {
        try {
            const response = await this.axios.get(encodeURI(apiUrl));
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Hearthstone Game Data Error :: ${errorMessage}`);
        }
    }
}

export default HearthstoneGameData;