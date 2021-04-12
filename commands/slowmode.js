const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  description: "sets slowmode for a channel",
  usage: "Slowmode <Number>",
  run: async (client, message, args) => {
    let cd = args[0];
    if (message.member.hasPermission("MANAGE_CHANNELS"))
    {
      const { channel } = message;
      let duration = args[0];
      if (isNaN(duration)) {
        message.channel.send("Please give a valid amount of time!");
        return;
      }

      if (cd > 21600) {
        return message.channel.send(
          "You can't set the Slowmode higher than 21600 seconds."
        );
      }
   
      channel.setRateLimitPerUser(duration);
      let Embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Slowmode Set!`)
        .addField(`Moderator`, `${message.author} (${message.author.id})`)
        .addField(`Time Set`, `${duration} seconds`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      return message.channel.send(Embed);
    }
  }
};