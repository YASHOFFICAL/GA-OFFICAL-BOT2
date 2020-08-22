var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "/" //The text before commands, you can put anything that you prefer

    if(message.author.id != "704620271553740823" && message.channel.id === "741901544537980978"){
        if(msg.startsWith('/', 0)){
            if(msg === prefix + "HI" && message.channel.id === "741901544537980978"){
                message.channel.send('HELLO') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >HI right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '/' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
