const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const notificationRoutes = require('./controllers/notification');
const app = express();
require("dotenv").config();
const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_ENDPOINT}:10255/${process.env.DB_NAME}?ssl=true&retryWrites=false`;
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
