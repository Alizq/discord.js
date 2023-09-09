//起動コマンド node index.js

const { Client, Events, Intents, Status, ActivityType } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.MESSAGE_CONTENT
	]
})


client.on("ready", () => {
  console.log(`${client.user.tag} でログインしています。`);
});

client.on("messageCreate", async msg => {
  if (msg.content === "s!csgo") {
    msg.reply("https://github.com/toxa9/CSGOInjector/releases/download/1.3/CSGOInjector.exe");
  }
});

client.on("messageCreate", async msg => {
  if (msg.content === "s!ping") {
    msg.reply("でゅあうん！");
  }
});

function GenRandomNum() {
	const min = 1;
	const max = 3;
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

client.on("messageCreate", async msg => {
  if (msg.content === "s!おみくじ") {
	let num = GenRandomNum();
	msg.reply(num)
  }
});

client.login(token);
