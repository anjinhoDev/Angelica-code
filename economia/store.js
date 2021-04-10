const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "store",
    aliases: ["loja", "lojinha", 'lojin'],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {
 

        const member = message.member
        let embed = new Discord.MessageEmbed()
            .setColor("#ff58c3")
            .setTitle(`LOJINHA <:736052240669999135:817942453122105344> <:imagem_20210302_135302removebgpr:816367919168618526>`)
            .setDescription(`**__Bem vindo(a) ${member} a Lojinha da angelical!__**\n**Abaixo deixarei algumas informações sobre nossas categorias de itens:**\n\n*Clique em <:a_:817946708767408168> para ver a prateleira de itens sagrados.\nClique em <:b_:817946771912523798> para ver os itens utilitários.\nClique em <:c_:817946820356472862> para ver as funções disponíveis para comprar.\nClique em <:d_:817946874468106241> para ver os perfis disponíveis para comprar.\nClique em <:dp_PixelBow:817946997641445427> para ver essa mensagem novamente.*`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setURL(`https://sites.google.com/view/angelical-suporte/p%C3%A1gina-inicial`)
            .setFooter(`Clique no título para acessar o site de suporte.`)  
        message.channel.send(message.author, embed).then(msg => { //quando enviar a mensagem...
            msg.react(`817946997641445427`).then(() => { //quando reagir o primeiro emoji...
            msg.react(`817946708767408168`);
            msg.react(`817946771912523798`);
            msg.react(`817946820356472862`);
            msg.react(`817946874468106241`);
            })


            const info = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `dp_PixelBow` && user.id == message.author.id, {time: 60000})

            const diversao = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `a_` && user.id == message.author.id, {time: 60000}) 

            const fun = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `b_` && user.id == message.author.id, {time: 60000}) 

            const musica = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `c_` && user.id == message.author.id, {time: 60000}) 

            const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `d_` && user.id == message.author.id, {time: 60000})



           info.on(`collect`, r =>{  
                let emtwo = new Discord.MessageEmbed()
        .setColor("#ff58c3")
            .setTitle(`LOJINHA <:736052240669999135:817942453122105344> <:imagem_20210302_135302removebgpr:816367919168618526>`)
  .setDescription(`**__Bem vindo(a) ${member} a Lojinha da angelical!__**\n**Abaixo deixarei algumas informações sobre nossas categorias de itens:**\n\n*Clique em <:1_:814809424564584468> para ver a prateleira de itens sagrados.\nClique em <:2_:814809667859382272> para ver os itens utilitários.\nClique em <:3_:814810419779993610> para ver as funções disponíveis para comprar.\nClique em <:4_:814811773228154922> para ver os perfis disponíveis para comprar.\nClique em <:FormUTD:817357045463252992> para ver essa mensagem novamente.*`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setURL(`https://sites.google.com/view/angelical-suporte/p%C3%A1gina-inicial`)
            .setFooter(`Clique no título para acessar o site de suporte.`)  
                msg.edit(emtwo)
        r.users.remove(message.author.id) 
            })

            diversao.on(`collect`, r =>{  
                let embed_two = new Discord.MessageEmbed()
                .setColor("#ff58c3")
                    .setTitle('LOJINHA <:736052240669999135:817942453122105344> <:imagem_20210302_135302removebgpr:816367919168618526>')
                        .setThumbnail('https://cf.shopee.com.br/file/6fc5d8a2782deb64b7245b097ce81b4a')
                    .setDescription(`**Itens Sagrados**\n*Waifus: 3.000¥ ienes [#buy waifu <valor>]\nAnimes: 2.000¥ ienes [#buy animes <valor>]\nMangá: 1.000¥ ienes [#buy mangá <valor>]*`)
                msg.edit(embed_two)
        r.users.remove(message.author.id) 
            })

            fun.on(`collect`, r =>{  
                let embd_two = new Discord.MessageEmbed()
                .setColor("#ff58c3")
                    .setTitle('LOJINHA <:736052240669999135:817942453122105344> <:imagem_20210302_135302removebgpr:816367919168618526>')
                        .setThumbnail('https://cf.shopee.com.br/file/6fc5d8a2782deb64b7245b097ce81b4a')
                    .setDescription('**Utilitários:**\n*Anel De Noivado:100**₪** mangás [#buy anel]\nArma:50**₪** mangás [#buy arma]\nIsca: 2**₪** mangás [#buy isca]\nCarteira De Trabalho: 10**₪** mangás [#buy carteira]*')
                msg.edit(embd_two)
        r.users.remove(message.author.id)
            })


            musica.on(`collect`, r =>{ 
                let embed_three = new Discord.MessageEmbed()
                .setColor("#ff58c3")
                    .setTitle('LOJINHA <:736052240669999135:817942453122105344> <:imagem_20210302_135302removebgpr:816367919168618526>')
                        .setThumbnail('https://cf.shopee.com.br/file/6fc5d8a2782deb64b7245b097ce81b4a')
                    .setDescription('**Funções**\n*Amador: 5000₦ animes [#buy amador]\nShinigami: 250₦ animes [#buy shinigami]\nSaiyajin: 200₦ animes [#buy saiyajin]\nNinja: 150₦ animes [#buy ninja]\nHerói: 100₦ animes [#buy herói]\nHashira: 50₦ animes [#buy hashira]*')
                msg.edit(embed_three)
        r.users.remove(message.author.id) 
            })


            voltar.on(`collect`, r =>{ 
                let embed_five = new Discord.MessageEmbed()
        .setColor("#ff58c3")
            .setTitle('LOJINHA <:736052240669999135:817942453122105344> <:imagem_20210302_135302removebgpr:816367919168618526>')
            .setDescription('**Perfis:**\n*Angelical: 50₩ waifus [#buy perfilangelical]\nHashira: 100₩ waifus [#buy perfilhashira]\nNinja: 200₩ waifus [#buy perfilninja]\nHerói: 300₩ waifus [#buy perfilherói]\nSaiyajin: 400₩ waifus [#buy perfilsaiyajin]\nShinigami: 500₩ waifus [#buy perfilshinigami]\nAmador: 1.000₩ waifus [#buy perfilamador]*')
            .setImage('https://i.imgur.com/5pwrGXx.png')
        msg.edit(embed_five)
        r.users.remove(message.author.id)
            })
        })
    }}
