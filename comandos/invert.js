const Discord = require('discord.js');
const jimp = require('jimp');


module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply('Mencione alguem!');
    message.channel.startTyping()
        var mencionado = message.mentions.users.first() ? message.mentions.users.first() : this.acharNome(args.join(' '), message.guild) ? this.acharNome(args.join(' '), message.guild) : message.author
        const foto =  mencionado.avatarURL || mencionado.user.avatarURL 
        jimp.read(foto,(err,img) =>{
            img.invert()
            img.getBuffer(jimp.AUTO, (err, imagem) => {
        message.channel.send({
            embed: {
                description: `**${mencionado.username || mencionado.displayName}** + "\n" +[**Download**](${foto})`,
                color: bot.color,
                image: {
                    url: 'attachment://imagem.png'
                }
            }, files: [{
                attachment: imagem,
                name: 'imagem.png'
            }]
        })})})
        message.channel.stopTyping()
        return true;
}

module.exports.help = {
    name: "invert"
}