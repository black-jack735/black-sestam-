const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { Attachment } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const YouTube = require("simple-youtube-api");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const fetch = require("node-fetch");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const db = require("quick.db");
const dateFormat = require("dateformat");
var table = require("table").table;
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const ytdl = require("ytdl-core");
const cmd = require("node-cmd");
const imdb = require("imdb-api");
const cooldown = new Set();
const cdtime = 5;
const prefix = "b!";
client.login("");
client.on("ready", () => {
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
    console.log(client.guilds.cache.map(c => `${c.name} : ${c.me.hasPermission(8)} : ${c.memberCount}`));
  client.user.setActivity( `${prefix}help | BLACK SESTAM IS HERE | SERVERS ${client.guilds.cache.size} `);
  console.log(`Logined`);
});


const wlcblack = JSON.parse(fs.readFileSync("./black.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1).join(" ");
  let channel = message.guild.channels.cache.find(channel => channel.name === `${room}`) ||message.mentions.channels.first();
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("**Please Type The Name Channel**");
    if (!channel) return message.channel.send("**Cant Find This Channel**");
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**✅Done Check The Welcomer Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("RANDOM")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
    wlcblack[message.guild.id] = {
      channel: channel.name
    };
    fs.writeFile("./black.json", JSON.stringify(wlcblack), err => {
      if (err) console.error(err);
    });
  }
});
client.on('guildMemberAdd', async member => {
let memberavatar = member.user.avatarURL()
const welcomer = member.guild.channels.cache.find(channel => channel.name === wlcblack[member.guild.id].channel);
if(!welcomer) return;
let wlcblack = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail(memberavatar)
.setTitle(`**Welcome To The Server **`)
.addField(`Member Name` ,` <@${member.user.id}>`, true)
.addField(`Member id `,` ${member.user.id}`, true)
.addField(`You Are member `,` ${member.guild.memberCount}`, true)
.addField(`Server `,` ${member.guild.name}`, true)
.setImage(`https://media.discordapp.net/attachments/812236843709104138/813718329398919178/image0.gif`)
.setFooter(`${member.guild.name}`)
.setTimestamp()
welcomer.send(wlcblack);
});

client.on ("guildMemberAdd", async (black) => {
   var channel = client.guild.channels.cache.find(r => r.name === wlcblack[black.guild.id].channel);
        if (!channel) return false;
        var canvas = Canvas.createCanvas(400, 200);
        var ctx = canvas.getContext("2d");
        const background = await Canvas.loadImage("https://images-ext-2.discordapp.net/external/Wztx7R054jq_6PfFakU12eZCTmUd2wjtM2ubn6mDx0w/https/media.discordapp.net/attachments/804296740941201438/804750409457336330/25.png");
        const userAva = await Canvas.loadImage(black.user.displayAvatarURL());
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "#000000";
      ctx.fillText(`${black.user.username}`, 200 , 120)
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "#000000";
      ctx.fillText(`Welcome`, 170 , 80)
  ctx.beginPath();
    ctx.arc(100, 100, 70, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip()
        ctx.drawImage(userAva, 25, 25, 180, 150);
        channel.send(new Discord.MessageAttachment(canvas.toBuffer(), "welcome-black.png"))
})

/////created by black jack



const sug = JSON.parse(fs.readFileSync("./sug.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1).join(" ");
  let channel = message.guild.channels.cache.find(c => c.name === `${room}`) || message.mentions.channels.first();
  if (message.content.startsWith(prefix + "setSug")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("**Please Type The Name Channel or mention**");
    if (!channel) return message.channel.send("**Cant Find This Channel**");
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**✅Done Check The Sug Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("RANDOM")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
    sug[message.guild.id] = {
      channel: channel.name
    };
    fs.writeFile("./sug.json", JSON.stringify(sug), err => {
      if (err) console.error(err);
    });
  }
});
client.on('message', message => { 
    if(message.content.startsWith(`${prefix}sug`)) {    
    		let args = message.content.split(' ').slice(1);
       let sugest = client.channels.cache.find(channel => channel.name ===  sug[message.guild.id].channel)
    if(!sugest) return message.reply(`**Dont Setup channel please Type ${prefix}setSug channel name or mention channel**`)
    let blacksug = new Discord.MessageEmbed()
    .setTitle('New Suggest')
    .addField('Suggest By', `${message.author}`)
    .addField('Suggest', `${args}`)
    .addField('Guild Name', message.guild.name)
    .setFooter(`Request By ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
    sugest.send(blacksug).then(bj => {
  bj.react("❌") 
  bj.react("✅")
    })}})

const invite = JSON.parse(fs.readFileSync("./invite.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  let channel =
    message.guild.channels.cache.find(channel => channel.name === `${room}`) ||
    message.mentions.channels.first();
  if (message.content.startsWith(prefix + "setInvite")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room)
      return message.channel.send("**Please Type The Menition Channel**");
    if (!channel) return message.channel.send("**Cant Find This Channel**");
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**✅Done Check The Invite Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("RANDOM")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
    invite[message.guild.id] = {
      channel: channel.name
    };
    fs.writeFile("./invite.json", JSON.stringify(invite), err => {
      if (err) console.error(err);
    });
  }
});
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites.then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.cache.get(invite.inviter.id);
    const logChannel = member.guild.channels.cache.find(
      channel => channel.name === `${invite[member.guild.id].channel}`
    );
    if (!logChannel) return;
    setTimeout(() => {
      logChannel.send(`Welcome To Server
Name  ${member} | Invited By <@${inviter.id}> | Total Invite ${invite}`);
    }, 2000);
    fs.writeFile("./invite.json", JSON.stringify(invite), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  });
});

const left = JSON.parse(fs.readFileSync('./left.json' , 'utf8'));
client.on('message', message => {
           if (!message.channel.guild) return;
    let room = message.content.split(" ").slice(1);
    let channel =  message.guild.channels.cache.find(channel => channel.name === `${room}`) || message.mentions.channels.first();
    if(message.content.startsWith(prefix + "setLeave")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('**Please Type The Menition Channel**')
if(!channel) return message.channel.send('**Cant Find This Channel**')
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTitle('**✅Done Check The Leave Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Server', `${message.guild.name}`)
.addField('Requested By:', `${message.author}`)
.setColor("RANDOM")
.setFooter(`${client.user.username}`)
.setTimestamp()
message.channel.send(embed)
left[message.guild.id] = {
channel: channel.name
}
fs.writeFile("./left.json", JSON.stringify(left), (err) => {
if (err) console.error(err)
})}})
client.on("guildMemberRemove", async member => {
  let channels = client.channels.cache.find(channel => channel.name === left[member.guild.id].channel);
  if (!channels) return;
  let left = new Discord.MessageEmbed()
    .setAuthor(member.author.username, member.author.avatarURL())
    .setThumbnail(member.author.avatarURL())
    .setTitle("**Left In The Server **")
    .addField("Member Name", ` <@${member.user.id}>`, true)
    .addField("Member id", ` ${member.user.id}`, true)
    .addField("Total Member", ` ${member.guild.memberCount}`, true)
    .addField("Server ", ` ${member.guild.name}`, true)
    .setColor("RANDOM")
    .setFooter(`${client.user.username}`)
    .setTimestamp();
  channels.send(left);
});

 ////by black jack


const setxp = JSON.parse(fs.readFileSync('./setxp.json' , 'utf8'));
client.on('message', message => {
           if (!message.channel.guild) return;
    let room = message.content.split(' ').slice(1).join(" ")
    let channel = message.guild.channels.cache.find(c => c.name === `${room}`) || message.mentions.channels.first()
    if(message.content.startsWith(prefix + "setLevel")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('**Please Type The Name Channel Or Mention**')
if(!channel) return message.channel.send('**Cant Find This Channel**')
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTitle('**✅Done Check The Level Code Has Been Setup**')
.addField('Channel', `${room}`)
.addField('Server', `${message.guild.name}`)
.addField('Requested By', `${message.author}`)
.setColor("RANDOM")
.setFooter(`${client.user.username}`)
.setTimestamp()
message.channel.send(embed)
setxp[message.guild.id] = {
channel: channel.name,
}
fs.writeFile("./setxp.json", JSON.stringify(setxp), (err) => {
if (err) console.error(err)
})}})
const xp = JSON.parse(fs.readFileSync("./xp.json", "utf8"));
let saveBlackJack = () => {
  fs.writeFileSync(
    "./xp.json",
    JSON.stringify(xp, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
  
    let Addxp = Math.floor(Math.random() * 6) + 8;
 
    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }
 saveBlackJack()
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level + 1;
    let nextLvL = xp[message.author.id].level * 1000;
    xp[message.author.id].xp = curxp + Addxp;
    if(nextLvL <= xp[message.author.id].xp){
        xp[message.author.id].level = xp[message.author.id].level + 1;
              let channel = client.channels.cache.find(channel => channel.name ===  setxp[message.guild.id].channel)
     channel.send(`<@${message.author.id}>  Congratulations level up,🍃 your level now  [ ${curlvl} ] 🥳`)
    }  
 saveBlackJack()
});
          
   
    
client.on("message", async message => {
  if (message.content.startsWith(prefix + "settopic")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You need Administrator permission to use this command!**"
      );
    let topic = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!topic) return message.channel.send("**Shte bnwsa bo danany Topic**");
    message.channel.setTopic(topic);
    const embed = new Discord.MessageEmbed()
      .setTitle("**Done check Description channel**")
      .addField("Message", `${topic}`)
      .addField("Channel", message.channel.name)
      .addField("By", message.author.tag)
      .setColor("RANDOM")
      .setFooter("BY BLACK JACK");
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "ban")) {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You dont have premission")
    let tag = message.mentions.members.first();
    if(!tag) return ('**Aw kasa La server nya**')
    let args = message.content.split(" ").slice(1).join(" ")
    if(!args) return message.reply('**Kasek Menition bka**')
     if (!message.guild.member(tag).bannable) return message.reply("**I cant Ban Member Because The Member Hight role**");
    var blackjack = 'Black sestam'
    const ban = new Discord.MessageEmbed()
    .setTitle('**Banned In a Server**')
    .addField('Guild', message.guild.name)
    .addField('Name member ban', tag)
    .addField('Moderation', message.author.tag)
    .setFooter('BLACK SESTAM')
    .setColor("RANDOM")
    message.channel.send(ban)
    tag.ban();
  }})


client.on("message", message => {
  if (message.content.startsWith(prefix + "kick")) {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("**You dont have premission**");
    let tag = message.mentions.members.first();
    if (!tag) return "**Aw kasa La server nya**";
    let args = message.content.split(" ").slice(1);
    if (!args)
      return message.channel.send("**Please Mention Member**");
      if (!message.guild.member(tag).kickable) return message.reply("**I cant Kick Member Because The Member High Roles**");
    var blackjack = "Black sestam";
    const ban = new Discord.MessageEmbed()
      .setTitle("**Banned In a Server**")
      .addField("Guild", message.guild.name)
      .addField("Name member ban", tag)
      .addField("Moderation", message.author.tag)
      .setFooter("BLACK SESTAM")
      .setColor("RANDOM");
    message.channel.send(ban);
    tag.kick();
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "movie")) {
    let args = message.content.split(" ").slice(1);
    if (!args.length) {
      return message.channel.send("Please give the name of movie or series");
    }
    const imob = new imdb.Client({ apiKey: "5e36f0db" }); //You need to paste you imdb api
    let movie = await imob.get({ name: args.join(" ") });
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(movie.title)
      .setURL(movie.imdburl)
      .setDescription(movie.plot)
      .setThumbnail(movie.poster)
      .addField("❯ Rate", movie.rating, true)
      .addField("❯ Time", movie.runtime, true)
      .addField("❯ Awards", movie.awards, true)
      .addField("❯ Langueages", movie.languages, true)
      .addField("❯ Genres", movie.genres, true)
      .addField("❯ PG", movie.rated, true)
      .addField("❯ Coutry", movie.country, true)
      .addField("❯ Released", movie.released)
      .setFooter("All information is provided by IMDB");

    message.channel.send(embed);
  }
});

const reply = JSON.parse(fs.readFileSync('./replys.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setReponse")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('لاتمتلك صلاحية منج سيرفر').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
 
    message.channel.send('Please Send First Message').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit('Please send Last message').then(msg => {
 
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('**Done Chek SetUp**').then(msg => {
 
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Code Auto Reponse Has been SetUp**')
                      .addField('Name Server', message.guild.name)
                      .addField('First Message', `${thisMessage}`)
                      .addField('Last Message', `${boi}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)
                     message.channel.send(embed)
    reply[message.guild.id] = {
        msg: thisMessage,
        reply: boi,
    }
    fs.writeFile("./replys.json", JSON.stringify(reply), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})
client.on('message', async message => {
   if(message.content === reply[message.guild.id].msg) {
       message.reply(reply[message.guild.id].reply)
   }})



client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | **Please wait for ${cdtime} second**`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setThumbnail(message.guild.iconURL()).setDescription(`
      
[Click To Invite](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975)  

**The Prefix is a (b!)**

**General**
 botinfo,server,ping,invites,say,embed,boosts,hightRole,nick,user,avatar,banner,icon,roles,emoji,sug,timer,youtube,google,weather,listemojis,my perms,
 covid,my perms,sbot,rank,calc,translate,chinfo,count,boosts,guild,date,year,se static <emojiserver>,movie <movie name>

**Moderation**
ban,kick,mute,unmute,tempmute,color,bans,roleinf
unban,unban all,warn,warnings,lock,unlock,close,open,pin,unpin,rules,settopic,move,help move,delete,mutevoice,unmute voice,
region,setSug,setWelcomer,setLeave,setOnlineVc,setLevel,setAutoRole,setLog,togglelog,setReponse

 **Security**
  anti ban [Number]
 anti kick [Number]
 anti channelD [Number]
 anti channelC [Number]
 anti roleD [Number]
 anti roleC [Number]
 anti time [Number]
 antibots [on/off]
 config

 **JUST FOR OWNER SHIP**

 **Fun**
 meme,slap,cuddle,kiss,boom,man,girl
 sad,love,hack,8ball,dog
 
[Support Server](https://discord.gg/zqgxs7RJpQ) 

`);
    message.channel.send(help);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user) return message.channel.send(`**>>> ${prefix}move <@mention or id>`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
        message.channel.send(
          `**${user.user.username}** has been moved to **${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
  if (message.content.toLowerCase() === prefix + "help move") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: move`)
      .addField("Usage", `${prefix}move @user`)
      .addField("Information", "move members");
    message.channel.send(move);
  }
});
client.on('message', message => { //Black jack
    if (!message.channel.guild) return;
if(message.content == prefix + 'boosts') //Black jack
var Black = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setFooter(message.author.username, message.author.avatarURL())
.addField('Server Name',`${message.guild.name}`)

.addField('Boost Count',` ${message.guild.premiumSubscriptionCount}`)
.setColor("RANDOM")
message.channel.send(Black);
}); 
client.on('message', message => { //Black jack
    if (!message.channel.guild) return;

if(message.content == prefix + 'count') //Black jack
var Black = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setFooter(message.author.username, message.author.avatarURL())
.setTitle('Info server ',`__${message.guild.name}__`)
.addField('Total Bost',`__${message.guild.memberCount}__`)
message.channel.send(Black);
}); 
client.on("message", message => {
    if (message.content.startsWith(prefix + "rules")) {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
     const blackjack = new Discord.MessageEmbed() 
         .setColor("BLACK")
         .setTitle("RULES")
         .setImage("https://media.discordapp.net/attachments/644265220449107968/646324616536784897/image0-16.png")
         .setFooter("RULES")
         .setDescription(`

**__Rules|یاسا__**
 
سەرتا سلاو تان لێبێ 

ئێمە وەک هەریەک لە سێرڤەرەکانی کە یاسای تایبەت بە خۆمان هەیە 

1. نابێت قسەی ناشیاو یان جنێوێکێک بدەی چونکە یەکسەر باندت ئەکەین
2. نابێت لە ڤۆیسی گشتی بۆت بەکاربێنن
3. ریکلام کردن بە هەموو شێوەک قەدەخەیە جگە لە گۆرینەوەی
4. نابێت بە هیچ شێوەیەک بێرێزی بە تاکێکی ستافەکە بکەیت
5. بێزارکردنی پلەیەر و میوان قەدەخەیە
6. باسکرنی سیاسەت بە هەموو شێوەیەک قەدەخەیە
7. شارچێتی قەدەخەیە
8. سوکایەتی کردن بە یەک قەدەخەیەو یەکسەر باندە
9. زۆر دووبارە کردنەوەی مەسج یاجود سپام کردن قەدەخەیە

لەگەل رێزماندا....!

   `)
   message.channel.send(blackjack)
 
   }
   });

client.on("message", message => {
  if(message.content.startsWith(prefix + "nick")){
      if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("**You Dont hAve Premission MANAGE NICKNAMES**")
  var user = message.mentions.members.first();
  var args = message.content.split(" ").slice(2);
  var nick = args.join(" ");
  if(!user || !args) return message.channel.send(`**${prefix}nick @tag NickName**`);
  message.guild.member(user.user).setNickname(`${nick}`);
  const blackj = new Discord.MessageEmbed()
  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("**Done The Changed NickName**")
  .addField("Name User", user)
  .addField("Nickname New", nick)
  .addField("Moderation", message.author.tag)
  .setColor("RANDOM")
  message.channel.send(blackj)
  }
  });


client.on("message", message => {
  if(message.content.startsWith(prefix + "banner")) {
    if(message.guild.bannerURL() === null || message.guild.bannerURL === undefined) return message.channel.send("**❌ | This server doesn\'t have a banner.**");
    const ba = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setDescription(`[Banner URL](${message.guild.bannerURL}?size=2048)`)
    .setImage(message.guild.bannerURL() + "?size=2048")
    message.channel.send({embed : ba})
  }
});

client.on("message", msg => {
if (msg.content.startsWith(prefix + "year")){
    let now = new Date();
    let next = new Date(now);
    next.setFullYear(now.getFullYear() + 1);
    next.setHours(0, 0, 0, 0);
    next.setMonth(0, 1);
    let duration = next - now;
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / 1000 / 60) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Next Year!", msg.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription(`There are **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds** until **${next.getFullYear()}**!`)
    .setImage("")
    .setFooter(`Or, in short, ${moment.duration(next - now).humanize()}.`)
    msg.channel.send(embed)
}
})
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    if (!message.channel.guild) return;
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    const embed = new Discord.MessageEmbed()
        .setThumbnail(heg.avatarURL())
        .addField("**ID**", `${heg.id}`, true)
        .addField("**Name**", `${heg.username}`, true)
        .addField('**Discrim Account**',"**#" +  `${heg.discriminator}**`,true)
        .addField("**Created Account At**", `${heg.createdAt}`, true)
        .addField("**Time Join Server**", message.member.joinedAt.toLocaleString())    
        .addField("**Bot**", `${heg.bot}`, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM")     
        .setFooter("BLACK SESTAM");
  
    message.channel.send(embed);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "avatar")) {
    if (!message.channel.guild) return;
    var mentionned = message.mentions.users.first();
    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    const embed = new Discord.MessageEmbed()
      .addField("Requested by:", "<@" + message.author.id + ">")
      .setColor("BLACK")
      .setImage(`${client.avatarURL}`)
      .setFooter("BLACK BOT");
    message.channel.send(embed);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "my perms")) {
    if (!message.channel.guild) return;
    var perms = JSON.stringify(
      message.channel.permissionsFor(message.author).serialize(),
      null,
      4
    );
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(":tools: Permissions")
      .addField("Your Permissions:", perms);
    message.channel.send({ embed: embed });
  }
});

client.on("message", message => {
let command = message.content.toLowerCase().split(" ")[0]
if(command === `${prefix}giveaway`) {
  let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send(`You did not specify your time!`);
  if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m"))
    return message.channel.send(`The time needs to have days (d) or hours (h) or minutes (m)`);
  if (isNaN(args[0][0])) return message.channel.send(`It must be a number you know that?`);

  let prize = args.slice(1).join(" ");
  if (!prize) return message.channel.send(`No prize specified!`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`New giveaway!`)
    .setDescription(`Host: ${message.author}\nTime: ${args[0]}\nPrize: ${prize}`)
    .setTimestamp(Date.now() + ms(args[0]))
    .setColor(`BLUE`);
  message.channel.send(embed).then(m => {
    m.react("🎉");
  setTimeout(() => {
    if (m.reactions.cache.get("🎉").count <= 1) {
      const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("No winners")
      m.edit(embed)
      return message.channel.send(`Couldnt generate a winner as there is no one in that giveaway!`);
    }

    let winner = m.reactions.cache.get("🎉").users.cache.filter((b) => !b.bot).random();
    
    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Winner: ${winner}`)
    m.edit(embed)
    
    message.channel.send(`The winnder of the giveaway is ${winner}`);
  }, ms(args[0]));
}
)}})
var vojson = require("./vojson.json");
function saveBlakJack() {
    fs.writeFileSync("./vojson.json", JSON.stringify(vojson, null, 4));
}
client.on('message', message => {
    if(message.content.startsWith(prefix + "setOnlineVc")) {
let channel = message.content.split(" ").slice(1).join(" ")
let channelfind = message.guild.channels.cache.find(c => c.name === `${channel}`)
if(!channel) return message.channel.send(`> Please Type The Voice Channel Name Example: ${prefix}setvoice <Channel name>`)
if(!channelfind) return message.channel.send(`> Please Type The Voice Channel Name Example: ${prefix}setvoice <Channel name>`)
vojson[message.guild.id] = {
stats: 'enable',
chid: channelfind.id,
guild: message.guild.id

}
saveBlakJack()
channelfind.setName(`Voice online [${message.guild.members.cache.filter(m => m.voice.channel).size}]`)
message.channel.send('**Done The Voice Online  Is Turned On**')

}
    if(message.content.startsWith(prefix + "vc off")) {
    vojson[message.guild.id] = {
        stats: 'disable',
        chid: ch.id,
        guild: message.guild.id
        }
        message.channel.send('**Done The Voice Online Is Turned Off**')
 
}
saveBlakJack()
})
client.on('voiceStateUpdate', (oldMember , newMember) => {
            if(!vojson[oldMember.guild.id]) vojson[oldMember.guild.id] = {
                stats: 'disable',
                chid: 'undefined',
                guild: 'undefined'
            }
                    if (vojson[oldMember.guild.id].stats === 'enable') {
                        let ch = vojson[oldMember.guild.id].chid
                        let channel = oldMember.guild.channels.cache.get(ch)
                        let guildid = vojson[oldMember.guild.id].guild
                        channel.setName(`VoiceOnline:[${oldMember.guild.members.cache.filter(m => m.voice.channel).size}]`)
                    };
                    if (vojson[oldMember.guild.id].stats === 'disable') {
                    return;
                    }
        });



var rWlc = require("./AutoRole.json");
function saveBJ() {
    fs.writeFileSync("./AutoRole.json", JSON.stringify(rWlc, null, 4));
}
client.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!rWlc[message.guild.id])
    rWlc[message.guild.id] = {
      role: "AutoRole"
    };
  saveBJ()
  const channel = rWlc[message.guild.id].role;
  if (message.content.startsWith(prefix + "setAutoRole")) {
    if (!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newrole = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!newrole) return message.reply(`**${prefix}autorole <role name>**`);
    rWlc[message.guild.id].role = newrole;
    message.channel.send(
      `**${message.guild.name}'s Role Has Been __Changed__ To ${newrole}**`
    );
  }
  saveBJ()
});
client.on("guildMemberAdd", member => {
  if (!rWlc[member.guild.id])
    rWlc[member.guild.id] = {
      role: "AutoRole"   
    };
  saveBJ()
  const sRole = rWlc[member.guild.id].role;
  let Rrole = member.guild.roles.cache.find(role => role.name === sRole);
  member.roles.add(Rrole);
});


client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command === "kill") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
      }, 1000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
      }, 2000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
      }, 3000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
      }, 4000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});
      
client.on("message", message => {
  if (message.content.startsWith(prefix + "mutevoice")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("**You dont Have premisssion Mutevoicr** ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**I Don't Have `MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("Menition member");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("Restart");
    }
    muteMember.setMute(true);
    if (muteMember) {
      message.channel.sendMessage("Muted voice ");
    }
  }
});
client.on("message", msg => {
  if (msg.content == prefix + "guild") {
    let embed = new Discord.MessageEmbed()
      .setThumbnail(msg.guild.iconURL())
      .setColor("RANDOM")
      .addField("Year📆", msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp();
    msg.channel.send(embed);
  }
});




client.on('message', message => {
         if (message.content === prefix + "date") {
         if (!message.channel.guild) return   
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'AM';
            if (hours >= 12) {
                suffix = 'PM';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.MessageEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "TIME AND DATE")
                .setColor('RANDOM')
                .setFooter("BLACK BOT")
                .setFooter(message.author.username, message.author.avatarURL())
                 .addField('Time',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
              
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.send(Date15);
        }
    });
client.on("message", message => {
  if (message.content.startsWith(prefix + "youtube")) {
    const query = message.content.split(" ").slice(1);
    const url = `https://www.youtube.com/results?search_query=${query}`;
    if (!query)
      return message.channel.send(
        `**:x: | Error , Please Type Command True Ex : \`${prefix}youtube [Anything]\`**`
      );
    let querry = new Discord.MessageEmbed()
      .setAuthor(
        "Youtube",
        "https://cdn.discordapp.com/attachments/599152027628732429/599229170517540874/1GNwojhBBCCCGEEEIIIYQQQgghhBBCCCGEEELI7APi4BZVCOUmf4AAAAASUVORK5CYII.png"
      )
      .setColor("RED")
      .setTitle(`Results : \`${query.join(" ")}\``)
      .setDescription(`${url}`)
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send(querry);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "unmute voice")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("**You Need MUTE MEMBER**❌ ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**I dont`MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("Menition user");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("Restart");
    }
    muteMember.setMute(false);
    if (muteMember) {
      message.channel.sendMessage("Un mute member");
    }
  }
});


client.on("message", msg => {
  if (!msg.channel.guild) return;
  if (msg.content.startsWith(prefix + "calc")) {
    let args = msg.content.split(" ").slice(1);
    const question = args.join(" ");
    if (args.length < 1) {
      msg.reply("Specify a equation, please.");
    } else {
      let answer;
      try {
        answer = math.eval(question);
      } catch (err) {
        msg.reply(`Error: ${err}`);
      }

      const embed = new Discord.MessageEmbed()
        .addField("**Input**: ", `**${question}**`, true)
        .addField("**Output**: ", `**${answer}**`, true);
      msg.channel.send(embed).catch(console.error);
    }
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "rooms")) {
    if (message.author.bot) return;
    if (!message.guild) return;

    var channels = message.guild.channels.cache
      .map(channels => `${channels.name}, `)
      .join(" ");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("**INFO ROOMS**")
      .addField(`${message.guild.name}`, `**Rooms:white_check_mark:**`)
      .addField(
        ":arrow_down: Rooms Number. :heavy_check_mark:",
        `** ${message.guild.channels.cache.size}**`
      )

      .addField(
        ":arrow_down:Rooms  Name. :heavy_check_mark::",
        `**[${channels}]**`
      );
    message.channel.send(embed);
  }
});
const weather = require("weather-js");
client.on("message", message => {
  if (message.content.startsWith(prefix + "weather")) {
    var args = message.content.split(" ").slice(1);
    weather.find({ search: args.join(" "), degreeType: "C" }, function(
      err,
      result
    ) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
        message.channel.send("**Please enter a location!**");
        return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00ae86)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature} Degrees`, true)
        .addField("Feels Like", `${current.feelslike} Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true);
      message.channel.send({ embed });
    });
  }
});



////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    let blackjack = "created by black jack";
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permissions**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("** locked Channel :lock:**")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    let blackjack = "created by black jack";
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("** Unlocked Channel 🔓**")
          .addField("Guild name", message.guild.name)
          .addField("Channel", message.channel.name)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
});
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel hided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔒");
    });
  }
});
client.on("message", message => {
  if (message.content === prefix + "open") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel unhided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔓");
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "delete")) {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = message.content.split(" ").slice(1);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message
        .reply("**There is not Found room Please mention channel**")
        .catch(console.error);
    channel.delete();
    message.author.send("**Done check✅**");
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "love")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} :heart:  Love photos  `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147075184197642/image0.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147075687645184/image1.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147124378796032/image0.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147124614201374/image1.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147125045559296/image2.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147125327626240/image3.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147125653864458/image4.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147125901590538/image5.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147126166487070/image6.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147126568615956/image7.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147148715196427/image2.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147149243023370/image3.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147151252357160/image6.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147151525118012/image7.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147151843360768/image8.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147152090562570/image9.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147158851649556/image1.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147159112744990/image2.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147159338713118/image3.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147159611473960/image4.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147160005083156/image5.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147160299601980/image6.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147160625971200/image7.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147161167298560/image8.gif",
      "https://media.discordapp.net/attachments/821688338305908756/824147161422757908/image9.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "man")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100708427726878/image0.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100708755537920/image1.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100709107073024/image2.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100709519294494/image3.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100709849858048/image4.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100710243729489/image5.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100710520815626/image6.gif",
      "https://media.discordapp.net/attachments/821688367564587058/825100710797770822/image7.gif",
      
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} MAN GIFS photos  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "boom")) {
    let bombs = [
      "https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif",
      "https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif",
      "https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif",
      "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif",
      "https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif",
      "https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif",
      "https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif",
      "https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif",
      "https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif",
      "https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif",
      "https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif",
      "https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif",
      "https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif",
      "https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif",
      "https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif",
      "https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif",
      "https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif",
      "https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif",
      "https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif",
      "https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif",
      "https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif",
      "https://media.giphy.com/media/XathaB5ILqSME/giphy.gif",
      "https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif",
      "https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif",
      "https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif",
      "https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif",
      "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
      "https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif",
      "https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOOMED`,
          image: {
            url: bombs[Math.floor(Math.random() * bombs.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "meme")) {
    let meme = [
      "https://media.discordapp.net/attachments/778349612146360381/805361657781944340/FB_IMG_1608729181806.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657177702420/IMG_20201125_181212.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656954748948/received_310923683551106.jpeg",
      "https://media.discordapp.net/attachments/778349612146360381/805361656698765342/Komede.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361172776747038/1f16fa85f750c462.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361042229690398/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805361152481689610/image0.jpg",
      "https://media.tenor.co/videos/2f17757958ab63c82e105cb2f068ba25/mp4",
      "https://media.discordapp.net/attachments/793750057500278805/805371117404815360/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370861393149962/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805370485155954728/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363347390201866/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363470182383646/image0.jpg",
      "https://media.discordapp.net/attachments/791219055083651092/805363578055163934/image0.jpg",
      "https://media.discordapp.net/attachments/788957374311956480/792776202984095744/133411745_960371687826475_946663856063250772_n.png",
      "https://media.discordapp.net/attachments/768041476004904971/781669774374469642/124907941_1816050908534119_3407893796902602469_n.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777584124663037982/Will_You_Shut_Up_Man_.jpg",
      "https://media.discordapp.net/attachments/768041476004904971/777176870130155540/Screenshot_2020-11-14-18-17-30.png",
      "https://media.discordapp.net/attachments/791219055083651092/805364265540124683/image0.jpg",
      "https://media.discordapp.net/attachments/778349612146360381/805361657387024414/Screenshot_20210122_160111.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781587316441108/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805781864220196885/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/805782023562199060/image0.jpg",
      "https://media.discordapp.net/attachments/793750057500278805/806561503980421120/image0.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `**${message.author.username} Meme photos :joy:**`,
          image: {
            url: meme[Math.floor(Math.random() * meme.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});



client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "config")) {
  if (message.author.id !== message.guild.ownerID) return message.reply("Just For Owner ship")
    var blackjack = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle(`**__${message.guild.name}__ , Server Settings**`)

      .addField(
        "Ban Limit Info",
        `
**• | Count : __\`${config[message.guild.id].banLimit} \`__**
`
      )
      .addField(
        "Kick Limit Info",
        `
**• | Count : __\`${config[message.guild.id].kickLimits} \`__**
`
      )
      .addField(
        "Role Delete Limit Info",
        `
**• | Count : __\`${config[message.guild.id].roleDelLimit} \`__**
`
      )

      .addField(
        "Role Create Limit Info",
        `
**• | Count : __\`${config[message.guild.id].roleCrLimits} \`__**
`
      )
      .addField(
        "Channel Delete Limit Info",
        `
**• | Count : __\`${config[message.guild.id].chaDelLimit} \`__**
`
      )
      .addField(
        "Channel Create Limit Info",
        `
**• | Count : __\`${config[message.guild.id].chaCrLimit} \`__**
`
      );

    message.channel.send(blackjack);
  }
});

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.ownerID) {
      let embeeed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Error :x:")
        .setDescription("**SORRY JUST FOR ONWER SHIP**")
        .setColor("9e1c36");
      return message.channel.send(embeeed);
    }
    {
      let black = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Erorr :x:")
        .setDescription("**SEND NUMBER**")
        .setFooter("Protection black system")
        .setColor("9e1c36");

      {
        let black2 = new Discord.MessageEmbed()
          .setThumbnail(message.guild.iconURL())
          .setTitle("Error :x:")
          .setDescription("**JUST SEND NUMBER*")
          .setColor("9e1c36");
 
        if (message.content.startsWith(prefix + "anti ban")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].banLimit = num;
          {
            let banLimit1 = new Discord.MessageEmbed()
              .setThumbnail(message.guild.iconURL())
              .setTitle("Protection + Anti ban")
              .setDescription(
                `Changed to : **${config[message.guild.id].banLimit}**`
              )
              .addField("By", message.author.tag)
              .addField("Server", message.guild.name)
              .setFooter("Protection black system")
              .setColor("RED");
            message.channel.send(banLimit1);
          }
        }
        if (message.content.startsWith(prefix + "anti kick")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].kickLimits = num;
          let embedddd = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti kick")
            .setDescription(
              `Changed to : **${config[message.guild.id].kickLimits}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embedddd);
        }
if (message.content.startsWith(prefix + "anti roleD")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].roleDelLimit = num;
          let embeddddddddd = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti roleD")
            .setDescription(
              `Changed to : **${config[message.guild.id].roleDelLimit}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embeddddddddd);
        }
        if (message.content.startsWith(prefix + "anti roleC")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].roleCrLimits = num;
          let embeed = new Discord.MessageEmbed()
            .setTitle("Protection + Anti roleC")
            .setDescription(
              `Changed to : **${config[message.guild.id].roleCrLimits}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embeed);
        }
        if (message.content.startsWith(prefix + "anti channelD")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].chaDelLimit = num;
          let embeeed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + ChannelD")
            .setDescription(
              `Changed to : **${config[message.guild.id].chaDelLimit}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embeeed);
        }
if (message.content.startsWith(prefix + "anti channelC")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].chaCrLimit = num;
          let embd = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti channelC")
            .setDescription(
              `Changed to : **${config[message.guild.id].chaCrLimit}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embd);
        }
        if (message.content.startsWith(prefix + "anti time")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].time = num;
          let emb = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti time")
            .setDescription(`Changed to : **${config[message.guild.id].time}**`)
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(emb);
        }
      }
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
});
client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({     
     type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `** | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
 
      channel.guild.members
        .cache.get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Has Many Delete channel**`
             )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
 
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `** | ${entry.username} Tryed To \`Delete\` Many \`Rolea\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**$ | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await guild.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.cache.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} He Tried To Ban Many People**`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `** | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `** | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

const antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'))
  client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")){
          if(!message.channel.guild) return;
        if(message.member.id !== message.guild.ownerID) return message.channel.send('Only Ownership can use this command')
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Done Check The Anti bots is on**") 
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("RANDOM")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
 
          })
  client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
          if(!message.channel.guild) return;
           if(message.member.id !== message.guild.ownerID)return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Done Check The Anti bots is off**") 
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("RANDOM")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
 
          })
 
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.ban("**antibots is one!!**")
  })
 
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
 
  })

///////

client.on("message", function(message) {
  const command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + "color") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return;
    const color_number = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!color_number)
      return message.channel.send("**Please Type A Color Number !**");
    if (isNaN(color_number)) return message.channel.send("**Only Numbers !**");
    const color_role = message.guild.roles.cache.find(
      role => role.name === `${color_number}`
    );
    if (!color_role)
      return message.channel.send("**I can't find this color !**");
    message.guild.member(message.author).roles.add(color_role);
    const embed = new Discord.MessageEmbed()
      .setColor(color_role.hexColor)
      .setTitle("**New Color !**")
      .setDescription(
        "**Color Number: " +
          color_role.name +
          "\nColor: " +
          color_role.hexColor +
          "**"
      );
    return message.channel.send({ embed: embed });
  }
});


client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`✅  **-** **Done Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          ` :x: **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///////

////////



////////

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "invites")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      message.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});

/////////

/////////////


client.on("message", async message => {
  if (
    message.content.includes(
      "ker",
      "qn",
      "qwz",
      "Kerm",
      "Ker",
      "kerm",
      "maza",
      "daykt bgem",
      "xwshkt bgem",
      "nank hiz",
      "bgem"
    )
  ) {
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.cache.find(
      role => role.name === `Muted By BlackSestam`
    );
    if (!muterole) {
      try {
        muterole = await message.guild.roles.create({
          name: "Muted By BlackSestam",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.updateOverwrite(muterole, {
            SEND_TTS_MESSAGES: false,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            VIEW_CHANNEL: false,
            SPEAK: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    message.member.roles.add(muterole);
    const embed500 = new Discord.MessageEmbed()
      .setTitle("Muted Ads")
      .addField(`**  You Have Been Muted **`, `**Reason : Uses badword**`)
      .setColor("c91616")
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});




client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(
      role => role.name === "Muted",
      "Muted By BlackSestam"
    );
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("By", message.author.tag)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(
      role => role.name === "Muted",
      "Muted By BlackSestam"
    );
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

//////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "roles") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let roles = message.guild.roles.cache.map(r => `> ${r.name}  `).join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Roles")
      .setDescription(" ```javascript\n" + roles + "``` ");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let roles = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All Roles For Server");
    message.channel.send(roles);
  }
});

////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "hbans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});

////////avatar

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "avatar") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let args = message.content.split(" ");
    let user =
      message.mentions.users.first() ||
      message.author ||
      message.guild.member.cache.get(args[1]);
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(user.username, user.avatarURL())
        .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
        .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    );
  }
});

////////
client.on("message", async message => {
  if (message.content.includes("@everyone", "@here")) {
    if (message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.cache.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.roles.create({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.MessageEmbed()
      .setTitle("Muted Ads")
      .addField(
        `**  You Have Been Muted **`,
        `**Reason : Type everyone and here**`
      )
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});

client.on("message", black => {
  if (black.content.startsWith(prefix + "server")) {
    if (cooldown.has(black.author.id)) {
      return black.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(black.author.id);

    setTimeout(() => {
      cooldown.delete(black.author.id);
    }, cdtime * 1000);
    var blackjack = new Discord.MessageEmbed()
      .setAuthor(black.guild.name)
      .setThumbnail(black.guild.iconURL())
      .setTitle("**Info Server**")
      .addField("**Server Name:**", `${black.guild.name}`)
      .addField("**Owner Server:**", `<@${black.guild.ownerID}>`)
      .addField("**Server ID:**", `${black.guild.id}`)
      .addField("**Created:**", `${black.guild.createdAt.toLocaleString()}`)
      .addField("**Emojis**", `${black.guild.emojis.cache.size}`, true)
      .addField("**Members:**", `${black.guild.memberCount}`)
      .addField("**Channels:**", `${black.guild.channels.cache.size}`)
      .addField("**Region**:", `${black.guild.region}`)
      .addField(`**Boosts**`, `${black.guild.premiumSubscriptionCount}`, true)
      .addField("**Roles:**", ` ${black.guild.roles.cache.size}`)
      .addField("AFK Timeout", black.guild.afkTimeout / 60 + ' minutes', true)
      .setFooter(`Requested | ${black.author.tag}`, black.author.avatarURL())
      .setColor("RANDOM")
      .setTimestamp();
    black.channel.send(blackjack);
  }
});



client.on('message', message => {
  if(message.content.startsWith(`${prefix}support`)){
    var embed = new Discord.MessageEmbed()
    .setTitle("Click Here")
    .setURL("https://discord.gg/h4hwjrhU5Q")
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send("**Check Your DM**")
    message.author.send({embed})
  }
});
client.on('message', message => {
  if(message.content.startsWith(`${prefix}invite`)){
    var embed = new Discord.MessageEmbed()
    .setTitle("Click Here")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=782356951170416670&permissions=8&scope=bot")
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send("**Check Your DM**")
    message.author.send({embed})
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.log(e);
  }
});
////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "botinfo")) {
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ping)}`;
    let botembed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setAuthor(`${client.user.username} Information`)
      .setColor("RANDOM")
      .addField("Bot Name", ` \`${client.user.username}\``)
      .addField("Created On", ` \`${client.user.createdAt}\``)
      .addField("Servers", `\`${client.guilds.cache.size}\``)
      .addField("Users", `\`${client.users.cache.size}\``)
      .addField("Channels", `\`${client.channels.cache.size}\``)
      .addField("Devs Bot", `\` <@670647563627659306>\``)
      .addField("Version", `\` Version 12.4.0\``)
      .addField("Ping Bot", `\`${msg}ms.\``)
      .addField("Api Bot", `\`${api}ms.\``)
      .setTimestamp();
    message.channel.send(botembed);
  }
});


//////

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

////////

///////




///////

client.on("message", message => {
  let args = message.content.split(" ");
  if (args[0] === prefix + "hightRole") {
    let user =
      message.mentions.users.first() ||
      client.users.cache.get(args[1]) ||
      message.author;
    if (!user) return message.channel.send(`> ❎ | I Can't Find This User.`);
    let height = message.guild.member(user).roles.highest.id;
    let heightR = message.guild.roles.cache.find(r => r.id === height);
    let embed = new Discord.MessageEmbed()
      .setAuthor(`${user.username} info`)
      .addField(`Height Role:`, heightR)
      .setFooter(
        `Requsted By ${message.author.username}`,
        message.author.displayAvatarURL()
      )
      .setThumbnail(user.displayAvatarURL());
    message.channel.send(embed);
  }
});

///////


client.on('message', message => {
    if (message.content.startsWith(prefix  + 'say')) {
   var say = message.content.split(" ").slice(1).join(" ");
    if(!say) return message.reply("**Please Type Message For say**")
        message.channel.send(say);
}
    if (message.content.startsWith(prefix  + "embed")) {
   var args = message.content.split(" ").slice(1).join(" ");
   if(!args) return message.reply("**Please Type Message For say Embed**")
   const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setDescription(args)
        message.channel.send(embed);
}
});




var log = require("./log.json");
function saveLog() {
    fs.writeFileSync("./log.json", JSON.stringify(log, null, 4));
}
client.on('message', message => {
           if (!message.channel.guild) return;
    let room = message.content.split(' ').slice(1).join(" ")
    let channel = message.guild.channels.cache.find(c => c.name === `${room}`) || message.mentions.channels.first()
    if(message.content.startsWith(prefix + "setLog")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('**Please Type The Name Channel Or Mention**')
if(!channel) return message.channel.send('**Cant Find This Channel**')
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTitle('**✅Done Check The Log Code Has Been Setup**')
.addField('Channel', `${room}`)
.addField('Server', `${message.guild.name}`)
.addField('Requested By', `${message.author}`)
.setColor("RANDOM")
.setFooter(`${client.user.username}`)
.setTimestamp()
message.channel.send(embed)
log[message.guild.id] = {
channel: channel.name,
}
saveLog()
}})
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "togglelog")) {
    if (!message.channel.guild) return message.reply("**This Command For Serverr**");
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author}, Sorry You Need \`MANAGE_GUILD\` for use this command`);
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "off") return [
      message.channel.send(`**The log Is __𝐎𝐍__ !**`),
      (log[message.guild.id].onoff = "on")
    ];
    if (log[message.guild.id].onoff === "on") return [
      message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
      (log[message.guild.id].onoff = "off")
    ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.cache.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;
 
  let messageDelete = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL());
 
  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.cache.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldMessage.content.startsWith("https://")) return;
 
  let messageUpdate = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.displayAvatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL());
 
  logChannel.send(messageUpdate);
});
 
client.on("channelCreate", channel => {
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
    let channelCreate = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setColor("GREEN")
      .setFooter(channel.guild.name, channel.guild.iconURL());
    logChannel.send(channelCreate)
  })
});
 
 
 
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.cache.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }
 
  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
          "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
          "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
          oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newTopic);
    }
  });
});
 
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let channelDelete = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL());
 
    logChannel.send(channelDelete);
  });
});
 
 
 
 
 
 
 
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let banInfo = new Discord.MessageEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let unBanInfo = new Discord.MessageEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(unBanInfo);
  });
});
 
 
 
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
    let roleCreate = new Discord.MessageEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleCreate);
  });
});
 
 
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let roleDelete = new Discord.MessageEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.cache.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;
 
  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.MessageEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.MessageEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateColor);
    }
  });
});


 
 


  
 
 
 



 
 



 
 
 
 
 
