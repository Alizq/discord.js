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

function GenRandomNum() {
	const min = 1;
	const max = 5;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on("messageCreate", async msg => {
  if (msg.content === "s!おみくじ") {
	let number = GenRandomNum();
	if (number == 1) {
		msg.reply("吉")
	}
	if (number == 2) {
		msg.reply("小吉")
	}
	if (number == 3) {
		msg.reply("中吉")
	}
	if (number == 4) {
		msg.reply("大吉")
	}
	if (number == 5) {
		msg.reply("凶")
	}
  }
});

client.login(token);
