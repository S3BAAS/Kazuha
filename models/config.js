const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const config = new Schema({
  guildChannelId: String,
  guildId: String,
});
module.exports = mongoose.model("Config", config);