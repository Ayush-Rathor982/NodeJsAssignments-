const express = require("express");
const booksRouter = require("./routes/books");

const app = express();



app.use("/books",booksRouter);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})