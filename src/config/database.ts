import { DataSource } from "typeorm";
import { Recipe } from "../entities/recipe";

export const RecipeDatabase = new DataSource ({
    type: 'postgres',
    host: "ep-spring-shadow-ad3p0cm9-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    port: 5432,
    username: "neondb_owner",
    password: "npg_9iUMPtXTkz8s",
    synchronize: true,
    logging: true,
    entities: [Recipe],
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