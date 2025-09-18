"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeControllers = void 0;
const recipie_service_1 = require("../services/recipie.service");
const recipe_dto_1 = require("../dto/recipe.dto");
const recipeService = new recipie_service_1.RecipeService();
class RecipeControllers {
    static async list(req, res) {
        try {
            console.log("list");
            const recipes = await recipeService.getAll();
            res.status(200).json({ recipes });
        }
        catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }
    static async create(req, res) {
        try {
            let recipeDto = new recipe_dto_1.RecipeDto(req.body);
            console.log("create", recipeDto);
            if (!RecipeControllers.missingRequiredFields(recipeDto, res)) {
                const recipe = await recipeService.create(recipeDto);
                res.status(200).json(RecipeControllers.buildResponseJson(recipe, "Recipe successfully created!"));
            }
        }
        catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }
    static async get(req, res) {
        try {
            const id = parseInt(req.params.id);
            const recipe = await recipeService.getById(id);
            console.log("get", id);
            if (!recipe) {
                res.status(404).json({ message: "No recipe found" });
            }
            else {
                res.status(200).json(RecipeControllers.buildResponseJson(recipe, "Recipe details by id"));
            }
        }
        catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }
    static async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const recipe = await recipeService.getById(id);
            console.log("get", id);
            if (!recipe) {
                res.status(404).json({ message: "No recipe found" });
            }
            else {
                let recipeDto = new recipe_dto_1.RecipeDto(req.body);
                if (!RecipeControllers.missingRequiredFields(recipeDto, res)) {
                    Object.assign(recipe, recipeDto);
                    const updateResult = await recipeService.update(recipe);
                    res.status(200).json(RecipeControllers.buildResponseJson(recipe, "Recipe successfully updated!"));
                }
            }
        }
        catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }
    static async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const deleteResult = await recipeService.delete(id);
            console.log("get", id);
            if (!deleteResult.affected) {
                res.status(404).json({ message: "No recipe found" });
            }
            else {
                res.status(200).json({ message: "Recipe successfully removed!" });
            }
        }
        catch (error) {
            console.log("error", error);
            res.status(404).json(error);
        }
    }
    static buildResponseJson(recipe, message) {
        return {
            message: message,
            recipe: [recipe]
        };
    }
    static missingRequiredFields(recipe, res) {
        let missingFields = [];
        if (!recipe.title)
            missingFields.push("title");
        if (!recipe.making_time)
            missingFields.push("making_time");
        if (!recipe.serves)
            missingFields.push("serves");
        if (!recipe.ingredients)
            missingFields.push("ingredients");
        if (!recipe.cost)
            missingFields.push("cost");
        if (missingFields.length) {
            res.status(200).json({
                message: "Recipe creation failed!",
                required: missingFields.join(", ")
            });
            return true;
        }
        return false;
    }
}
exports.RecipeControllers = RecipeControllers;
/*export const getAllRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await recipeService.getAll();
        res.status(200).json({ recipes });
    } catch (error) {
        res.status(400).json({ message: "Internal Server Error" });
    }
};*/
