const express = require("express");
const bodyParser = require("body-parser");
const TelegramApi = require("node-telegram-bot-api");

const app = express();
app.use(bodyParser.json());

const token = "6465466584:AAHfD_FMWo9E-mVEoqs9VZm8j8dQQiZ9p98";
const bot = new TelegramApi(token, { polling: true });
const webhookURL = "https://invitation-ch.onrender.com/telegram-webhook";
bot.setWebHook(webhookURL);

bot.on("message", msg => {
  console.log(msg)
})

app.post("/incoming-messages", (req, res) => {
  const { message } = req.body;

  bot.sendMessage(1999876670, message);

  res.status(200).send("Message sent");
});

app.post("/telegram-webhook", (req, res) => {
  const update = req.body;

  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
