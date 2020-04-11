const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const defaultRoutes = require("./routes/default");
const connectMongoDB = require("./database/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectMongoDB();
app.use("/admin", adminRoutes);
app.use(defaultRoutes);

module.exports = app;
