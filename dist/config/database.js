"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeDatabase = void 0;
const typeorm_1 = require("typeorm");
const recipe_1 = require("../entities/recipe");
exports.RecipeDatabase = new typeorm_1.DataSource({
    type: 'postgres',
    host: "ep-spring-shadow-ad3p0cm9-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    port: 5432,
    username: "neondb_owner",
    password: "npg_9iUMPtXTkz8s",
    synchronize: true,
    logging: true,
    entities: [recipe_1.Recipe],
    migrations: [],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false
    }
});
/**
PGHOST='ep-spring-shadow-ad3p0cm9-pooler.c-2.us-east-1.aws.neon.tech'
PGDATABASE='neondb'
PGUSER='neondb_owner'
PGPASSWORD='npg_9iUMPtXTkz8s'
PGSSLMODE='require'
PGCHANNELBINDING='require'
 */ 
