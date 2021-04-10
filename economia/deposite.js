const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "deposite",
    aliases: ["dep", "depositar", "deposita", 'guardar'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {


  let user = message.author; 

  let member = db.fetch(`ienes_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`cofre_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`ienes_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`cofre_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setTitle("ANGELICAL'S COFRE <:736052240669999135:817942453122105344> <a:Safes81889:815316180155629610>")
    .setDescription("**<a:pepe_chorando:814787504435625994> Você não tem dinheiro \npara depositar :(**")
    .setThumbnail('http://post.asgardproject.com.br/RDQH4T/02-pulp-fiction-john-travolta-perdido-na-carteira.gif')
     .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

    if(money === 0) return message.channel.send(embedbank)

    db.add(`cofre_${message.guild.id}_${user.id}`, money)
    db.subtract(`ienes_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle("ANGELICAL'S COFRE <:736052240669999135:817942453122105344> <a:Safes81889:815316180155629610>")
  .setDescription(`**<a:rs_verific_TKG:817950424762023957> Você guardou seus ienes no cofre com sucesso!**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle("ANGELICAL'S COFRE <:736052240669999135:817942453122105344> <a:Safes81889:815316180155629610>")
  .setDescription(`**<:what:814791922228527104> Ué?, Quanto você quer depositar?**`)
  .setFooter("KK, gente nóia・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle("ANGELICAL'S COFRE <:736052240669999135:817942453122105344> <a:Safes81889:815316180155629610>")
  .setDescription(`**<:Fodase1:814792440405164034> Você não pode depositar ienes negativos**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle("ANGELICAL'S COFRE <:736052240669999135:817942453122105344> <a:Safes81889:815316180155629610>")
  .setDescription(`**<:Fodase1:814792440405164034> Você não tem essa quantia :/**\n\n __SEU POBRE AHAHHAHAH__`)
  .setFooter('Dsclp kk, use a!work, a!pedir ou a!daily para ganhar mais ienes.')
  .setThumbnail('https://media.tenor.com/images/2794572ebabbb26fd7407f810b513ae7/tenor.gif')

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle("ANGELICAL'S COFRE <:736052240669999135:817942453122105344> <a:Safes81889:815316180155629610>")
  .setDescription(`**<a:rs_verific_TKG:817950424762023957> Você depositou ${args[0]}¥ ienes no cofre.**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  message.channel.send(embed5)
  db.add(`cofre_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`ienes_${message.guild.id}_${user.id}`, args[0])
  }
}}