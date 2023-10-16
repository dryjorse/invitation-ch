const express = require("express");
const bodyParser = require("body-parser");
const TelegramApi = require("node-telegram-bot-api");

const app = express();
app.use(bodyParser.json());

const token = "6465466584:AAHfD_FMWo9E-mVEoqs9VZm8j8dQQiZ9p98";
const bot = new TelegramApi(token, { polling: true });

app.post("/incoming-messages", (req, res) => {
  const { message } = req.body;

  bot.sendMessage(1970725563, message);

  res.status(200).send("Message sent");
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
