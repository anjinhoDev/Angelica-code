const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "venda",
    aliases: ["vender", "sell", 'vend', 'venda'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {


    
    let user = message.author;

    if(args[0] == 'waifu') {

                  let emb34567 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('NEGOCIAÇÃO NEGADA <:736052240669999135:817942453122105344> ❌')
        .setDescription(`**Você precisa escrever quantas waifus\n quer vender, exemplo: a!vender waifu 100**`)
         .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

      if (!args[1]) return message.reply(emb34567)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`**<a:pepe_chorando:814787504435625994> <:736052240669999135:817942453122105344> Você não tem waifus para vender.**`)
               .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))


        let nikeses = await db.fetch(`waifus_${message.guild.id}_${user.id}`)

        if (nikeses < (args[1])) return message.channel.send(Embed2)
       
        db.fetch(`waifus_${message.guild.id}_${user.id}`)
        db.subtract(`waifus_${message.guild.id}_${user.id}`, (args[1]))

        
         let mama1 = (args[1])

         let mama = mama1 * 2600

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`**<:r_rosa_oclin_STV:815219643001077771>  <:736052240669999135:817942453122105344> Você vendeu sua waifu por ${mama}¥ ienes**`)
         .setFooter(`Você vendeu ${args[1]} waifu(s)・Angelical's Commands`, message.author.displayAvatarURL({format: "png"}))

        db.add(`ienes_${message.guild.id}_${user.id}`, mama)
        message.channel.send(Embed3)
    } else if(args[0] == 'anime') {

       let emb3467 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('NEGOCIAÇÃO NEGADA <:736052240669999135:817942453122105344> ❌')
        .setDescription(`**Você precisa escrever quantos animes\n quer vender, exemplo: a!vender anime 100**`)
         .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

      if (!args[1]) return message.reply(emb3467)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`**<a:pepe_chorando:814787504435625994> <:736052240669999135:817942453122105344> Você não tem animes para vender.**`)
               .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  
       let cars = await db.fetch(`animes_${message.guild.id}_${user.id}`)

        if (cars < (args[1])) return message.channel.send(Embed2)
       
        db.fetch(`animes_${message.guild.id}_${user.id}`)
        db.subtract(`animes_${message.guild.id}_${user.id}`, (args[1]))

         let mma1 = (args[1])

         let mma = mma1 * 1800

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`**<a:pandalove:815284298667524107> <:736052240669999135:817942453122105344> Você vendeu seu anime por ${mma}¥ ienes**`)
         .setFooter(`Você vendeu ${args[1]} anime(s)・Angelical's Commands`, message.author.displayAvatarURL({format: "png"}))


        db.add(`ienes_${message.guild.id}_${user.id}`, mma)
        message.channel.send(Embed3)
    } else if(args[0] == 'mangá') {

             let emb347 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('NEGOCIAÇÃO NEGADA <:736052240669999135:817942453122105344> ❌')
        .setDescription(`**Você precisa escrever quantos animes\n quer vender, exemplo: a!vender anime 100**`)
         .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))

      if (!args[1]) return message.reply(emb347)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`**<a:pepe_chorando:814787504435625994> <:736052240669999135:817942453122105344> Você não tem mangás para vender.**`)
               .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  

        let houses = await db.fetch(`mangas_${message.guild.id}_${user.id}`)

        if (houses < (args[1])) return message.channel.send(Embed2)
       
        db.fetch(`mangas_${message.guild.id}_${user.id}`)
        db.subtract(`mangas_${message.guild.id}_${user.id}`, (args[1]))

        let mm1 = (args[1])

         let mm = mm1 * 800

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`**📓 <:736052240669999135:817942453122105344> Você vendeu seu mangá por ${mm}¥ ienes**`)
         .setFooter(`Você vendeu ${args[1]} mangá(s)・Angelical's Commands`, message.author.displayAvatarURL({format: "png"}))
   

        db.add(`ienes_${message.guild.id}_${user.id}`, mm)
        message.channel.send(Embed3)
    };

}}