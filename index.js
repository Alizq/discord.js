//起動コマンド node index.js

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});

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
    msg.reply("ぴんぐ！");
  }
});

client.on("messageCreate", async msg => {
  if (msg.content === "s!おみくじ") {
function GenRandomNum() {
  const min = 1;
  const max = 3;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  }
});

const num = GenRandomNum();
console.log(num)

client.login("MTE0OTk2NDUyMDEyNzcyNTYyOA.GWq_ga.nrna5JM3IpuIk0dfP9mrC2wUF7SepyK50tr3iY");
