const Discord = require("discord.js")
const moment = require("moment")
moment.locale("pt-BR")

module.exports.run = async (bot, message, args) => {
    let emoji = message.guild.emojis.find(emoji => emoji.name === `${args.join(" ")}`)
    let animado;
        if (emoji.animated === true) animado = "Sim"
        if (emoji.animated === false) animado = "Não"
    let gerenciadotwitch;
        if (emoji.managed === true) gerenciadotwitch = "Sim"
        if (emoji.managed === false) gerenciadotwitch = "Não"
    if(animado === 'Sim'){
        const embed = new Discord.RichEmbed()
        .setAuthor(`Informações do emoji **${emoji.name}**`)
        .setColor("#FF0000")
        .setThumbnail(emoji.url)
        .addField("Servidor:", emoji.guild.name)
        .addField("Animado:", animado)
        .addField("Criado em:", moment(emoji.createdAt).format("LLLL"))
        .addField("Nome:", args.join(' '))
        .addField("ID:", emoji.id)
        .addField("Indentificador:", '\`\` <a' + emoji.identifier + '> \`\`')
        .addField("Gerenciado:", gerenciadotwitch)
        message.channel.send(embed)
    }
    if(animado === 'Não'){
        const embed2 = new Discord.RichEmbed()
        .setAuthor(`Informações do emoji **${emoji.name}**`)
        .setColor("#FF0000")
        .setThumbnail(emoji.url)
        .addField("Servidor:", emoji.guild.name)
        .addField("Animado:", animado)
        .addField("Criado em:", moment(emoji.createdAt).format("LLLL"))
        .addField("Nome:", args.join(' '))
        .addField("ID:", emoji.id)
        .addField("Indentificador:", '\`\` <' + emoji.identifier + '> \`\`')
        .addField("Gerenciado:", gerenciadotwitch)
        message.channel.send(embed2)
    }
}

module.exports.help = {
    name: "emojiinfo"
}