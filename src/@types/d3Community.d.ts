import {IClassSkill} from "types/d3Community";

declare module "types/d3Community" {

    interface IQuests {
        id: number,
        name: string,
        slug: string
    }

    export interface IAct {
        slug: string,
        number: number,
        name: string,
        quests: IQuests[]
    }

    export interface IActIndex {
        acts: IAct[]
    }

    interface IArtisanTrainingTierTrainedRecipeReagentItem {
        id: string,
        slug: string,
        name: string,
        icon: string,
        path: string
    }

    interface IArtisanTrainingTierTrainedRecipeReagent {
        quantity: number
        item: IArtisanTrainingTierTrainedRecipeReagentItem
    }

    interface IArtisanTrainingTierTrainedRecipeItemProduced {
        id: string,
        slug: string,
        name: string,
        icon: string,
        path: string
    }

    interface IArtisanTrainingTierTrainedRecipe {
        id: number,
        slug: string,
        name: string
        const: number,
        reagents: IArtisanTrainingTierTrainedRecipeReagent[],
        itemProduced: IArtisanTrainingTierTrainedRecipeItemProduced
    }

    interface IArtisanTrainingTier {
        tier: number,
        trainedRecipes: IArtisanTrainingTierTrainedRecipe[]
    }

    interface IArtisanTraining {
        tiers: IArtisanTrainingTier[],
    }

    export interface IArtisan {
        slug: string,
        name: string,
        portrait: string,
        training: IArtisanTraining
    }

    export interface IRecipe {
        id: string,
        slug: string,
        name: string,
        cost: number,
        reagents: IArtisanTrainingTierTrainedRecipeReagent[],
        itemProduced: IArtisanTrainingTierTrainedRecipeItemProduced
    }

    interface IFollowerSkills {
        slug: string,
        name: string,
        icon: string,
        level: number,
        tooltipUrl: string,
        description: string,
        descriptionHtml: string
    }

    export interface IFollower {
        slug: string,
        name: string,
        realName: string
        portrait: string,
        skills: IFollowerSkills[]
    }

    interface IClassSkillCategory {
        slug: string,
        name: string
    }

    interface IClassSkills {
        active: IClassSkill[],
        passive: IClassSkill[]
    }

    interface IClassSkillAndRune {
        skill: IClassSkill,
        run: IClassSkillRune
    }

    interface IClassSkill {
        slug: string,
        name: string,
        icon: string,
        level: number,
        tooltipUrl: string,
        description: string,
        descriptionHtml: string
    }

    export interface ICharacterClass {
        slug: string,
        name: string,
        maleName: string,
        femaleName: string,
        icon: string,
        skillCategories: IClassSkillCategory[],
        skills: IClassSkills
    }

    interface IClassSkillRune {
        slug: string,
        type: string,
        name: string,
        level: number,
        description: string,
        descriptionHtml: string
    }

    export interface IApiSkill {
        skill: IClassSkill,
        runes: IClassSkillRune[]
    }

    export interface IItemType {
        id: string,
        slug?: string,
        name: string,
        path: string,
        icon?: string
    }

    export interface IItem {
        id: string,
        slug: string,
        name: string,
        icon: string,
        tooltipParams: string,
        requiredLevel: number,
        stackSizeMax: number,
        accountBound: boolean,
        flavorText: string,
        flavorTextHtml: string,
        typeName: string,
        type: object,
        damage: string,
        dps: string,
        damageHtml: string,
        color: string,
        isSeasonRequiredToDrop: boolean
        seasonRequiredToDrop: number,
        slots: string[],
        attributes: object,
        randomAffixes: object[],
        setItems: string[]
    }

    interface IHeroes {
        id: number,
        name: string,
        class: string,
        classSlug: string,
        gender: number,
        level: number,
        kills: object,
        paragonLevel: number,
        hardcore: boolean,
        seasonal: boolean
        dead: boolean,
        "last-updated": number
    }

    export interface IApiAccount {
        battleTag: string,
        paragonLevel: number,
        paragonLevelHardcore: number,
        paragonLevelSeason: number,
        paragonLevelSeasonHardcore: number,
        guildName: string,
        heroes: IHeroes[],
        lastHeroPlayed: number,
        lastUpdated: number,
        kills: object,
        highestHardcoreLevel: number,
        timePlayed: object,
        progression: object,
        seasonalProfiles: object,
    }

    interface IApiHeroSkills {
        active: IClassSkillAndRune[],
        passive: IClassSkillAndRune[]
    }

    export interface IApiHero {
        id: number,
        name: string,
        class: string,
        gender: number,
        level: number,
        paragonLevel: number,
        kills: object,
        hardcore: boolean,
        seasonal: boolean,
        seasonCreated: number,
        skills: IApiHeroSkills
        items: object,
        followers: object,
        legendaryPowers: object[],
        progression: object,
        alive: boolean,
        lastUpdated: number,
        highestSoloRiftCompleted: number,
        stats: object
    }
}