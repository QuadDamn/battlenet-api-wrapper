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

  interface ICharacter {}

  interface IPlayableRace {}

  interface IPlayableClass {}

  interface IActiveSpec {}

  interface IGender {}

  interface IFaction {}

  type TGuildCrestEmblem = {};

  type TGuildCrestBorder = {};

  type TMedia = {
    id: number;
    media: TKeyLink;
  };

  type TGuildCrestBackground = {};

  interface IGuildCrest {}

  interface ICharacterAppearance {}

  interface ICharacterItems {}

  interface ICharacterAppearanceSummary {}
}
