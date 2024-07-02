const express = require("express");
const router = express.Router();
const NotificationModel = require("../schemas/notification");

router.get("/notification/byemail", async (req, res) => {
    let _email = req.query.email;
    try {
        let data = await NotificationModel.find({ email: _email });
        res.send(data);
    } catch (error) {
        res.send(400);
        console.log(error);
    }
});

router.get("/notification", async (req, res) => {
    try {
        let data = await NotificationModel.find();
        res.send(data);
    } catch (error) {
        res.send(400);
        console.log(error);
    }
});

router.post("/notification", async (req, res) => {
    let _email = req.body.email;
    let _url = req.body.url;
    let notification = new NotificationModel({ email: _email, url: _url });
    try {
        await notification.save();
        res.send(200);
    } catch (error) {
        res.send(400);
        console.log(error);
    }
});

router.delete("/notification/byemailurl", async (req, res) => {
    let _email = req.body.email;
    let _url = req.body.url;
    try {
        await NotificationModel.deleteOne({ email: _email, url: _url });
        res.send(200);
    } catch (error) {
        res.send(400);
        console.log(error);
    }
});

router.delete("/notification", async (req, res) => {
    try {
        await NotificationModel.deleteMany();
        res.send(200);
    } catch (error) {
        res.send(400);
        console.log(error);
    }
});

module.exports = router;
