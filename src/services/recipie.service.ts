import { DeleteResult, UpdateResult } from "typeorm";

import { RecipeDatabase } from "../config/database";

import { RecipeDto } from "../dto/recipe.dto";

import { Recipe } from "../entities/recipe";

export class RecipeService {
    private recipeRepository = RecipeDatabase.getRepository(Recipe);

    async create(recipieDto: RecipeDto): Promise<Recipe> {
        const recipe = this.recipeRepository.create(recipieDto);
        return this.recipeRepository.save(recipe);
    }

    async getAll(): Promise<Recipe[]> {
        return this.recipeRepository.find();
    }

    async getById(id: number): Promise<Recipe | null> {
        return await this.recipeRepository.findOneBy({ id });
    }

    async update(recipie: Recipe): Promise<UpdateResult> {
        return await this.recipeRepository.update({ id: recipie.id }, recipie);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.recipeRepository.delete({ id });
    }

}