// Hearthstone Game Data API documentation: https://develop.battle.net/documentation/hearthstone/game-data-apis

import { AxiosInstance } from 'axios';
import {
  ICardSearch,
  ICard,
  ICards,
  ICardBackSearch,
  ICardBack,
  ICardBacks,
  IDeck,
  IMetadata,
  IMetadataSet,
  IMetadataSetGroup,
  IMetadataKeyword,
  IMetadataRarity,
  IMetadataClass,
  IMetadataMinionType,
  IMetadataGameMode,
  IMetadataCardBackCategory,
} from 'types/hearthstoneGameData';

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
  async searchCards(searchParams: ICardSearch): Promise<ICards> {
    try {
      const response = await this.axios.get<ICards>(
        `${this.gameBaseUrlPath}/cards`,
        {
          params: {
            ...searchParams,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        'Hearthstone Game Data Error :: Error fetching cards that matched the passed parameters.'
      );
    }
  }

  /**
   * Returns the card with an ID or slug that matches the one you specify.
   *
   * @param cardSlug An ID or slug that uniquely identifies a card. You can discover these values by using the `/hearthstone/cards` search endpoint.
   */
  async getCard(cardSlug: number): Promise<ICard> {
    try {
      const response = await this.axios.get<ICard>(
        encodeURI(`${this.gameBaseUrlPath}/cards/${cardSlug}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Hearthstone Game Data Error :: Error fetching the specified card.`
      );
    }
  }

  /****************************
   * Card Back API
   ****************************/

  /**
   * Returns an up-to-date list of all card backs matching the search criteria.
   *
   * @param searchParams
   */
  async searchCardBacks(searchParams: ICardBackSearch): Promise<ICardBacks> {
    try {
      const response = await this.axios.get<ICardBacks>(
        encodeURI(`${this.gameBaseUrlPath}/cardbacks`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Hearthstone Game Data Error :: Error fetching the searched for card backs.`
      );
    }
  }

  /**
   * Returns a specific card back by using card back ID or slug.
   *
   * @param idorslug An ID or slug that uniquely identifies a card back. You can discover these values by using the cardbacks endpoint.
   */
  async getCardBack(idorslug: string): Promise<ICardBack> {
    try {
      const response = await this.axios.get<ICardBack>(
        encodeURI(`${this.gameBaseUrlPath}/cardbacks/${idorslug}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Hearthstone Game Data Error :: Error fetching the specified card back.`
      );
    }
  }

  /****************************
   * Decks API
   ****************************/

  /**
   * Finds a deck by its deck code.
   *
   * @param deckCode A code that identifies a deck. You can copy one from the game or various Hearthstone websites.
   */
  async getDeck(deckCode: string): Promise<IDeck> {
    try {
      const response = await this.axios.get<IDeck>(
        encodeURI(`${this.gameBaseUrlPath}/deck/${deckCode}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Hearthstone Game Data Error :: Error fetching the specified deck.`
      );
    }
  }

  /****************************
   * Metadata API
   ****************************/

  /**
   * Returns information about the categorization of cards. Metadata includes the card set,
   * set group (for example, Standard or Year of the Dragon), rarity, class, card type, minion type, and keywords.
   */
  async getMetadata(): Promise<IMetadata> {
    try {
      const response = await this.axios.get<IMetadata>(
        encodeURI(`${this.gameBaseUrlPath}/metadata`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Hearthstone Game Data Error :: Error fetching the metadata.`
      );
    }
  }

  /**
   * Returns information about just one type of metadata.
   *
   * @param type The type of the metadata to retrieve. Valid values include sets, setGroups, types,
   * rarities, classes, minionTypes, and keywords.
   */
  async getSpecificMetadata(
    type: string
  ): Promise<
    | IMetadataSet[]
    | IMetadataSetGroup[]
    | IMetadataKeyword[]
    | IMetadataRarity[]
    | IMetadataClass[]
    | IMetadataMinionType[]
    | IMetadataGameMode[]
    | IMetadataKeyword[]
    | IMetadataCardBackCategory[]
  > {
    try {
      const response = await this.axios.get<
        | IMetadataSet[]
        | IMetadataSetGroup[]
        | IMetadataKeyword[]
        | IMetadataRarity[]
        | IMetadataClass[]
        | IMetadataMinionType[]
        | IMetadataGameMode[]
        | IMetadataKeyword[]
        | IMetadataCardBackCategory[]
      >(encodeURI(`${this.gameBaseUrlPath}/metadata/${type}`));
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Hearthstone Game Data Error :: Error fetching the specified metadata.`
      );
    }
  }
}

export default HearthstoneGameData;
