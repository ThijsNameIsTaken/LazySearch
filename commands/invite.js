const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const link = "https://discord.com/api/oauth2/authorize?client_id=733336613542690947&permissions=8&scope=bot"

    const embed1 = new discord.MessageEmbed()
        .setTitle("Click here to get the invite!")
        .setURL(link)
        .setFooter("!help | !github | !search")
        .setTimestamp()

    message.channel.send(embed1)
}