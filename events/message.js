module.exports = (bot, message) => {

    if(message.author.bot) return;
    
    if (message.channel.type === "dm") return;
    
    const config = require("../storage/config.json")
    var prefix = config.prefix
    
    var messageArray = message.content.split(" ");
    
    var command = messageArray[0];
    
    var arguments = messageArray.slice(1);
    
    var commands = bot.commands.get(command.slice(prefix.length))
    
    if (!message.content.startsWith(prefix)) return;
    
    
    if (commands) commands.run(bot, message, arguments);
    
    }