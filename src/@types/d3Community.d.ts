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
}