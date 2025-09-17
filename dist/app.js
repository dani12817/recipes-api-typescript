"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const recipe_routes_1 = __importDefault(require("./routes/recipe.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
database_1.RecipeDatabase.initialize()
    .then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log("Error during Data Source initialization", error);
});
app.use("/", recipe_routes_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
