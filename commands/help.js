const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const link = "https://github.com/ThijsNameIsTaken/LazySearch/wiki"

    const help = new discord.MessageEmbed()
        .setTitle("Click here to get to the help page")
        .setURL(link)
        .setFooter("!invite | !github | !search")
        .setTimestamp()

    message.channel.send(help)
}