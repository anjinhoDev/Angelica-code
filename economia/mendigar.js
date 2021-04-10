  
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "mendigar",
    aliases: ["pedir", "implorar", "mendigar"],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {


  let user = message.author;

  let timeout = 180000;
  let amount = 400;

  let beg = await db.fetch(`pedir_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle('HORA DA MENDIGAGEM <:736052240669999135:817942453122105344> 🙏')
    .setDescription(`<:Fodase1:814792440405164034> Você já mendigou recentemente\n\nVolte em ${time.minutes}m ${time.seconds}s `)
     .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('HORA DA MENDIGAGEM <:736052240669999135:817942453122105344> 🙏')
  .setDescription(`**<:1296_FeelsStrongMen:814830121222406184> Você implorou e consegui ${amount}¥ ienes.**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  message.channel.send(moneyEmbed)
  db.add(`ienes_${message.guild.id}_${user.id}`, amount)
  db.set(`pedir_${message.guild.id}_${user.id}`, Date.now())


  }
}}