const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "bal",
    aliases: ["atm", 'balance', "money", "bolso", "saldo", "carteira", "wallet", "banco", "ienes"],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args, utils) => {  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`ienes_${message.guild.id}_${user.id}`)
  if (bal === null) bal = 0;

  let bank = await db.fetch(`cofre_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let dolar = ("https://i.imgur.com/PAjzSI8.gif")
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#ff58c3")
  .setThumbnail('https://cdn1.iconfinder.com/data/icons/money-stuff-colored/64/07-512.png')
  .setTitle('ECONOMIA ANGELICAL <:736052240669999135:817942453122105344> 💰')
  .setDescription(`**__Saldo de ${user}__.**\n\n<:dollarmoney:814776832779354132> <:D_SetaRosaTKF:817942770119475240> ***Carteira: ${bal}¥***\n<a:Safes81889:815316180155629610> <:D_SetaRosaTKF:817942770119475240> ***Angelical's Cofre: ${bank}¥***`)
  .setFooter("Ei, Não mexa na minha carteira・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

  message.channel.send(moneyEmbed)
  

}};

