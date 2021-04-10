const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "paywaifu",
    aliases: ["pagarwaifu", "paywaifu", 'pagowaifu', 'paguewaifu'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {


  let user = message.mentions.members.first() 

  let member = db.fetch(`waifus_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> <:r_rosa_oclin_STV:815219643001077771>')
  .setDescription(`**<a:money:810207903331647558> Mencione alguém para pagar.**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> <:r_rosa_oclin_STV:815219643001077771>')
  .setDescription(`**<a:money:810207903331647558> Especifique uma quantidade de waifus para pagar.**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> <:r_rosa_oclin_STV:815219643001077771>')
  .setDescription(`**<a:grr:814801366153297950> Você não pode pagar waifus negativas!**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> <:r_rosa_oclin_STV:815219643001077771>')
  .setDescription(`**<a:hmm:814827394594635776> Você não tem essas waifus :/**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> <:r_rosa_oclin_STV:815219643001077771>')
  .setDescription(`**<a:rs_verific_TKG:817950424762023957> Você pagou ${user.user.username} com ${args[1]} waifus**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  message.channel.send(embed5)
  db.add(`waifus_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`waifus_${message.guild.id}_${message.author.id}`, args[1])

}}