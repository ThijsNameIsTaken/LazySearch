const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const link = "https://github.com/ThijsNameIsTaken/LazySearch"

    const embed1 = new discord.MessageEmbed()
        .setTitle("Click here to get the github link!")
        .setURL(link)
        .setFooter("!help")
        .setTimestamp()

    message.channel.send(embed1)
}