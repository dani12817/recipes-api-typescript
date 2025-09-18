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
exports.Recipe = void 0;
const typeorm_1 = require("typeorm");
let Recipe = class Recipe {
    id;
    title;
    making_time;
    serves;
    ingredients;
    cost;
    created_at;
    updated_at;
};
exports.Recipe = Recipe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "making_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "serves", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Recipe.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Recipe.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Recipe.prototype, "updated_at", void 0);
exports.Recipe = Recipe = __decorate([
    (0, typeorm_1.Entity)()
], Recipe);
/*
CREATE TABLE IF NOT EXISTS recipes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  -- name of recipe
  title varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  -- time required to cook/bake the recipe
  making_time varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  -- number of people the recipe will feed
  serves varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  -- food items necessary to prepare the recipe
  ingredients varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  -- price of recipe
  cost integer NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
*/ 
