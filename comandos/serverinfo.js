const Discord = require("discord.js")
const moment = require("moment")
moment.locale("pt-BR")

module.exports.run = async (bot, message, args) => {
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let Ubot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`Informações do servidor ${message.guild.name}`)
        .setColor("#FF0000")
        .addField('Dono', `<@${message.guild.owner.id}>`)
        .addField('Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField("ID", message.guild.id)
        .addField(`Membros [${totalmembros}]`, `\<:online:438399398808911882> Online: ${online}\n\<:idle:438399398796460032> Ausente: ${ausente}\n\<:dnd:438399396548313091> Ocupado: ${ocupado}\n\<:offline:438399398762905600> Offline: ${offline}\n\<:bot:437248340724416514> Bots: ${Ubot}`)
        .addField(`Canais [${canaistexto+canaisvoz}]`, `\:notepad_spiral: Texto: ${canaistexto}\n\:loud_sound: Voz: ${canaisvoz}`)
        .addField(`Cargos [${message.guild.roles.size}]`, '⠀')
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
}

module.exports.help = {
    name: "serverinfo"
}