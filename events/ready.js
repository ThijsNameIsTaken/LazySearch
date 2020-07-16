module.exports = (bot, guild) => {

    console.log(`- Online | ${bot.user.username}`);

    bot.user.setActivity("!search - LazySearch", { type: "PLAYING" });


}
