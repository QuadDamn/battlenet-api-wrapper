// Diablo 3 Community API documentation: https://develop.battle.net/documentation/diablo-3/community-apis

import { AxiosInstance } from 'axios';
import { formatBattleTag } from '../utils';
import {
  IActIndex,
  IAct,
  IArtisan,
  IRecipe,
  IFollower,
  ICharacterClass,
  IApiSkill,
  IItemType,
  IItem,
  IApiAccount,
  IApiHero,
} from 'types/d3Community';

class Diablo3Community {
  private readonly axios: AxiosInstance;
  private readonly gameBaseUrlPath: string = '/d3/data';

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  /****************************
   * Act API
   ****************************/

  /**
   * Returns an index of acts.
   */
  async getActIndex(): Promise<IActIndex> {
    try {
      const response = await this.axios.get<IActIndex>(
        encodeURI(`${this.gameBaseUrlPath}/act`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching the act index.`
      );
    }
  }

  /**
   * Returns a single act by ID.
   *
   * @param actId The ID of the act to retrieve.
   */
  async getAct(actId: number): Promise<IAct> {
    try {
      const response = await this.axios.get<IAct>(
        encodeURI(`${this.gameBaseUrlPath}/act/${actId}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching the specified act.`
      );
    }
  }

  /****************************
   * Artisan and Recipe API
   ****************************/

  /**
   * Returns a single artisan by slug.
   *
   * @param artisanSlug The slug of the artisan to retrieve.
   */
  async getArtisan(artisanSlug: string): Promise<IArtisan> {
    try {
      const response = await this.axios.get<IArtisan>(
        encodeURI(`${this.gameBaseUrlPath}/artisan/${artisanSlug}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching the specified artisan.`
      );
    }
  }

  /**
   * Returns a single recipe by slug for the specified artisan.
   *
   * @param artisanSlug The slug of the artisan to retrieve.
   * @param recipeSlug The slug of the recipe to retrieve.
   */
  async getRecipe(artisanSlug: string, recipeSlug: string): Promise<IRecipe> {
    try {
      const response = await this.axios.get<IRecipe>(
        encodeURI(
          `${this.gameBaseUrlPath}/artisan/${artisanSlug}/recipe/${recipeSlug}`
        )
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching specified recipe.`
      );
    }
  }

  /****************************
   * Follower API
   ****************************/

  /**
   * Returns a single follower by slug.
   *
   * @param followerSlug The slug of the follower to retrieve.
   */
  async getFollower(followerSlug: string): Promise<IFollower> {
    try {
      const response = await this.axios.get<IFollower>(
        encodeURI(`${this.gameBaseUrlPath}/follower/${followerSlug}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching the specified follower.`
      );
    }
  }

  /****************************
   * Character Class & Skill API
   ****************************/

  /**
   * Returns a single character class by slug.
   *
   * @param classSlug The slug of the character class to retrieve.
   */
  async getCharacterClass(classSlug: string): Promise<ICharacterClass> {
    try {
      const response = await this.axios.get<ICharacterClass>(
        encodeURI(`${this.gameBaseUrlPath}/hero/${classSlug}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching specified hero class.`
      );
    }
  }

  /**
   * Returns a single skill by slug for a specific character class.
   *
   * @param classSlug The slug of the character class to retrieve.
   * @param skillSlug The slug of the skill to retrieve.
   */
  async getApiSkill(classSlug: string, skillSlug: string): Promise<IApiSkill> {
    try {
      const response = await this.axios.get<IApiSkill>(
        encodeURI(
          `${this.gameBaseUrlPath}/hero/${classSlug}/skill/${skillSlug}`
        )
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching specified hero class skill.`
      );
    }
  }

  /****************************
   * Item Type API
   ****************************/

  /**
   * Returns an index of item types.
   */
  async getItemTypeIndex(): Promise<IItemType[]> {
    try {
      const response = await this.axios.get<IItemType[]>(
        encodeURI(`${this.gameBaseUrlPath}/item-type`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching the item type index.`
      );
    }
  }

  /**
   * Returns a single item type by slug.
   *
   * @param itemTypeSlug The slug of the item type to retrieve.
   */
  async getItemType(itemTypeSlug: string): Promise<IItemType[]> {
    try {
      const response = await this.axios.get<IItemType[]>(
        encodeURI(`${this.gameBaseUrlPath}/item-type/${itemTypeSlug}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching the specified item type.`
      );
    }
  }

  /****************************
   * Item API
   ****************************/

  /**
   * Returns a single item by item slug and ID.
   *
   * @param itemSlugAndId The slug and ID of the item to retrieve.
   */
  async getItem(itemSlugAndId): Promise<IItem> {
    try {
      const response = await this.axios.get<IItem>(
        encodeURI(`${this.gameBaseUrlPath}/item/${itemSlugAndId}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching the specified item.`
      );
    }
  }

  /****************************
   * Profile API
   ****************************/

  /**
   * Returns the specified account profile.
   *
   * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
   * match perfectly with what Blizzard has on record.
   *
   * @param account The BattleTag for the account to retrieve.
   */
  async getApiAccount(account: string): Promise<IApiAccount> {
    const formattedBattleTag = await formatBattleTag(account);

    try {
      const response = await this.axios.get<IApiAccount>(
        encodeURI(`/d3/profile/${formattedBattleTag}/`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching profile information.`
      );
    }
  }

  /**
   * Returns a single hero.
   *
   * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
   * match perfectly with what Blizzard has on record.
   *
   * @param account The BattleTag for the account to retrieve.
   * @param heroId The ID of the hero to retrieve.
   */
  async getApiHero(account: string, heroId: string): Promise<IApiHero> {
    const formattedBattleTag = await formatBattleTag(account);

    try {
      const response = await this.axios.get<IApiHero>(
        encodeURI(`/d3/profile/${formattedBattleTag}/hero/${heroId}`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching specified hero.`
      );
    }
  }

  /**
   * Returns a list of items for the specified hero.
   *
   * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
   * match perfectly with what Blizzard has on record.
   *
   * @param account The BattleTag for the account to retrieve.
   * @param heroId The ID of the hero to retrieve.
   */
  async getApiDetailedHeroItems(
    account: string,
    heroId: string
  ): Promise<object> {
    const formattedBattleTag = await formatBattleTag(account);

    try {
      const response = await this.axios.get<object>(
        encodeURI(`/d3/profile/${formattedBattleTag}/hero/${heroId}/items`)
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching specified hero items.`
      );
    }
  }

  /**
   * Returns a list of items for the specified hero's followers.
   *
   * IMPORTANT NOTE: Battletag is case-sensitive and will result in a 404 error response if it doesn't
   * match perfectly with what Blizzard has on record.
   *
   * @param account The BattleTag for the account to retrieve.
   * @param heroId The ID of the hero to retrieve.
   */
  async getApiDetailedFollowerItems(
    account: string,
    heroId: string
  ): Promise<object> {
    const formattedBattleTag = await formatBattleTag(account);

    try {
      const response = await this.axios.get<object>(
        encodeURI(
          `/d3/profile/${formattedBattleTag}/hero/${heroId}/follower-items`
        )
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        `Diablo 3 Community Error :: Error fetching specified hero follower items.`
      );
    }
  }
}

export default Diablo3Community;
