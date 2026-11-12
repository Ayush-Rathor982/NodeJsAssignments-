const express = require("express");
const homeRouter = require("./routes/home");
const studentsRouter = require("./routes/students");
const coursesRouter = require("./routes/courses");
const invalidRouter = require("./routes/invalid");

const app = express();



app.use("/",homeRouter);
app.use("/students",studentsRouter);
app.use("/courses",coursesRouter);
app.use('/{*splat}',invalidRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})