import { IsDate, IsNumber, IsString } from "class-validator";

export class RecipeDto {

    @IsString()
    title: string;

    @IsString()
    making_time: string;

    @IsString()
    serves: string;

    @IsString()
    ingredients: string

    @IsNumber()
    cost: number;

    @IsDate()
    created_at?: Date;

    @IsDate()
    updated_at?: Date;

    constructor(payload: any = {}) {
        this.title = payload.title;
        this.making_time = payload.making_time;
        this.serves = payload.serves;
        this.ingredients = payload.ingredients;
        this.cost = payload.cost;
        this.created_at = payload.created_at;
        this.updated_at = payload.updated_at;
    }

}