const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "c*",
    aliases: "vida",
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {

  let user = message.author;

  function isOdd(num) { 
	if ((num % 100) == 0) return false;
	else if ((num % 1.5) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`ienes_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 30);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('A VIDA OU O CU <:736052240669999135:817942453122105344> <:blazeputasso:816144731087699968>')
.setDescription(`**<:what:814791922228527104> Digite assim: a!c* apostar <valor>**`)
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

let moneymore = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setDescription(`**<a:grr:814801366153297950> Você acha que eu sou burra?,\n não aposte coisas que você não tem!**`)
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

let colorbad = new Discord.MessageEmbed()
.setColor("#ff58c3")
.setTitle('A VIDA OU O CU <:736052240669999135:817942453122105344> <:blazeputasso:816144731087699968>')
.setDescription(`**<:what:814791922228527104> Digite assim: a!c* apostar <valor>**`)
 .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
   
    if (colour == "r" || colour.includes("apostar")) colour = 1;
    else return message.channel.send(colorbad);
    
    
   
       if (isOdd(random) && colour == 1) {
        money = parseInt(money * 2)
        db.add(`ienes_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('A VIDA OU O C* <:736052240669999135:817942453122105344> <:blazeputasso:816144731087699968>')
        .setDescription(`**<:what:814791922228527104> ${message.author}, você apostou\n seu c* e ganhou ${money}¥ ienes.**`)
        .setThumbnail('https://cdn.dicionariopopular.com/imagens/pai-de-familia-sucodelaranja.jpg')
         .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(moneyEmbed2)
    } else { // Wrong
       money * 2
        db.subtract(`ienes_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('A VIDA OU O C* <:736052240669999135:817942453122105344> <:blazeputasso:816144731087699968>')
        .setDescription(`**<:what:814791922228527104> ${message.author}, você apostou\n sua vida e perdeu ${money}¥ ienes**`)
        .setThumbnail('https://www.mpbordados.com.br/App_Controls/ProdImg.ashx?d=4&p=4577')
         .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(moneyEmbed4)
    }

 
}}



