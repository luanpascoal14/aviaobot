const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!args[0]) return message.reply('Coloque um link!');
    if(!args[0].includes('http')) return message.reply('Coloque um link valido!')

    var Download = args[0];

    var Descricao = args.slice(1).join(" ");

    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('**DOWNLOAD**')
    .setDescription(`Link: [**Download**](${Download})`)
    .addField(`Descrição:`, Descricao)
    .setThumbnail(message.author.displayAvatarURL)
    .setFooter(`Enviado por ${message.author.tag}`, message.author.avatarURL)

    message.delete();
    message.channel.send(embed)
}

module.exports.help = {
    name: "download"
}