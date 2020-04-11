const express = require("express");
const app = express();
const routes = require("./routes");
const connectMongoDB = require("./database/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectMongoDB();
app.use(routes);

module.exports = app;
