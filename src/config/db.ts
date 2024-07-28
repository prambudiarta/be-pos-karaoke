import knex from "knex";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from ".";

const config = {
    client: "mysql",
    connection: {
        charset: "utf8",
        timezone: "UTC",
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
    },
};

const db = knex(config);

export default db;
