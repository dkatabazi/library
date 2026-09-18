const Database = require("better-sqlite3");

const db = new Database("library.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL
    )
`).run();

console.log("Database connected!");

module.exports = db;