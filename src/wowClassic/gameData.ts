// WoW Classic Game Data API documentation: https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis

import { AxiosInstance } from 'axios';
import {
  ICreatureFamily,
  ICreatureFamilies,
  IDefaultStruct,
  ICreatureTypes,
  ICreature,
  ICreatureDisplayMedia,
  ICreatureFamilyMedia,
  IGuildCrestComponents,
  IGuildCrestBorderMedia,
  IGuildCrestEmblemMedia,
  IItemSubclass,
  IItemMedia,
  IItemClass,
  IItemClasses,
  IPlayableClass,
  IPlayableClasses,
  IPlayableClassMedia,
  IPlayableRace,
  IPlayableRaces,
  IPowerType,
  IPowerTypes,
} from 'types/wowClassicGameData';

class WowClassicGameData {
  private readonly axios: AxiosInstance;
  private readonly defaultAxiosParams: object;
  private readonly namespace: string;
  private readonly gameBaseUrlPath: string = '/data/wow';

  constructor(
    axiosInstance: AxiosInstance,
    defaultAxiosParams: object,
    origin: string
  ) {
    this.axios = axiosInstance;
    this.defaultAxiosParams = defaultAxiosParams;
    this.namespace = `static-classic-${origin}`;
  }

  /**
   * Returns an index of creature families.
   */
  async getCreatureFamiliesIndex(): Promise<ICreatureFamilies> {
    try {
      const response = await this.axios.get<ICreatureFamilies>(
        encodeURI(`${this.gameBaseUrlPath}/creature-family/index`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching creature families index.`
      );
    }
  }

  /**
   * Returns a creature family by ID.
   *
   * @param creatureFamilyId The ID of the creature family.
   */
  async getCreatureFamily(creatureFamilyId: number): Promise<ICreatureFamily> {
    try {
      const response = await this.axios.get<ICreatureFamily>(
        encodeURI(
          `${this.gameBaseUrlPath}/creature-family/${creatureFamilyId}`
        ),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified creature family.`
      );
    }
  }

  /**
   * Returns an index of creature types.
   */
  async getCreatureTypesIndex(): Promise<ICreatureTypes> {
    try {
      const response = await this.axios.get<ICreatureTypes>(
        encodeURI(`${this.gameBaseUrlPath}/creature-type/index`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching creature types index.`
      );
    }
  }

  /**
   * Returns a creature type by ID.
   *
   * @param creatureTypeId The ID of the creature type.
   */
  async getCreatureType(creatureTypeId: number): Promise<IDefaultStruct> {
    try {
      const response = await this.axios.get<IDefaultStruct>(
        encodeURI(`${this.gameBaseUrlPath}/creature-type/${creatureTypeId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified creature type.`
      );
    }
  }

  /**
   * Returns a creature by ID.
   *
   * @param creatureId The ID of the creature.
   */
  async getCreature(creatureId: number): Promise<ICreature> {
    try {
      const response = await this.axios.get<ICreature>(
        encodeURI(`${this.gameBaseUrlPath}/creature/${creatureId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified creature.`
      );
    }
  }

  /**
   * Returns media for a creature display by ID.
   *
   * @param creatureDisplayId The ID of the creature display.
   */
  async getCreatureDisplayMedia(
    creatureDisplayId: number
  ): Promise<ICreatureDisplayMedia> {
    try {
      const response = await this.axios.get<ICreatureDisplayMedia>(
        encodeURI(
          `${this.gameBaseUrlPath}/media/creature-display/${creatureDisplayId}`
        ),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified creature display media.`
      );
    }
  }

  /**
   * Returns media for a creature family by ID.
   *
   * @param creatureFamilyId The ID of the creature family.
   */
  async getCreatureFamilyMedia(
    creatureFamilyId: number
  ): Promise<ICreatureFamilyMedia> {
    try {
      const response = await this.axios.get<ICreatureFamilyMedia>(
        encodeURI(
          `${this.gameBaseUrlPath}/media/creature-family/${creatureFamilyId}`
        ),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified creature family media.`
      );
    }
  }

  /****************************
   * Guild Crest API
   ****************************/

  /**
   * Returns an index of guild crest media.
   */
  async getGuildCrestComponentsIndex(): Promise<IGuildCrestComponents> {
    try {
      const response = await this.axios.get<IGuildCrestComponents>(
        encodeURI(`${this.gameBaseUrlPath}/guild-crest/index`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching guild crest components index.`
      );
    }
  }

  /**
   * Returns media for a guild crest border by ID.
   *
   * @param borderId The ID of the guild crest border.
   */
  async getGuildCrestBorderMedia(
    borderId: number
  ): Promise<IGuildCrestBorderMedia> {
    try {
      const response = await this.axios.get<IGuildCrestBorderMedia>(
        encodeURI(`${this.gameBaseUrlPath}/guild-crest/border/${borderId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching guild crest border media.`
      );
    }
  }

  /**
   * Returns media for a guild crest emblem by ID.
   *
   * @param emblemId The ID of the guild crest emblem.
   */
  async getGuildCrestEmblemMedia(
    emblemId: number
  ): Promise<IGuildCrestEmblemMedia> {
    try {
      const response = await this.axios.get<IGuildCrestBorderMedia>(
        encodeURI(`${this.gameBaseUrlPath}/guild-crest/emblem/${emblemId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching guild crest emblem media.`
      );
    }
  }

  /****************************
   * Item API
   ****************************/

  /**
   * Returns an index of item classes.
   */
  async getItemClassesIndex(): Promise<IItemClasses> {
    try {
      const response = await this.axios.get<IItemClasses>(
        encodeURI(`${this.gameBaseUrlPath}/item-class/index`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching item class index.`
      );
    }
  }

  /**
   * Returns an item class by ID.
   *
   * @param itemClassId The ID of the item class.
   */
  async getItemClass(itemClassId: string): Promise<IItemClass> {
    try {
      const response = await this.axios.get<IItemClass>(
        encodeURI(`${this.gameBaseUrlPath}/item-class/${itemClassId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified item class.`
      );
    }
  }

  /**
   * Returns an item subclass by ID.
   *
   * @param itemClassId The ID of the item class.
   * @param itemSubclassId The ID of the item subclass.
   */
  async getItemSubclass(
    itemClassId: string,
    itemSubclassId: string
  ): Promise<IItemSubclass> {
    try {
      const response = await this.axios.get<IItemSubclass>(
        encodeURI(
          `${this.gameBaseUrlPath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`
        ),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified item class subclass.`
      );
    }
  }

  /**
   * Returns an item by ID.
   *
   * @param itemId The ID of the item.
   */
  async getItem(itemId: string): Promise<IItemSubclass> {
    try {
      const response = await this.axios.get<IItemSubclass>(
        encodeURI(`${this.gameBaseUrlPath}/item/${itemId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified item.`
      );
    }
  }

  /**
   * Returns media for an item by ID.
   *
   * @param itemId The ID of the item.
   */
  async getItemMedia(itemId: string): Promise<IItemMedia> {
    try {
      const response = await this.axios.get<IItemMedia>(
        encodeURI(`${this.gameBaseUrlPath}/media/item/${itemId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified item media.`
      );
    }
  }

  /****************************
   * Playable Class API
   ****************************/

  /**
   * Returns an index of playable classes.
   */
  async getPlayableClassIndex(): Promise<IPlayableClasses> {
    try {
      const response = await this.axios.get<IPlayableClasses>(
        encodeURI(`${this.gameBaseUrlPath}/playable-class/index`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching playable class index.`
      );
    }
  }

  /**
   * Returns a playable class by ID.
   *
   * @param playableClassId The ID of the playable class.
   */
  async getPlayableClass(playableClassId: number): Promise<IPlayableClass> {
    try {
      const response = await this.axios.get<IPlayableClass>(
        encodeURI(`${this.gameBaseUrlPath}/playable-class/${playableClassId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified playable class.`
      );
    }
  }

  /**
   * Returns media for a playable class by ID.
   *
   * @param playableClassId The ID of the playable class.
   */
  async getPlayableClassMedia(
    playableClassId: number
  ): Promise<IPlayableClassMedia> {
    try {
      const response = await this.axios.get<IPlayableClass>(
        encodeURI(
          `${this.gameBaseUrlPath}/media/playable-class/${playableClassId}`
        ),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified playable class media.`
      );
    }
  }

  /****************************
   * Playable Race API
   ****************************/

  /**
   * Returns an index of playable races.
   */
  async getPlayableRaceIndex(): Promise<IPlayableRaces> {
    try {
      const response = await this.axios.get<IPlayableRaces>(
        encodeURI(`${this.gameBaseUrlPath}/playable-race/index`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching playable race index.`
      );
    }
  }

  /**
   * Returns a playable race by ID.
   *
   * @param playableRaceId The ID of the playable race.
   */
  async getPlayableRace(playableRaceId: number): Promise<IPlayableRace> {
    try {
      const response = await this.axios.get<IPlayableRace>(
        encodeURI(`${this.gameBaseUrlPath}/playable-race/${playableRaceId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified playable race.`
      );
    }
  }

  /****************************
   * Power Type API
   ****************************/

  /**
   * Returns an index of power types.
   */
  async getPowerTypesIndex(): Promise<IPowerTypes> {
    try {
      const response = await this.axios.get<IPowerTypes>(
        encodeURI(`${this.gameBaseUrlPath}/power-type/index`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching power type index.`
      );
    }
  }

  /**
   * Returns a power type by ID.
   *
   * @param powerTypeId
   */
  async getPowerType(powerTypeId: number): Promise<IPowerType> {
    try {
      const response = await this.axios.get<IPowerType>(
        encodeURI(`${this.gameBaseUrlPath}/power-type/${powerTypeId}`),
        {
          params: {
            namespace: this.namespace,
            ...this.defaultAxiosParams,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `WoW Classic Game Data Error :: Error fetching specified power type.`
      );
    }
  }
}

export default WowClassicGameData;
