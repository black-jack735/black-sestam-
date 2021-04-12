const Discord = require("discord.js");

module.exports.run = (bot, message, args, discord) => {
  let nid2 = args.join(" ");
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "**/" +
        message.guild +
        "/" +
        message.channel.name +
        "/** \n  " +
        "You do not have sufficient permissions to unpin messages."
    );
  if (args.length < 1)
    return message.channel.send(
      "**/" +
        message.guild +
        "/" +
        message.channel.name +
        "/** \n  " +
        "Please supply a message ID."
    );
  message.channel
    .messages.fetch(nid2)
    .then(id => {
      id.unpin().catch(err => {
        message.channel.send(
          "**/" +
            message.guild +
            "/" +
            message.channel.name +
            "/** \n  " +
            "Failed to unpin" +
            id
        );
        console.log(err);
      });
      message.channel.send(
        "**/" +
          message.guild +
          "/" +
          message.channel.name +
          "/** \n  " +
          `Successfully removed **${id}** as a pin.`
      );
    })
    .catch(() => {
      message.channel.send(
        "**/" +
          message.guild +
          "/" +
          message.channel.name +
          "/** \n  " +
          `${nid2} isn't a real message ID. Please enter a valid ID.`
      );
    });
};
module.exports.help = {
  name: "unpin"
};
