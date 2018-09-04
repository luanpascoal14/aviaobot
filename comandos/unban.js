const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Você não tem permissão de desbanir usuarios!');
    let member = bot.users.get(msgs[0])
    if (!member) return message.channel.send(`${message.author}, Mencione o ID do usuario`);
    message.guild.unban(member)
    let UBEmbed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setColor(message.member.displayColor)
    .setTitle('**DESBANIMENTO**')
    .addField('**Servidor**: ' + message.guild.name, '**Usuario**: <@' + member + '>')
    .addField('**Horario**: ' + message.createdAt, '**Por**: ' + message.author.username);
    message.delete();
    message.channel.send(UBEmbed);
}

module.exports.help = {
    name: "unban"
}