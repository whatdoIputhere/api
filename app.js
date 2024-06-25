const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
var url = `mongodb://${process.env.dbusername}:${process.env.dbpassword}@${process.env.dbendpoint}:10255/${process.env.dbname}?ssl=true&retryWrites=false`;
mongoose.connect(url);

app.use(express.json());

const notificationRoutes = require('./controllers/notification');
app.use(notificationRoutes);

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("App started");
});