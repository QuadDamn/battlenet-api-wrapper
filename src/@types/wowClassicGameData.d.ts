declare module 'types/wowClassicGameData' {
  type TLink = {
    href: string;
  };

  type TSelfLink = {
    self: TLink;
  };

  interface TKeyLink {
    key: TLink;
  }

  interface IBaseResponse {
    _links: TSelfLink;
  }

  interface IDefaultMediaStruct {
    key: TLink;
    id: number;
  }

  export interface ICreatureFamily {
    _links?: TSelfLink;
    key?: TLink;
    name: string;
    id: number;
    media?: IDefaultMediaStruct;
  }

  export interface ICreatureFamilies extends IBaseResponse {
    creature_families: ICreatureFamily[];
  }

  export interface IDefaultStruct {
    _links?: TSelfLink;
    key?: TLink;
    name: string;
    id: number;
  }

  export interface ICreatureTypes extends IBaseResponse {
    creature_types: IDefaultStruct[];
  }

  export interface ICreature extends IBaseResponse {
    id: number;
    name: string;
    type: TKeyLink;
    family: ICreatureFamily;
    creature_displays: TKeyLink[];
    is_tameable: boolean;
  }

  interface IAsset {
    key: string;
    value: string;
  }

  export interface ICreatureDisplayMedia extends IBaseResponse {
    assets: IAsset[];
  }

  export interface ICreatureFamilyMedia extends IBaseResponse {
    assets: IAsset[];
  }

  export interface IGuildCrestComponent extends IBaseResponse {
    id: number;
    media: TKeyLink;
  }

  export interface IGuildCrestComponents extends IBaseResponse {
    emblems: IGuildCrestComponent[];
  }

  export interface IGuildCrestBorderMedia extends IBaseResponse {
    assets: IAsset[];
  }

  export interface IGuildCrestEmblemMedia extends IBaseResponse {
    assets: IAsset[];
  }

  export interface IItemSubclass {
    _links?: TSelfLink;
    key?: TLink;
    name: string;
    id?: number;
    class_id?: number;
    subclass_id?: number;
    display_name?: string;
    hide_subclass_in_tooltips?: boolean;
  }

  export interface IItemClass {
    _links?: TSelfLink;
    class_id?: number;
    key?: TLink;
    name: string;
    id?: number;
    item_subclasses?: IItemSubclass[];
  }

  export interface IItemClasses extends IBaseResponse {
    item_classes: IItemClass[];
  }

  export interface IItem extends IBaseResponse {
    id: number;
    name: string;
    quality: object;
    level: number;
    required_level: number;
    media: object;
    item_class: IItemClass;
    item_subclass: IItemSubclass;
    inventory_type: object;
    purchase_price: number;
    sell_price: number;
    max_count: number;
    is_equippable: boolean;
    is_stackable: boolean;
  }

  export interface IItemMedia {
    _links?: TSelfLink;
    assets: IAsset[];
  }

  export interface IPlayableClass extends IBaseResponse {
    id: number;
    name: string;
    gender_name: object;
    power_type: IDefaultStruct;
    media: IDefaultMediaStruct;
    pvp_talent_slots: TLink;
  }

  export interface IPlayableClasses extends IBaseResponse {
    classes: IDefaultStruct[];
  }

  export interface IPlayableClassMedia extends IBaseResponse {}

  export interface IPlayableRace extends IBaseResponse {
    id: number;
    name: string;
    gender_name: object;
    faction: object;
    is_selectable: boolean;
    is_allied_race: boolean;
  }

  export interface IPlayableRaces extends IBaseResponse {
    races: IDefaultStruct[];
  }

  export interface IPowerType extends IBaseResponse {
    id: number;
    name: string;
  }

  export interface IPowerTypes extends IBaseResponse {
    power_types: IDefaultStruct[];
  }
}
