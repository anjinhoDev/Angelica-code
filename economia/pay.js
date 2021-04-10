const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "pay",
    aliases: ["pagar", "pay", 'pago', 'pague'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {
 
 

  let user = message.mentions.members.first() 

  let member = db.fetch(`ienes_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> 💳')
  .setDescription(`**<a:money:810207903331647558> Mencione alguém para pagar.**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> 💳')
  .setDescription(`**<a:money:810207903331647558> Especifique uma quantidade para pagar.**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> 💳')
  .setDescription(`**<a:grr:814801366153297950> Você não pode pagar dinheiro negativo!**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> 💳')
  .setDescription(`**<a:hmm:814827394594635776> Você não tem muito dinheiro :/**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

const embed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> 💳')
  .setDescription(`**${message.author.tag}, Você quer dar ${args[1]}¥ ienes\n para ${user}, tem certeza?!**`)
  .setThumbnail("https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/07/19084930/metodos-pagamento-vivo-tech.gif")
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
message.channel.send(embed).then(msg => {
  msg.react('814788509046276126').then(() => {
  })
  
  let filtro = (reaction, usuario) => reaction.emoji.name === 'Discord_Verified' && usuario.id === message.author.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id)
    r.remove(user.id)

  let embed5 = new Discord.MessageEmbed()
  .setColor("#ff58c3")
    .setTitle('PAGAMENTO <:736052240669999135:817942453122105344> 💳')
  .setDescription(`**<a:rs_verific_TKG:817950424762023957> Você pagou ${user.user.username} com ${args[1]}¥ ienes**`)
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  message.channel.send(embed5)
  db.add(`ienes_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`ienes_${message.guild.id}_${message.author.id}`, args[1])
  msg.delete()
  })

})
}}









