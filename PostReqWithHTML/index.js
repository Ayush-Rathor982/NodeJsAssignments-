const express = require("express");

const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const invalidRouter = require("./routes/invalid");

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use("/api/users",usersRouter);
app.use("/api/products",productsRouter);
app.use("/api/cart",cartRouter);
app.use('/{*splat}',invalidRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})