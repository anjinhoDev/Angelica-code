const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "casamento",
  aliases: ["marry", 'casar', "case", "marr", "namorar"],
  description : 'Mata o player e muta ele da call.',
  timeout: 1000,
  run: async (client, message, args) => {






  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);




let falabad = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<:what:814791922228527104> Você quer se casar...\n hmm? Com o Vento?.**`)
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  if (!user) return message.channel.send(falabad);


    let potato = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<:what:814791922228527104> Você quer se casar...\n hmm? Com o Você? kkk autoestima é tudo.**`)
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   if (user == message.member) return message.reply(potato);

let bot = "791286945896202250"

    let potata = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<:what:814791922228527104> Você quer se casar Comigo? Desculpe,\n eu só tenho olhos pro Among Clips.**`)
.setThumbnail('https://media0.giphy.com/media/lgBQpM00TB8n6/source.gif')
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   if (user == bot) return message.reply(potata);

   let pika = db.fetch(`marry_${user.id}`)
   let hm = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<a:tristezaprofunda:794955574693068850> Esse carinha já está casado :/**`)
.setThumbnail('https://physiopilates.com/wp-content/uploads/2019/08/blog-pilates_e_depressao_sera_que_essa_combinacao_esta-certa-1024x768.jpg')
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   if (pika) return message.reply(hm)

     let pikua = db.fetch(`marry_${message.author.id}`)
   let hmu = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<a:grr:814801366153297950> Você já está casado :/**`)
.setThumbnail('https://physiopilates.com/wp-content/uploads/2019/08/blog-pilates_e_depressao_sera_que_essa_combinacao_esta-certa-1024x768.jpg')
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   if (pikua) return message.reply(hmu)


let anel = db.get(`anel_${message.guild.id}_${message.author.id}`);
if(!anel) return message.channel.send(`**Você não tem um Anel de noivado, use a!buy anel para obter um 💍**`)

  const embed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
  .setDescription(`**${user}\nO usuário ${message.author.tag} quer\n casar com você, aceitas?!**`)
  .setThumbnail("https://media1.giphy.com/media/da7ZYumuyTEnl6Vl2n/giphy.gif")
   .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   message.channel.send(embed).then(msg => {
  msg.react('814788509046276126');

  let filtro = (reaction, usuario) => reaction.emoji.name === 'Discord_Verified' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id);
let aceitar = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('CASAMENTO <:736052240669999135:817942453122105344> 👰‍')
.setDescription(`**<a:CO_HAPPY:816433656927223889> *FELICIDADES!!!*\n ${user} e ${message.author} estão casados.**`)
.setThumbnail("https://thumbs.gfycat.com/ColdDismalAngelwingmussel-size_restricted.gif")
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
 message.channel.send(aceitar)
db.set(`marry_${user.id}`, message.author.username)
db.set(`marry_${message.author.id}`, user.user.username)
let ring = db.delete(`anel_${message.author.id}`, 1)
   })



  })
  
}}