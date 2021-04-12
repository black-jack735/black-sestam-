const Discord = require("discord.js");
exports.run = (client, message, args) => { 
  
  
  if (!args[0]) {
        return message.channel.send(`https://google.com`);
    }
    message.channel.send(`http://www.google.com/search?q=${args.join('+')}&pws=0`);

  

}

exports.help = {
  name: 'google'
}