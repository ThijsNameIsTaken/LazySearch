const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap")
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
bot.commands = new Discord.Collection();

fs.readdirSync(`./events/`).forEach(file => {
    if (!file.endsWith('.js')) return;
    let event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    try {
        bot.on(eventName, event.bind(null, bot));
        console.log(`- Event | ${file} has been loaded!`);
    } catch (e) {
        console.log(e);
    }
});

bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`- Command | ${file} has been loaded!`);
        bot.commands.set(commandName, props);
    });
});
