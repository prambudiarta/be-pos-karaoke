import type { Knex } from "knex";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "../config";  

// Update with your config settings.
const config: { [key: string]: Knex.Config } = {
    dev: {
        client: "mysql",
        connection: {
            database: "karaoke",
            user: "root",
            password: "",
            host: "localhost",
            port: 3306,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};

module.exports = config;
