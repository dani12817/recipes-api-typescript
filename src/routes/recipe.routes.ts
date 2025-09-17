import { Router } from "express";
import { RecipeControllers } from "../controllers/recipe.controller";

const recipeRutes = Router();

recipeRutes.get("/recipes", RecipeControllers.list);
recipeRutes.post("/recipes", RecipeControllers.create);
recipeRutes.get("/recipes/:id", RecipeControllers.get);
recipeRutes.put("/recipes/:id", RecipeControllers.update);
recipeRutes.patch("/recipes/:id", RecipeControllers.update);
recipeRutes.delete("/recipes/:id", RecipeControllers.delete);

export default recipeRutes;