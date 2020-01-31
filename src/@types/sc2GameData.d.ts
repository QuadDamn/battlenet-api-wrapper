declare module 'types/sc2GameData' {
  type TLink = {
    href: string;
  };

  type TSelfLink = {
    self: TLink;
  };

  interface IBaseResponse {
    _links: TSelfLink;
  }

  interface ILeagueDataKey {
    league_id: number;
    season_id: number;
    queue_id: number;
    team_type: number;
  }

  interface ILeagueDataTierDivision {
    id: number;
    ladder_id: number;
    member_count: number;
  }

  interface ILeagueDataTier {
    id: number;
    division: ILeagueDataTierDivision[];
  }

  interface ILeagueData extends IBaseResponse {
    key: ILeagueDataKey;
    tier: ILeagueDataTier[];
  }
}
