const db = require("../database");

function searchBook(req, res) {
    const title = req.query.title;

    const stmt = db.prepare(`
        SELECT * FROM books
        WHERE title LIKE ?
    `);

    const books = stmt.all(`%${title}%`);

    res.json({
        books: books
    });
}

module.exports = {
    searchBook
};