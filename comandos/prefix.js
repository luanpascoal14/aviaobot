const Discord = require('discord.js');
const fs = require('fs');
const config = require('../config.json')
const prefixjson = require('../prefix.json');


module.exports.run = async (bot, message, args) => {

    if(!message.author.id === '364241967388950531') {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply('Sem Permissão!');
    } else {

        let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));

        if(!prefixes[message.guild.id]){
            prefixes[message.guild.id] = {
                prefixes: config.prefix
            };
        }

        const prefixG = prefixes[message.guild.id].prefixes;
        
        if(!args[0] || args[0 == "help"]) return message.reply(`Uso: ${prefixG}prefix <novo prefix>`);


        prefixes[message.guild.id] = {
            prefixes: args[0]
        };

        fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        });

        let sEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL)
        .setTitle('**NOVO PREFIX**')
        .setDescription('Novo Prefix: ' + args[0])
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL);

        message.channel.send(sEmbed)
    }    
        
}

module.exports.help = {
    name: "prefix"
}