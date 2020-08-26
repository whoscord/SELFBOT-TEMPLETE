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

//make command here
    
})

bot.login(settings.token);
