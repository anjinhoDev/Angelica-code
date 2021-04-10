const Canvas = require('canvas');
const Discord = require("discord.js");
const db = require("quick.db");
const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
const ms = require("parse-ms");

module.exports = {
    name: "perfil",
    aliases: ["perf", "profile", "prof", "xp"],
    description: "sim",
    timeout: 1000,
  run: async (bot, message, args) => {
  
   const user = message.mentions.members.last() || message.member;

  let money = await db.fetch(`ienes_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`cofre_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip1 = await db.fetch(`funcao_${message.guild.id}_${user.id}`)
    if(vip1 === null) vip1 = 'Nenhuma'

  let ma = await db.fetch(`marry_${user.id}`)
  if(ma === null) ma = 'ninguém'

  let asas = await db.fetch(`waifus_${message.guild.id}_${user.id}`)
  if(asas === null) asas = '0'

  let harpa = await db.fetch(`animes_${message.guild.id}_${user.id}`)
  if(harpa === null) harpa = '0'

  let yes = await db.fetch(`gun_${message.guild.id}_${user.id}`)
  if(yes === null) yes = 'Não'
  if(yes === true) yes = 'Sim'

  let mana = await db.fetch(`mangas_${message.guild.id}_${user.id}`)
  if(mana === null) mana = '0'
 
  let perfil1 = await db.fetch(`perfil_${message.guild.id}_${user.id}`);
  if (perfil1 === null) perfil1 = 'https://i.imgur.com/2EtNqRM.png'


const canvas = Canvas.createCanvas(850, 500);
const ctx = canvas.getContext('2d');
const background = await Canvas.loadImage(perfil1);

  
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#ff58c3';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);



    //texto
    ctx.font = '30px Arial';
    ctx.fillStyle = 'WHITE';
    ctx.fillText(`Armado(a): ${yes}`, 520, 70);
    ctx.fillText(`${user.user.tag}`, 520, 300);
    ctx.fillText(`________________`, 420, 320)
    ctx.fillText(`Carteira: ${money}¥ ienes`, 420, 390)
    ctx.fillText(`________________`, 420, 400)
    
    ctx.font = '25px Arial';
    ctx.fillStyle = 'WHITE';
    ctx.fillText(`Angelical's Cofre: ${bank}¥ ienes`, 420, 430)
    ctx.fillText(`Função: ${vip1}`, 420, 460)
    ctx.fillText(`Casado: com ${ma}`, 420, 487)
    
    ctx.font = '22px Arial';
    ctx.fillStyle = 'WHITE';
    ctx.fillText(`Itens Sagrados: ${asas} Waifus, ${harpa} Animes, ${mana} Mangás`, 300, 25)


    //Arc
    ctx.beginPath();
    //Trace un rond
    ctx.arc(625, 180, 90, 0, Math.PI * 2, true);
    ctx.closePath();
    //dire que ce qui n'est pas dans le rond sera coupé ce qui donnera une pp arrondie
    ctx.clip();

    const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 520, 79, 200, 200);

 
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), perfil1);


    message.channel.send(attachment);
  }}