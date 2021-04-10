const Discord = require("discord.js");
const ms = require("parse-ms")
const db = require('quick.db')

module.exports = {
    name: "capturar",
    aliases: ["pegar", "catch", "cap", 'armar'],
    description: "sim",
    timeout: 1000,
  run: async (client, message, args) => {

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

  let user = message.author;
  let timeout = 60000;
  let fish = 
    ["Megumim", 
    "Mikasa", 
    "Zero Two",
    "Nezuko",
    "Hinata",
    "Asuna",
    "Hatsune Miku",
    "Yumeko Jabami",
    "Kaguya Shinomiya",
    "Kanna Kamui",
    "Raphtalia",
    "Shiro",
    //"Duck :duck:",
    "Sasha Braus"];

  let randn = rand(0, parseInt(fish.length));
  let randrod = rand(15, 30);

  let fishToWin = fish[randn];


  let fishdb = db.fetch(`waifus_${message.guild.id}_${user.id}`);
  let rod = db.get(`isca_${message.guild.id}_${user.id}`);
  let rodusage = db.get(`iscavelha_${message.guild.id}_${user.id}`);
  let wait = db.fetch(`calma_${message.guild.id}_${user.id}`);

   
  if(!rod) return message.channel.send(`**Você não tem uma *Isca de Waifus*, mas pode comprar outra**!`);

 if(rodusage) {
   if(fishdb.rodusage >= randrod) {
     db.delete(`isca_${message.guild.id}_${user.id}`);
         let bid = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle("POBRES WAIFUS <:736052240669999135:817942453122105344> <a:loli_cry:791825027242262568>")
    .setDescription(`**Sua Isca para waifus quebrou! Compre outra com a!buy isca**`)
    .setFooter("・ Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
     return message.reply(bid)
   }
 }

  

  if (wait !== null && timeout - (Date.now() - wait) > 0) {
    let time = ms(timeout - (Date.now() - wait));
  
    db.set(`calma_${message.guild.id}_${user.id}`, Date.now());
    let bad = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setDescription(`**<a:grr:814801366153297950> Você já armou uma isca!\nColoca outra em ${time.seconds}s**`)
    .setFooter("・ Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(bad);

  } else {

    let bod = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle("POBRES WAIFUS <:736052240669999135:817942453122105344> <a:loli_cry:791825027242262568>")
    .setThumbnail('https://media1.tenor.com/images/ddceeb54657eeafa342c89384d64e935/tenor.gif?itemid=9622554')
    .setDescription(`**<a:devilgirl:810266778454196284> Você capturou a *${fishToWin}***`)
    .setFooter("・ Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(bod);

db.add(`waifus_${message.guild.id}_${user.id}`, 1);
db.set(`calma_${message.guild.id}${user.id}`, Date.now());
db.subtract(`isca_${message.guild.id}_${user.id}`, 1);

    }
	}
}
