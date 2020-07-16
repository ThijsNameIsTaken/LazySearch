const { DiscordAPIError } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const Discord = require("discord.js");

    const noArgs = new Discord.MessageEmbed()
        .setDescription("**!search**\nExamples:\n!search food")

    if (!args[0]) return message.channel.send(noArgs)

    if (args[0]) {

        const config = require("../storage/config.json")
        var messageArray = message.content.split(" ");

        const arguments = args.join('+')
        const link = `https://www.google.com/search?sxsrf=ALeKk02SZoPJJV2wOMpLOG3KtY-UyAjnqw%3A1594910613412&ei=lWcQX9vJGJGVsAfar5ioCA&q=${arguments}`

        const linkembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Your URL has been created!")
        .setURL(link)
        .setColor('#0099ff')
        .setFooter("!invite - !github")
        .setTimestamp()


        message.channel.send(linkembed)
    }
}