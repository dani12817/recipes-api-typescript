import { Request, Response } from "express";
import { RecipeService } from "../services/recipie.service";
import { RecipeDto } from "../dto/recipe.dto";
import { Recipe } from "../entities/recipe";

const recipeService = new RecipeService();

export class RecipeControllers {
    static async list(req: Request, res: Response) {
        try {
            console.log("list");
            const recipes = await recipeService.getAll();
            res.status(200).json({ recipes });
        } catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }

    static async create(req: Request, res: Response) {
        try {
            let recipeDto: RecipeDto = new RecipeDto(req.body);
            console.log("create", recipeDto);

            if (!RecipeControllers.missingRequiredFields(recipeDto, res)) {
                const recipe = await recipeService.create(recipeDto);
                res.status(200).json(RecipeControllers.buildResponseJson(recipe, "Recipe successfully created!"));
            }
        } catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }

    static async get(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const recipe = await recipeService.getById(id);
            
            console.log("get", id);

            if (!recipe) {
                res.status(404).json({ message: "No recipe found" });
            } else {
                res.status(200).json(RecipeControllers.buildResponseJson(recipe, "Recipe details by id"));
            }
        } catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const recipe = await recipeService.getById(id);

            console.log("get", id);

            if (!recipe) {
                res.status(404).json({ message: "No recipe found" });
            } else {
                let recipeDto: RecipeDto = new RecipeDto(req.body);

                if (!RecipeControllers.missingRequiredFields(recipeDto, res)) {
                    Object.assign(recipe, recipeDto);
    
                    const updateResult = await recipeService.update(recipe);
                    res.status(200).json(RecipeControllers.buildResponseJson(recipe, "Recipe successfully updated!"));
                }
            }
        } catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const deleteResult = await recipeService.delete(id);
            
            console.log("get", id);

            if (!deleteResult.affected) {
                res.status(404).json({ message: "No recipe found" });
            } else {
                res.status(200).json({ message: "Recipe successfully removed!" });
            }
        } catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }

    private static buildResponseJson(recipe: Recipe, message: string) {
        return {
            message: message,
            recipe: [recipe]
        };
    }

    private static missingRequiredFields(recipe: RecipeDto, res: Response) {
        let missingFields: String[] = [];

        if (!recipe.title) missingFields.push("title");
        if (!recipe.making_time) missingFields.push("making_time");
        if (!recipe.serves) missingFields.push("serves");
        if (!recipe.ingredients) missingFields.push("ingredients");
        if (!recipe.cost) missingFields.push("cost");

        if (missingFields.length) {
            res.status(404).json({
                message: "Recipe creation failed!",
                required: missingFields.join(", ")
            });

            return true;
        }

        return false;
    }
}

/*export const getAllRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await recipeService.getAll();
        res.status(200).json({ recipes });
    } catch (error) {
        res.status(400).json({ message: "Internal Server Error" });
    }
};*/
