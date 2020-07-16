module.exports = (bot, guild) => {

    console.log(`- Online | ${bot.user.username}`);

    bot.user.setActivity("Lazysearch", { type: "PLAYING" });


}
