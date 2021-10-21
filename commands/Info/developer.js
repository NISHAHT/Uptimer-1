const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("My Developer")
      
      .addField(
        "About Me:",
        "I Ma Developed By Developers Zone",
      )
      .setThumbnail("")
      .setFooter("Make sure to show your support by subbing to my youtube(linked below)! If you have any questions about the bot, join support server linked below or send me a DM at ! The Crazy#0070")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite!') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=876098640169558078&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL("https://discord.gg/bYhPsQyRE3");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Youtube Channel') 
      .setURL("https://www.youtube.com/DevelopersZone");



      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */