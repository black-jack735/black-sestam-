const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    let channelinfo = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setAuthor(message.author.username,message.author.avatarURL())
    .setTitle("Channel Information for " + message.channel.name)
    .addField("Guild Name", message.guild.name)
    .addField("NSFW?", message.channel.nsfw)
    .addField("Channel Name", message.channel.name)
    .addField("Channel ID", message.channel.id)
    .addField("Channel type", message.channel.type)
    .addField("Channel description", message.channel.topic)
    .addField("Channel creation", message.channel.createdAt)
 message.channel.send(channelinfo);
}
  module.exports.help = {
    name: "chinfo"
}