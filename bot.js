const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "c";
var adminprefix = 'c'

const developers = ["444972118174859264","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
 
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅ تم تغيير الحالة بنجاح ${argresult}**`)
  } else
     if (message.content === (adminprefix + "lev")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅ تم تغيير الحالة بنجاح ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅ تم تغيير الحالة بنجاح ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅ تم تغيير الحالة بنجاح **`)
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**✅ تم تغير الاسم بنجاح ${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**✅ تم تغير الصور بنجاح ${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
