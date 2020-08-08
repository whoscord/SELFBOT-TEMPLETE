const { Client, RichEmbed } = require('discord.js');
const { red, green, blue, yellow, cyan } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');

console.log(blue(`  ██████▓██   ██▓     ██████ ▓█████  ██▓      █████▒▄▄▄▄    ▒█████  ▄▄▄█████▓`));
console.log(blue(`▒██    ▒ ▒██  ██▒   ▒██    ▒ ▓█   ▀ ▓██▒    ▓██   ▒▓█████▄ ▒██▒  ██▒▓  ██▒ ▓▒`));
console.log(blue(`░ ▓██▄    ▒██ ██░   ░ ▓██▄   ▒███   ▒██░    ▒████ ░▒██▒ ▄██▒██░  ██▒▒ ▓██░ ▒░`));
console.log(blue(`  ▒   ██▒ ░ ▐██▓░     ▒   ██▒▒▓█  ▄ ▒██░    ░▓█▒  ░▒██░█▀  ▒██   ██░░ ▓██▓ ░ `));
console.log(blue(`▒██████▒▒ ░ ██▒▓░   ▒██████▒▒░▒████▒░██████▒░▒█░   ░▓█  ▀█▓░ ████▓▒░  ▒██▒ ░ `));
console.log(blue(`▒ ▒▓▒ ▒ ░  ██▒▒▒    ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒░▓  ░ ▒ ░   ░▒▓███▀▒░ ▒░▒░▒░   ▒ ░░  `));
console.log(blue(`░ ░▒  ░ ░▓██ ░▒░    ░ ░▒  ░ ░ ░ ░  ░░ ░ ▒  ░ ░     ▒░▒   ░   ░ ▒ ▒░     ░  `));
console.log(blue(`░  ░  ░  ▒ ▒ ░░     ░  ░  ░     ░     ░ ░    ░ ░    ░    ░ ░ ░ ░ ▒    ░      `));
console.log(blue(`      ░  ░ ░              ░     ░  ░    ░  ░        ░          ░ ░           `));
console.log(blue(`         ░ ░                                             ░                   `));
console.log(yellow('============================================================================'));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}ping :: Displays your ping=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}purge [100]:: Deletes 100 messages you sent.=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}embed [content] :: Send a message in a embed.=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}restart :: Restarts the bot=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}spam [ID] [content] :: Spam a users DM=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}eval [content] :: Evaluate code=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}typing :: Show typing when ur not  typing=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}stream :: set your status to stream=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}watch ::  set your status to Watching=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}listen :: set your status to Listening=`));
console.log(red(`[COMMAND LIST] :: ${settings.prefix}lol :: Ping user with lol=`));
console.log(yellow('============================================================================'));
bot.on('ready', ()=>{
    console.log(green(`[SELF BOT] :: username:${bot.user.tag}`));
    console.log(green(`[SELF BOT] :: prefix: ${settings.prefix}`));
});

bot.on('message', async(msg)=>{
    if(msg.author.id !== settings.ID) {
        return;
    }
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(settings.prefix.length);
    let args = msg.content.split(" ").slice(1);
    if(msg.content.startsWith(settings.prefix) && msg.author.id === settings.ID){
        console.log(cyan(`[COMMAND RAN] :: ${msg.content}`));
    }

        if(cmd === 'lol'){
        let mention = msg.mentions.users.first();
        if (!mention) return msg.edit("`@ user to lol`").then(message => message.delete(3000));
        msg.edit(mention);
        msg.edit(":joy: " + mention);
        msg.edit(":joy::joy: " + mention);
        msg.edit(":joy::joy::joy: " + mention);
        msg.edit(":joy::joy: " + mention + " :joy:");
        msg.edit(":joy: " + mention + ":joy::joy:");
        msg.edit(mention + " :joy::joy::joy:").then(message => message.delete(3000));
    }

    if(cmd === 'ping'){
        msg.edit(`*${bot.ping.toFixed()}ms*`);
    }
    if(cmd === 'purge'){
        msg.channel.fetchMessages({ limit: 100 }).then(msgs=>msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))
    }
    if(cmd === 'embed'){
        let eContent = args.slice(0).join(" ");
        msg.edit("", { embed: new RichEmbed().setColor(`${settings.color}`).setDescription(eContent).setFooter('Self Bot By: $Y#8300')});
    }
    if(cmd === 'restart'){
        process.exit();
    }

     if(cmd === 'listen'){
        bot.user.setActivity(args.join(" "), {
            url: "https://www.twitch.tv/syrusisthebestcoder",
            type: "LISTENING" 
         });
         msg.delete();
        await msg.channel.send("Changinging Status...").then(message => message.delete(1000));
        await msg.channel.send("`Listening` Created!").then(message => message.delete(2000));
     };

     if(cmd === 'watch'){
        bot.user.setActivity(args.join(" "), {
            url: "https://www.twitch.tv/syrusisthebestcoder",
            type: "WATCHING" 
         });
         msg.delete();
        await msg.channel.send("Changinging Status...").then(message => message.delete(1000));
        await msg.channel.send("`Watching` Created! ").then(message => message.delete(2000));
     };

     if(cmd === 'play'){
        bot.user.setActivity(args.join(" "), {
            url: "https://www.twitch.tv/syrusisthebestcoder",
            type: "PLAYING" 
         });
         msg.delete();
        await msg.channel.send("Changinging Status...").then(message => message.delete(1000));
        await msg.channel.send("`Playing` Created!").then(message => message.delete(2000));
     };

    if(cmd === 'token'){
  
    let user = msg.mentions.users.first() || bot.users.get(args[0])
    if(!user) return msg.channel.send('You forgot to mention a user!')
    let embed = new RichEmbed().setDescription(Buffer.from(user.id).toString("base64"))
    .setColor("#000000")
    msg.channel.send(embed)
}

        if(cmd === 'stop'){
        bot.user.setActivity("");
        msg.delete();
        await msg.channel.send("Status `Stopped`! ").then(message => message.delete(2000));
        };

    if(cmd === 'stream'){
          if (!args[0]) return msg.reply("`Please enter stream name!`").then(message => message.delete(5000));
          if (args.join(" ").length > 100) return msg.reply("`That is too long of a message to set.`").then(message => message.delete(5000));
      //if (args.length < 1) return msg.edit("`Please enter stream name!`").then(message => message.delete(5000));
        bot.user.setActivity(args.join(" "), {
            url: "https://www.twitch.tv/syrusisthebestcoder",
            type: "STREAMING" 
         });
         msg.delete();
        await msg.channel.send("Changinging Status...").then(message => message.delete(1000));
        await msg.channel.send("`Stream` Created! ").then(message => message.delete(2000));
     };

  if(cmd === 'typing'){
  msg.channel.startTyping()
  msg.react("✅")
 }

    if(cmd === 'spam'){
        let user = (args[0]);
        let mContent = args.slice(1).join(" ");
        bot.setInterval(()=>{
            bot.users.get(user).send(mContent);
        }, 1500);
        console.log(red(`[CMD INFOMATION] :: YOU MUST RESTART THE BOT IN ORDER TO STOP THE SPAM`));
    }
    if(cmd === 'eval'){
        let res;
        try{
            res = eval(args.join(" "))
        } catch(e){
            return msg.edit("", { embed: new RichEmbed().setTitle("Results").setColor("#FF0000").setDescription(":desktop: **Input**: ```" + args.join("") + "```:eyes: **Error**: ```" + err + "```").setFooter("Eval") })
        }
        msg.edit("", { embed: new RichEmbed().setTitle("Results").setColor("#46FF00").setDescription(":desktop: **Input**: ```" + args.join("") + "```:white_check_mark: **Output**: ```" + res + "```").setFooter("Eval") })
    }
});

bot.login(settings.token);