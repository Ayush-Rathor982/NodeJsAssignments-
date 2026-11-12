const express = require("express");
const ordersRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const app = express();



app.use("/orders",ordersRouter);
app.use("/users",usersRouter);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})