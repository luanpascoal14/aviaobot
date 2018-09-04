const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
        //bot.users.filter(a => a.send('Olá'))
        if(!message.author.id === '472230897995874304') return message.reply('\<a:negativo:471788546894725151> Acesso Negado!');

        if(!args[0]) return message.reply('Digite a Novidade!');
        
        let Novidade = args.join(' ');
        
        let Embed = new Discord.RichEmbed()
        .setDescription('\<a:hypersquad:471788546466775061> **NOVIDADES** \<a:hypersquad:471788546466775061>')
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor('RANDOM')
        .addField(Novidade, '⠀')
        .setFooter(`Enviado por ${message.author.tag}`, message.author.avatarURL);
        message.delete();
        message.guild.members.filter(user => user.send(Embed));
        message.reply('Todos receberam a Novidade!').then(msg => { msg.delete(3000) });
}

module.exports.help = {
    name: "novidade"
}

