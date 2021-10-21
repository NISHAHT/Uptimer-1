Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS-----const ButtonPages = require('discord-button-pages');


    const embed = new Discord.MessageEmbed()
    .setImage('')
    .setDescription(`**HI I Am Uptimer I Am Here To Uptimr Your Projects So Do +howtouse For More Info Of How To Use Me
> Here Are My Commands**`);

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage('')
    .setTitle('Uptimer Commands')
    .setDescription(`
> <:UPTIMEERGG:897028979041665046> monitor
> <:UPTIMEERGG:897028979041665046> projects
> <:UPTIMEERGG:897028979041665046> remove
> <:UPTIMEERGG:897028979041665046> total
> <:UPTIMEERGG:897028979041665046> stats`)
      ;

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage('')
    .setTitle('  **Info Commands**')
    .setDescription(`
> <a:informationD:886168903934439465> botinfo 
> <a:informationD:886168903934439465> developer
> <a:informationD:886168903934439465> roleinfo 
> <a:informationD:886168903934439465> serverinfo 
> <a:informationD:886168903934439465> howtouse 
> <a:informationD:886168903934439465> userinfo
> <a:informationD:886168903934439465> uptime
> <a:informationD:886168903934439465> invite `)
    ;
    
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------
let button1 = new MessageButton()
    .setLabel(`Uptimer`)
    .setID(`help1`)
    .setEmoji(`897028979041665046`)
    .setStyle("red");
    

     let button2 = new MessageButton()
    .setLabel(`Info`)
    .setID(`help2`)
    .setEmoji(`886168903934439465`)
    .setStyle("red");


   let row = new MessageActionRow()
    .addComponents(button1, button2)

    
    const allrow = (row)
    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, allrow);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

       if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }
  

  
  
    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })


    }
  };