declare module 'types/wowProfileData' {
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

  interface ICharacter {
      key: TLink,
      name: string,
      id: number,
      realm: object
  }

  interface IPlayableRace {
      key: TLink,
      name: string,
      id: number
  }

  interface IPlayableClass {
      key: TLink,
      name: string,
      id: number
  }

  interface IActiveSpec {
      key: TLink,
      name: string,
      id: number
  }

  interface IGender {
      type: string,
      name: string
  }

  interface IFaction {
      type: string,
      name: string
  }

  type TGuildCrestEmblem = {
      id: number,
      media: TKeyLink,
      color: object
  };

  type TGuildCrestBorder = {
      id: number,
      media: TKeyLink,
      color: object
  };

  interface IGuildCrest {
      emblem: TGuildCrestEmblem,
      border: TGuildCrestBorder,
      background: object
  }

  interface ICharacterAppearance {
      face_variation: number,
      skin_color: number,
      hair_variation: number,
      hair_color: number,
      feature_variation: number,
      custom_display_options: number[]
  }

  interface ICharacterItem {
      id: number,
      slot: object,
      enchant: number,
      item_appearance_modifier_id: number,
      internal_slot_id: number,
      subclass: number
  }

  interface ICharacterItems {
      items: ICharacterItem[]
  }

  export interface ICharacterAppearanceSummary extends IBaseResponse {
      character: ICharacter,
      playable_race: IPlayableRace,
      playable_class: IPlayableClass,
      active_spec: IActiveSpec,
      gender: IGender,
      faction: IFaction,
      guild_Crest: IGuildCrest,
      appearance: ICharacterAppearance,
      items: ICharacterItems
  }

  export interface ICharacterCollections extends IBaseResponse {
      pets: TLink,
      mounts: TLink
  }

  interface ICharacterMount {
      key: TLink,
      name: string,
      id: number
  }

  interface ICharacterMountContainer {
      mount: ICharacterMount
  }

  export interface ICharacterMountCollection extends IBaseResponse {
      mounts: ICharacterMountContainer[]
  }
}
