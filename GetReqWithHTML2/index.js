const express = require("express");

const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const invalidRouter = require("./routes/invalid");

const app = express();


app.use("/users",usersRouter);
app.use("/products",productsRouter);
app.use("/cart",cartRouter);
app.use('/{*splat}',invalidRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})