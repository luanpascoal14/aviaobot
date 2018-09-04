const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    return;
    /*if(!args[0]) return message.reply('Como utilizar: \`\` criarembed (titulo) (descrição)\`\`')
    var separador = message.content.split("|"); // Ordem: titulo, descrição, footer, thumb

    var embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle(separador[1])
    .setDescription(separador[2])
    .setThumbnail(message.author.displayAvatarURL)
    .setFooter(`Enviado por ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed);*/
}

module.exports.help = {
    name: "criarembed"
}