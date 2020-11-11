const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Enmap = require("enmap");
const { config, token, prefix } = require("./config.json")

client.commands = new Enmap();
client.queue = new Map();

client.on("ready", () =>
  console.log(`
 Bot: ${client.user.tag} | ${client.users.cache.size} membri | ${client.channels.cache.size} canali | ${client.guilds.cache.size} server`)
)

fs.readdir(__dirname + "/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let nomecomando = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Caricamento: " + nomecomando)
  });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot)
    return message.channel.send(message.author.user + "Comando non trovato!");
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;

  command.run(client, message, args);
});

client.login(token);