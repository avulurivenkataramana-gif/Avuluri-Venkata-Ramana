# Lab 2: SQLite Database and CRUD Routes

## Student Details

- Name: Avuluri Venkata Ramana
- Registration Number: 252U1R1018
- Section: CSE-2A

## Project Description

In this lab, I created a backend application using Node.js, Express.js and SQLite.

The application is used to store book details in a database. I created API routes to add, view, update and delete book records. I also tested each API and checked the changes in the database.

## Technologies Used

- Node.js
- Express.js
- SQLite
- SQLite3
- JavaScript
- Nodemon
- Visual Studio Code
- API Testing Tool

## Database Structure

Database Name: `database.db`

Table Name: `book`

| Column | Data Type |
|---|---|
| id | INTEGER PRIMARY KEY |
| title | TEXT |
| author | TEXT |
| price | INTEGER |
| pages | INTEGER |

Initially, I inserted 10 book records into the database using SQLite CLI.

## Installation and Execution

### 1. Install Dependencies

    npm install

### 2. Start the Server

    npm run dev

I used Nodemon to restart the server automatically whenever changes are made to the code.

### 3. Server Address

    http://localhost:3000/

### Expected Terminal Output

    Database Connected Successfully
    Server Running at http://localhost:3000/

## API Endpoints

I implemented the following five API operations:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Retrieves all books |
| GET | `/books/:bookId/` | Retrieves a book using its ID |
| POST | `/books/` | Adds a new book |
| PUT | `/books/:bookId/` | Updates an existing book |
| DELETE | `/books/:bookId/` | Deletes a book using its ID |

## Output Screenshots

### 1. GET - Server Home

![GET Home](<Lab-02 Screenshots/GET-Home.png>)

### 2. GET - All Books

![GET All Books](<Lab-02 Screenshots/GET-All-Books.png>)

### 3. GET - Book by ID

![GET Book by ID](<Lab-02 Screenshots/GET-Book-By-ID.png>)

### 4. POST - Add a Book

![POST Add Book](<Lab-02 Screenshots/POST-Add-Book.png>)

### 5. PUT - Update a Book

![PUT Update Book](<Lab-02 Screenshots/PUT-Update-Book.png>)

### 6. DELETE - Delete a Book

![DELETE Book](<Lab-02 Screenshots/DELETE-Book.png>)

### 7. DELETE Verification

![Delete Verification](Screenshots/delete-verification.png)

## Problems Faced and Solutions

1. SQLite CLI Issue: Initially, the terminal could not recognize the SQLite command. I found the SQLite executable and used its full path to run it.

2. Database Connection: I connected the SQLite database to the Express server using the `sqlite` and `sqlite3` packages.

3. Server Restart: I installed Nodemon to restart the server automatically after saving changes.

4. API Testing: I tested the API routes and checked whether the database changes were working correctly.

## Deployment

Live URL: Not deployed.

The application was run and tested locally on my system.

## Result

I successfully created an SQLite database, connected it to the Express server and implemented all five CRUD operations. I also tested the API routes and verified the database records.