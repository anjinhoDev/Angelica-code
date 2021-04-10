const Discord = require('discord.js')
const db = require('quick.db')
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "líderlocal",
    aliases: ["ranklocal", "rankinglocal", "toplocal"],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setDescription(`**TOP 10 RANKS de ${message.guild.name}  <:736052240669999135:817942453122105344> <a:Diamante:814778058556309534> **\n\n**a!RankLocal Ienes\na!RankLocal Waifus\na!RankLocal Animes\na!RankLocal Mangá**`)
   .setFooter("Escreva tudo em minúsculos ・ Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
   .setThumbnail('https://network.grupoabril.com.br/wp-content/uploads/sites/4/2019/06/seis-universidades-brasileiras-caem-de-posic3a7c3a3o-no-ranking-de-melhores-do-mundo-facebook.png')
    .setColor("#ff58c3")
   if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'ienes') { 
    
             let money = db.all().filter(data => data.ID.startsWith(`ienes_${message.guild.id}`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("#ff58c3")
                .setFooter("Não tem nada aqui!")
            return message.channel.send(noEmbed)
        };
        
        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            let user = bot.users.cache.get(money[i].ID.split('_')[2]).username
            finalLb += `**${money.indexOf(money[i]) + 1}. ${bot.users.cache.get(money[i].ID.split('_')[1]) ? bot.users.cache.get(money[i].ID.split('_')[1]).tag : `${user}`}** - ${money[i].data}\n`;
        };
      let bal = db.fetch(`ienes_${message.guild.id}_${message.author.id}`)
       if(bal === null) bal = '0'
        const embed = new MessageEmbed()
            .setTitle(`**<:vipouro2:814807164366749747> <:736052240669999135:817942453122105344> __*${message.guild.name}* | TOP.10 IENES __**`)
            .setColor("#ff58c3")
            .setDescription(finalLb)
            .setFooter(`Seus Ienes: ${bal} | Aposte ou Trabalhe para subir.!`, bot.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);

  } else if(args[0] == 'waifus') { 
 
             let waifu = db.all().filter(data => data.ID.startsWith(`waifus_${message.guild.id}`)).sort((a, b) => b.data - a.data);
        if (!waifu.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("#ff58c3")
                .setFooter("Não tem nada aqui!")
            return message.channel.send(noEmbed)
        };
        
        waifu.length = 10;
        var bakaLb = "";
        for (var i in waifu) {
            if (waifu[i].data === null) waifu[i].data = 0
            let user = bot.users.cache.get(waifu[i].ID.split('_')[2]).username
            bakaLb += `**${waifu.indexOf(waifu[i]) + 1}. ${bot.users.cache.get(waifu[i].ID.split('_')[1]) ? bot.users.cache.get(waifu[i].ID.split('_')[1]).tag : `${user}`}** - ${waifu[i].data}\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`**<:vipouro2:814807164366749747> <:736052240669999135:817942453122105344> __*${message.guild.name}* | TOP.10 WAIFUS__**`)
            .setColor("#ff58c3")
            .setDescription(bakaLb)
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);
  } else if(args[0] == 'animes') {
                let anime = db.all().filter(data => data.ID.startsWith(`animes_`)).sort((a, b) => b.data - a.data);
        if (!anime.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("#ff58c3")
                .setFooter("Não tem nada aqui!")
            return message.channel.send(noEmbed)
        };
        
        anime.length = 10;
        var pikaLb = "";
        for (var i in anime) {
            if (anime[i].data === null) anime[i].data = 0
            let user = bot.users.cache.get(anime[i].ID.split('_')[2]).username
            pikaLb += `**${anime.indexOf(anime[i]) + 1}. ${bot.users.cache.get(anime[i].ID.split('_')[1]) ? bot.users.cache.get(anime[i].ID.split('_')[1]).tag : `${user}`}** - ${anime[i].data}\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`**<:vipouro2:814807164366749747> <:736052240669999135:817942453122105344> __*${message.guild.name}* | TOP.10 ANIMES__**`)
            .setColor("#ff58c3")
            .setDescription(pikaLb)
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);
  } else if(args[0] == 'mangá') {
                 let mang = db.all().filter(data => data.ID.startsWith(`mangas_${message.guild.id}`)).sort((a, b) => b.data - a.data);
        if (!mang.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("#ff58c3")
                .setFooter("Não tem nada aqui!")
            return message.channel.send(noEmbed)
        };
        
        mang.length = 10;
        var ukaLb = "";
        for (var i in mang) {
            if (mang[i].data === null) mang[i].data = 0
            let user = bot.users.cache.get(mang[i].ID.split('_')[2]).username
            ukaLb += `**${mang.indexOf(mang[i]) + 1}. ${bot.users.cache.get(mang[i].ID.split('_')[1]) ? bot.users.cache.get(mang[i].ID.split('_')[1]).tag : `${user}`}** - ${mang[i].data}\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`**<:vipouro2:814807164366749747> <:736052240669999135:817942453122105344> __*${message.guild.name}* | TOP.10 MANGÁS__**`)
            .setColor("#ff58c3")
            .setDescription(ukaLb)
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);
  }

}}

