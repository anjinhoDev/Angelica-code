const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "sacar",
    aliases: ["saque", "retirar", 'withdraw'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {

 

  let user = message.author; 

  let member = db.fetch(`ienes_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`cofre_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`cofre_${message.guild.id}_${user.id}`)

    db.subtract(`cofre_${message.guild.id}_${user.id}`, money)
    db.add(`ienes_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('AGUARDE... ')
  .setDescription(`**<a:carregando:810195017921724426> Imprimindo nota fiscal..\n\n<a:rs_verific_TKG:817950424762023957> Você sacou todas os ienes de seu cofre**`)
  .setThumbnail('https://media4.giphy.com/media/duKur2tdrsviJa03vk/giphy.gif')
  .setFooter("Shhh, cuidado com os ladrões!・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setDescription(`**<:what:814791922228527104> KK ué?, quanto você quer sacar?**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('TENTATIVA DE SAQUE <:736052240669999135:817942453122105344> ❌')
  .setDescription(`<a:grr:814801366153297950> **Você não pode sacar dinheiro negativo.**`)
  .setThumbnail("https://media.tenor.com/images/e5351e4fc67ebdf3ed1e598ae24ef3b8/tenor.gif")
  .setFooter("SEU LIXO・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('TENTATIVA DE SAQUE <:736052240669999135:817942453122105344> ❌')
  .setDescription(`<a:pepe_chorando:814787504435625994> **Você não tem essa quantia no cofre :(**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('AGUARDE... ')
  .setDescription(`**<a:carregando:810195017921724426> Imprimindo nota fiscal..\n\n <a:rs_verific_TKG:817950424762023957> Você sacou ${args[0]}¥ ienes do cofre**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  message.channel.send(embed5)
  db.subtract(`cofre_${message.guild.id}_${user.id}`, args[0])
  db.add(`ienes_${message.guild.id}_${user.id}`, args[0])
  }
}}