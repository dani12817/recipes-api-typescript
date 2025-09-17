import "reflect-metadata";
import express from "express";

import { RecipeDatabase } from "./config/database";
import recipeRutes from "./routes/recipe.routes";

const app = express()
app.use(express.json());

RecipeDatabase.initialize()
    .then(() => {
        console.log("Database connected");
    }).catch((error) => {
        console.log("Error during Data Source initialization", error);
    });

app.use("/", recipeRutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});