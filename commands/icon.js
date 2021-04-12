const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("**ICON SERVER**")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("RANDOM")
    .setImage(message.guild.iconURL())
    .setFooter(message.author.username,message.author.avatarURL())
    .setTimestamp()

  await message.channel.send(embed);
}

module.exports.help = {
    name: "icon",
    description: "Grabs the server icon",
    usage: "icon",
    type: "Utility"
}