const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const connectMongoDB = require('./database/connection');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
connectMongoDB();
app.use('/admin',adminRoutes);



module.exports = app;