const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("LoremBot, !help");
    console.log("Bot connecte");
});

bot.login("NDYwMTA1NDI3MzA5NTU5ODA5.DmyRyw.ozvDa0HmpiUVwzkiFRXWC4dfMCM");
