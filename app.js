const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const notificationRoutes = require('./controllers/notification');
const app = express();
require("dotenv").config();

const url = `mongodb://${process.env.dbusername}:${process.env.dbpassword}@${process.env.dbendpoint}:10255/${process.env.dbname}?ssl=true&retryWrites=false`;
mongoose.connect(url);

app.use(express.json());
app.use(cors());

app.use(notificationRoutes);

app.get("/", (res) => {
    res.sendStatus(200);
});

app.listen(3001, () => {
    console.log("Api started");
});
