declare module 'types/hearthstoneGameData' {
  export interface ICardSearch {
    /**
     * (OPTIONAL) The slug of the set the card belongs to. If you do not supply a value, cards from all sets will be returned.
     */
    set?: string;

    /**
     * (OPTIONAL) The slug of the card's class.
     */
    classSlug?: string;

    /**
     * (OPTIONAL) The mana cost required to play the card. You can include multiple values in a comma-separated list of numeric values.
     */
    manaCost?: string;

    /**
     * (OPTIONAL) The attack power of the minion or weapon. You can include multiple values in a comma-separated list of numeric values.
     */
    attack?: string;

    /**
     * (OPTIONAL) The health of a minion. You can include multiple values in a comma-separated list of numeric values.
     */
    health?: string;

    /**
     * (OPTIONAL) Whether a card is collectible. A value of 1 indicates that collectible cards should be returned; 0 indicates uncollectible cards. To return all cards, use a value of '0,1'.
     */
    collectible?: string;

    /**
     * (OPTIONAL) The type of card (for example, minion, spell, and so on). This value must match the type slugs found in metadata.
     */
    rarity?: string;

    /**
     * (OPTIONAL) The type of minion card (for example, beast, murloc, dragon, and so on). This value must match the minion type slugs found in metadata.
     */
    type?: string;

    /**
     * (OPTIONAL) The type of minion card (for example, beast, murloc, dragon, and so on). This value must match the minion type slugs found in metadata.
     */
    minionType?: string;

    /**
     * (OPTIONAL) A required keyword on the card (for example, battlecry, deathrattle, and so on). This value must match the keyword slugs found in metadata.
     */
    keyword?: string;

    /**
     * (OPTIONAL) A text string used to filter cards. You must include a locale along with the textFilter parameter.
     */
    textFilter?: string;

    /**
     * (OPTIONAL) A page number.
     */
    page?: number;

    /**
     * (OPTIONAL) The number of results to choose per page. A value will be selected automatically if you do not supply a pageSize or if the pageSize is higher than the maximum allowed.
     */
    pageSize?: number;

    /**
     * (OPTIONAL) The field used to sort the results. Valid values include manaCost, attack, health, and name. Results are sorted by manaCost by default. Cards will also be sorted by class automatically in most cases.
     */
    sort?: string;

    /**
     * (OPTIONAL) The order in which to sort the results. Valid values are asc or desc. The default value is asc.
     */
    order?: string;
  }

  export interface ICard {
    id: string;
    collectible: number;
    slug: string;
    classId: number;
    multiClassIds: number[];
    minionTypeId?: number;
    cardTypeId: number;
    cardSetId: number;
    rarityId: number;
    artistName: string;
    health?: number;
    attack?: number;
    manaCost: number;
    name: string;
    text: string;
    image: string;
    imageGold: string;
    flavorText: string;
    cropImage: string;
    childIds?: number[];
    keywordIds?: number[];
    battlegrounds?: object;
  }

  export interface ICards {
    cards: ICard[];
    cardCount: number;
    pageCount: number;
    page: number;
  }

  export interface ICardBackSearch {
    /**
     * (OPTIONAL) A category of the card back. The category must match a valid category.
     */
    cardBackCategory?: string;

    /**
     * (OPTIONAL) A text string used to filter card backs. You must include a locale along with the textFilter parameter.
     */
    textFilter?: string;

    /**
     * (OPTIONAL) The field used to sort the results. Valid value include name. Results are sorted by date (desc) by default.
     */
    sort?: string;

    /**
     * (OPTIONAL) The order in which to sort the results. Valid values are asc or desc. The default value is asc.
     */
    order?: string;
  }

  export interface ICardBack {
    id: number;
    sortCategory: number;
    text: object;
    name: object;
    image: string;
    slug: string;
  }

  export interface ICardBacks {
    cardBacks: ICardBack[];
    cardCount: number;
    pageCount: number;
    page: number;
  }

  interface IDeckClass {
    id: number;
    slug: string;
    name: string;
  }

  export interface IDeck {
    version: number;
    format: string;
    hero: ICard;
    heroPower: ICard;
    class: IDeckClass;
    cards: ICard[];
    cardCount: number;
  }

  export interface IMetadataSet {
    id: number;
    slug: string;
    releaseDate: string;
    name: string;
    type: string;
    collectibleCount: number;
    collectibleRevealedCount: number;
    nonCollectibleCount: number;
    nonCollectibleRevealedCount: number;
  }

  export interface IMetadataSetGroup {
    slug: string;
    year: string;
    cardSets: string[];
    name: string;
    standard: boolean;
    icon: string;
  }

  export interface IMetadataType {
    id: number;
    slug: string;
    name: string;
  }

  export interface IMetadataRarity {
    id: number;
    slug: string;
    craftingCost: number[];
    dustValue: number[];
    name: string;
  }

  export interface IMetadataClass {
    id: string | number;
    slug: string;
    cardId: number;
    name: string;
  }

  export interface IMetadataMinionType {
    id: string;
    slug: string;
    name: string;
  }

  export interface IMetadataGameMode {
    id: number;
    slug: string;
    name: string;
  }

  export interface IMetadataKeyword {
    id: number;
    slug: string;
    name: string;
    refText: string;
    text: string;
  }

  export interface IMetadataCardBackCategory {
    slug: string;
    id: number;
    name: string;
  }

  export interface IMetadata {
    sets: IMetadataSet[];
    setGroups: IMetadataSetGroup[];
    types: IMetadataType[];
    rarities: IMetadataRarity[];
    classes: IMetadataClass[];
    minionTypes: IMetadataMinionType[];
    gameModes: IMetadataGameMode[];
    keywords: IMetadataKeyword[];
    filterableFields: string[];
    numericFields: string[];
    cardBackCategories: IMetadataCardBackCategory[];
  }
}
