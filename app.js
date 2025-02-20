const express = require("express");
const app = express();
const cors = require("cors");
const notesRouter = require("./controllers/blogs");

app.use(cors());
app.use(express.json());

app.use("/api/blogs", notesRouter);

app.get("/", (request, response) => {
    response.send("<h1>Welcome to the blog list app!</h1>");
});

module.exports = app;
