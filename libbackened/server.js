const express = require("express");
const cors = require("cors");
const db = require("./database");
const { searchBook } = require("./controllers/bookcontroller");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Library backend is running!");
});
app.post("/api/books", (req, res) => {
    const title = req.body.title;

    const stmt = db.prepare(`
        INSERT INTO books (title)
        VALUES (?)
    `);

    const result = stmt.run(title);

    res.json({
        message: "Book saved successfully",
        book: {
            id: result.lastInsertRowid,
            title: title
        }
    });
});

app.get("/api/books", searchBook);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});