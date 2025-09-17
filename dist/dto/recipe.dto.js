"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeDto = void 0;
const class_validator_1 = require("class-validator");
class RecipeDto {
    title;
    making_time;
    serves;
    ingredients;
    cost;
    created_at;
    updated_at;
    constructor(payload) {
        this.title = payload.title;
        this.making_time = payload.making_time;
        this.serves = payload.serves;
        this.ingredients = payload.ingredients;
        this.cost = payload.cost;
        this.created_at = payload.created_at;
        this.updated_at = payload.updated_at;
    }
}
exports.RecipeDto = RecipeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecipeDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecipeDto.prototype, "making_time", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecipeDto.prototype, "serves", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecipeDto.prototype, "ingredients", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RecipeDto.prototype, "cost", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], RecipeDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], RecipeDto.prototype, "updated_at", void 0);
