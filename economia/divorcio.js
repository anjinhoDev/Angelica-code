const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "separar",
  aliases: ["divorcio", 'divórcio', "Divorciar", "divórcio", "separa", "divorciar", "divorce"],
  description : 'Mata o player e muta ele da call.',
  timeout: 1000,
  run: async (client, message, args) => {


let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let falabad = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<:what:814791922228527104> Você quer se divorciar...\n hmm? do Vento?.**`)
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  if (!user) return message.channel.send(falabad);

    let potato = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<:what:814791922228527104> Você quer se divorciar...\n hmm? De Você?**`)
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   if (user == message.member) return message.reply(potato);

let bot = "791286945896202250"

    let potata = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<:what:814791922228527104> Você quer se divorciar de mim? Desculpe,\n eu nunca casaria com você.**`)
.setThumbnail('https://media0.giphy.com/media/lgBQpM00TB8n6/source.gif')
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   if (user == bot) return message.reply(potata);

  const embed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
  .setDescription(`**${user}\nO usuário ${message.author.tag} se divorciou de você!**`)
  .setThumbnail("https://gifman.net/wp-content/uploads/2019/06/coracao-partido-02.gif")
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   message.channel.send(embed)

     const ebed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
  .setDescription(`**${user}\nO usuário ${message.author.tag} se divorciou de você! Infelizmente alguns casamento não são eternos...**`)
  .setThumbnail("https://gifman.net/wp-content/uploads/2019/06/coracao-partido-02.gif")
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   user.send(ebed)

   db.delete(`marry_${user.id}`, message.author.username)
   db.delete(`marry_${message.author.id}`, user.user.username)

  
  
}}