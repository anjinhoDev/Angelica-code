const slotItems = ["<:rem_grr:816798994763743283>", "<:niko:816790373996953650>", "<a:aganiScary:816355046899187713>", "<a:wow:816798831290613760>", "<:r_rosa_oclin_STV:815219643001077771>", "<:marro_ac_misaka_noo:803047674810335233>", "<:rs_zerotwo_coracao_TKG:816794754062352404>"];
const db = require("quick.db");
const Discord = require('discord.js');
const ms = require("parse-ms");

module.exports = {
    name: "slots",
    aliases: ["waifuflip", "feira", 'feirinha', 'girarwaifu'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {

 


    let user = message.author;
    let moneydb = await db.fetch(`ienes_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

  let timeout = 4000;
  let daily = await db.fetch(`waiflip_${message.guild.id}_${user.id}`);

    let moneymore = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setDescription(`<a:hmm:814827394594635776> **Você está apostando mais do que tem!**`)
     .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#ff58c3")
    .setDescription(`<a:hmm:814827394594635776> **Ué, quanto você quer apostar?**`)
     .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);






    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 3
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 1.5
        win = true;

    }   if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
     let bad = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**Mensagem Anti-Spam!<a:grr:814801366153297950>\n Espere 4s**`)
    .setFooter("・ Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(bad)
    } else if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
        .setTitle('FEIRA DE WAIFUS <:736052240669999135:817942453122105344> <a:CO_HAPPY:816433656927223889>')
            .setDescription(`${slotItems[number[0]]} <:D_SetaRosaTKF:817942770119475240> ${slotItems[number[1]]} <:D_SetaRosaTKF:817942770119475240> ${slotItems[number[2]]}\n\n**Você ganhou ${money}¥ ienes na feira de waifus**`)
            .setThumbnail('https://thumbs.gfycat.com/AffectionateCheapFeline-small.gif')
              .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
            .setColor("#ff58c3")
        message.channel.send(slotsEmbed1)

db.add(`ienes_${message.guild.id}_${message.author.id}`, money)
    } else {
      money *= 1.2
        let slotsEmbed = new Discord.MessageEmbed()
          .setTitle('FEIRA DE WAIFUS <:736052240669999135:817942453122105344> <a:tristezaprofunda:794955574693068850>')
            .setDescription(`${slotItems[number[0]]} <:D_SetaRosaTKF:817942770119475240> ${slotItems[number[1]]} <:D_SetaRosaTKF:817942770119475240> ${slotItems[number[2]]}\n\n**Você perdeu ${money}¥ ienes na feira de waifus**`)
            .setThumbnail('https://i.pinimg.com/originals/fa/52/67/fa5267cece9d0eb4783e035ad04d9d66.gif')
            .setColor("#ff58c3")
             .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(slotsEmbed)
        db.subtract(`ienes_${message.guild.id}_${user.id}`, money)
    }
     db.set(`waiflip_${message.guild.id}_${user.id}`, Date.now())

}}
  