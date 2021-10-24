const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "99916001",
    database: "demo-school",
    host: "localhost",
    port: 5432,
});

module.export = pool;