

const express = require("express");
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

const app = express();

app.use(express.json());

const dbPath = path.join(__dirname, "database.db");

let db;

// Home API
app.get("/", (req, res) => {
  res.send("Server is working successfully!");
});

// GET API - Get all books
app.get("/books/", async (request, response) => {
  const query = `SELECT * FROM book;`;
  const books = await db.all(query);
  response.send(books);
});

// GET API - Get book by ID
app.get("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;

  const query = `SELECT * FROM book WHERE id = ?;`;
  const book = await db.get(query, [bookId]);

  if (book === undefined) {
    response.status(404).send("Book Not Found");
  } else {
    response.send(book);
  }
});

// POST API - Add a new book
app.post("/books/", async (request, response) => {
  const { title, author, price, pages } = request.body;

  const query = `
    INSERT INTO book (title, author, price, pages)
    VALUES (?, ?, ?, ?);
  `;

  const result = await db.run(query, [
    title, author, price, pages
  ]);

  response.status(201).send({
    bookId: result.lastID
  });
});

// PUT API - Update a book
app.put("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;
  const { title, author, price, pages } = request.body;

  const query = `
    UPDATE book
    SET title = ?, author = ?, price = ?, pages = ?
    WHERE id = ?;
  `;

  const result = await db.run(query, [
    title, author, price, pages, bookId
  ]);

  if (result.changes === 0) {
    response.status(404).send("Book Not Found");
  } else {
    response.send("Book Updated Successfully");
  }
});

// DELETE API - Delete a book
app.delete("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;

  const query = `DELETE FROM book WHERE id = ?;`;
  const result = await db.run(query, [bookId]);

  if (result.changes === 0) {
    response.status(404).send("Book Not Found");
  } else {
    response.send("Book Deleted Successfully");
  }
});

// Initialize Database and Server
const initializeDBAndServer = async () => {
  try {
    db = await sqlite.open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log("Database Connected Successfully");

    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });

  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

initializeDBAndServer();
