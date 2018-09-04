const Discord = require('discord.js');
const config = require('../config.json')
const moment = require('moment');
moment.locale("pt-BR")

module.exports.run = (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let owner = bot.users.find('id', '364241967388950531');
    let username = owner.username
    let botembed = new Discord.RichEmbed()
    .setDescription("Informações do Aviãosito Bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nome do Bot:", bot.user.username)
    .addField("Versão do Bot:", config.version)
    .addField('Criador por: ', username)
    .addField("Linguagem:", config.linguagem)
    .addField("Criado em:", moment(bot.user.createdAt).format('LLLL'));
    
    return message.channel.send(botembed);
    message.reply('Enviei minhas informações em seu privado !');
}

module.exports.help = {
    name: "botinfo"
}