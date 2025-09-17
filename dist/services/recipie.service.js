"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const database_1 = require("../config/database");
const recipe_1 = require("../entities/recipe");
class RecipeService {
    recipeRepository = database_1.RecipeDatabase.getRepository(recipe_1.Recipe);
    async create(recipieDto) {
        const recipe = this.recipeRepository.create(recipieDto);
        return this.recipeRepository.save(recipe);
    }
    async getAll() {
        return this.recipeRepository.find();
    }
    async getById(id) {
        return await this.recipeRepository.findOneBy({ id });
    }
    async update(recipie) {
        return await this.recipeRepository.update({ id: recipie.id }, recipie);
    }
    async delete(id) {
        return await this.recipeRepository.delete({ id });
    }
}
exports.RecipeService = RecipeService;
