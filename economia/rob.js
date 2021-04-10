const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "rob",
    aliases: ["roubar", "roubo", "assalto", "assaltar"],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {



let user = message.mentions.members.first() 

let author = db.fetch(`roubo_${message.guild.id}_${message.author.id}`)
let author2 = db.fetch(`ienes_${message.guild.id}_${message.author.id}`)

let anel = db.get(`gun_${message.guild.id}_${message.author.id}`);
if(!anel) return message.channel.send(`**Você não tem uma Arma, para obter uma use a!buy arma!**`)


  let embd1 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('ASSALTO <:736052240669999135:817942453122105344> 🔫')
  .setDescription(`**<a:money:810207903331647558> Mencione alguém para roubar.**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (!user) {
      return message.channel.send(embd1)
  }



let timeout = 1200000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));
    

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle('ASSALTO <:736052240669999135:817942453122105344> 🔫')
    .setDescription(`**<:1296_FeelsStrongMen:814830121222406184> Você já roubou alguém!\n\nTente em ${time.minutes}m ${time.seconds}s**`)
     .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('ASSALTO <:736052240669999135:817942453122105344> 🔫')
  .setDescription(`**<:1296_FeelsStrongMen:814830121222406184> Você precisa de 200¥ ienes para roubar alguém!**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}

let targetuser = db.fetch(`ienes_${message.guild.id}_${user.id}`)
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
   .setTitle('ASSALTO <:736052240669999135:817942453122105344> 🔫')
  .setDescription(`**<:1296_FeelsStrongMen:814830121222406184> ${user} está com a carteira vazia**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
if (targetuser < 300) {
    return message.channel.send(moneyEmbed2)
}



let vip = await db.fetch(`funcao_${message.guild.id}_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 10000) + 1;
if (vip === null) random = Math.floor(Math.random() * 5000) + 1;

let embed = new Discord.MessageEmbed()
.setTitle('ASSALTO <:736052240669999135:817942453122105344> 🔫')
.setDescription(`**<:4562_pepe_with_gun:814826327345070110> Você roubou ${user} e ganhou ${random}¥ ienes**`)
.setColor("#ff58c3")
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
message.channel.send(embed)

db.subtract(`ienes_${message.guild.id}_${user.id}`, random)
db.add(`ienes_${message.guild.id}_${message.author.id}`, random)
db.set(`roubo_${message.guild.id}_${message.author.id}`, Date.now())
 }
}}