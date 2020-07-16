const { discord } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed1 = new discord.MessageEmbed()
        .setTitle("Click here to get the github link!")
        .setURL("https://github.com/ThijsNameIsTaken/LazySearch")

    message.channel.send(embed1)
}