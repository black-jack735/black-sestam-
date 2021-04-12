const { Attachment } = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    let id = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.exec(args[1]);
    
    if (!id) return message.reply('You did\'nt input a valid emoji or it is a default Discord emote!');
    switch (args[0]) {
      case 'animated':
        message.channel.send('The Emoji Gif', { files: ['https://cdn.discordapp.com/emojis/' + id + '.gif'] });
        break;
      case 'static':
        message.channel.send('The Emoji Image', { files: ['https://cdn.discordapp.com/emojis/' + id + '.png'] });
        break;
      default:
        message.reply('You need to supply the type of emoji it is!');
        break;
    }
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['emoteimage', 'ei', 'eimage', 'emojii', 'emotei'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'emojiimage',
  category: 'Fun',
  description: 'Returns the image of the specified emoji',
  usage: 'emojiimage <static/animated> <emoji>'
};