const { discord } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const Discord = require("discord.js");

    const noArgs = new Discord.MessageEmbed()
        .setDescription("**!search**\nExamples:\n!search food")
        .setFooter("!invite - !github")
        .setTimestamp()


    if (!args[0]) return message.channel.send(noArgs)

    if (args[0]) {

        const config = require("../storage/config.json")
        var messageArray = message.content.split(" ");

        const arguments = args.join('+')
        const link = `https://www.google.com/search?q=${arguments}`

        const linkembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Too lazy to search something? Just click here")
        .setURL(link)
        .setColor('#0099ff')
        .setFooter("!help | !github | !invite")
        .setTimestamp()


        message.channel.send(linkembed)
    }
}
