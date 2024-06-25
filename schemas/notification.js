const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const notificationSchema = new Schema({
    email: String,
    url: String,
});
const NotificationModel = mongoose.model('notifications', notificationSchema);
module.exports = NotificationModel;