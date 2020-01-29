declare module "types/d3GameData" {

    type TLink = {
        href: string;
    }

    type TSelfLink = {
        self: TLink;
    }

    type TSeasonState = "active" | "inactive";
    type THeroClass = "barbarian" | "crusader" | "dh" | "monk" | "wd" | "wizard" | "necromancer";

    type TDataObject = {
        id: string;
        string?: string;
        number?: number;
        timestamp?: number;
    };

    type TLocaleObject = {
        en_US?: string;
        es_MX?: string;
        pt_BR?: string;
        de_DE?: string;
        en_GB?: string;
        es_ES?: string;
        fr_FR?: string;
        it_IT?: string;
        pl_PL?: string;
        pt_PT?: string;
        ru_RU?: string;
        ko_KR?: string;
        zh_TW?: string;
        zh_CN?: string;
    };

    enum EColumnType {
        STRING = "STRING",
        NUMBER = "NUMBER",
        SPAN_MS = "SPAN_MS",
        DATETIME = "DATETIME",
    }

    interface IBaseResponse {
        _links: TSelfLink;
        last_update_time: string;
        generated_by: string;
    }

    export interface ISeasonIndex extends IBaseResponse {
        season: TLink[];
        current_season: number;
        service_current_season: number;
        service_season_state: TSeasonState;
    }

    export interface ILeaderboard {
        team_size?: number;
        hardcore?: boolean;
        hero_class_string?: THeroClass;
        ladder: TLink;
    }

    export interface ISeason extends IBaseResponse {
        leaderboard: ILeaderboard[];
        season_id: number
    }

    export interface ILeaderboardPlayer {
        key: string;
        accountId: number;
        data: TDataObject[];
    }

    export interface ILeaderboardRow {
        order: number;
        player: ILeaderboardPlayer;
        data: TDataObject[];
    }

    export interface ILeaderboardColumn {
        id: string;
        hidden: boolean;
        order: number;
        label: TLocaleObject;
        type: EColumnType;
    }

    export interface ISeasonLeaderboard extends IBaseResponse {
        key: string;
        title: TLocaleObject;
        hardcore?: boolean;
        greater_rift?: boolean;
        greater_rift_solo_class: THeroClass;
        season: number;
        row: ILeaderboardRow[];
        column: ILeaderboardColumn[];
    }

    export interface IEraIndex extends IBaseResponse {
        era: TLink[];
        current_era: number;
    }

    export interface IEra extends IBaseResponse {
        leaderboard: ILeaderboard[];
        era_id: number
        era_start_date: number
    }

    export interface IEraLeaderboard extends IBaseResponse {
        key: string;
        title: TLocaleObject;
        hardcore?: boolean;
        greater_rift?: boolean;
        greater_rift_solo_class: THeroClass;
        era: number;
        row: ILeaderboardRow[];
        column: ILeaderboardColumn[];
    }
}