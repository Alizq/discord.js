//起動コマンド node index.js

const { Client, Events, Intents, Status, ActivityType } = require('discord.js');
const { token } = require('./config.json');
const options = require('./options.json');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.MESSAGE_CONTENT
  ]
})


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async msg => {
  if (msg.content === "s!csgo") {
    msg.reply("https://github.com/toxa9/CSGOInjector/releases/download/1.3/CSGOInjector.exe");
  }
});

client.on("messageCreate", async msg => {
  if (msg.content === "s!ping") {
    const startTime = Date.now();
    const pingMessage = await msg.channel.send('Ping...');
    const endTime = Date.now();
    const ping = endTime - startTime;

    pingMessage.edit(`Pong! (${ping}ms)`);
  }
});

function GenRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// omikujiMapping という配列の中に options.omikuji.chances のキーを値の数だけ入れる。
// 例:
//   options.omikuji.chances = {"大吉": 2, "吉": 3, "凶": 1}
//     ↓
//   omikujiMapping = ["大吉", "大吉", "吉", "吉", "吉", "凶"]
const omikujiMapping = [];
for (let [key, value] of Object.entries(options.omikuji.chances)) {
  omikujiMapping.push(...Array(value).fill(key));
}

client.on("messageCreate", async msg => {
  if (msg.content === "s!おみくじ") {
    // omikujiMapping からランダムな要素を返す。
    let number = GenRandomNum(1, omikujiMapping.length);
    msg.reply(omikujiMapping[number - 1]);
  }
});

client.on("messageCreate", async msg => {
  if (msg.content === "s!test") {
    msg.reply("Test");
  }
});

client.login(token);
