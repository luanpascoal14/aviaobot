const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const config = require('./config.json');
const ma = require('./manutencao.json');

const ytdl = require('ytdl-core');
const queue = new Map();

moment.locale('pt-br');

bot.commands = new Discord.Collection();


fs.readdir('./comandos/', (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === 'js')
    if(jsfile.length <= 0){
        console.log('Não existe comandos!');
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./comandos/${f}`);
        console.log(`${f} Carregado!`);
        bot.commands.set(props.help.name, props);
    });
})


bot.on('guildMemberAdd', member => {
    if(member.guild.id === '437625052775710753') {
        member.send('Obrigado por entrar no **' + member.guild.name + '** ' + member.user.username + '! Chame seus amigos para sé divertir com você! https://discord.gg/26MPNnh');
    }
});


function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
    return text;
    }


bot.on('message', async message => {
    if (message.content.includes("https://discord.gg/")) {
        if(!message.guild.id === '437625052775710753') return;
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }

    }

    if (message.content.includes("https://discordapp.com/invite")) {
        if(!message.guild.id === '437625052775710753') return;
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }

    }

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.reply('Eu sou apenas um Bot, então use comandos em servidores');



    let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }



    let prefix = prefixes[message.guild.id].prefixes;

    if(message.content.startsWith('<@472230897995874304>')){
        message.channel.send(`**Olá, eu sou o Aviãosito! Meu prefixo normal é \`\` - \`\`, e o prefix atual no servidor é \`\` ${prefixes[message.guild.id].prefixes} \`\` \n**Caso precise de ajuda use \`\` ${prefixes[message.guild.id].prefixes}ajuda \`\` `);  
    }

    if(!message.content.startsWith(prefix)) return; 



    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    /*if(ma[cmd].manutencao === 'false') return message.reply('Comando em Manutenção!');

    if(message.content.startsWith(prefix + 'manu')){
        if(message.author.id !== "364241967388950531") return;
        const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
        if(!ma[args[1]]){
        ma[args[1]] = {
            manutencao: false
        };
        }
    
        if(!args[0]) {
        let desc1 = new Discord.RichEmbed()
        .setTitle("Ops!")
        .setColor(randomColor)
        .setDescription('Você quer tira ou colocar um comando em manutenção?')
        .setFooter(`Digitado por ${message.author.tag}`, message.author.avatarURL);
    
        message.channel.send(desc1);
        } else {
        if(args[0] = "on") {
            if(args[1]) {
            let manutencao = ma[args[1]].manutencao;
                manutencao = ""
                manutencao = true
    
    
                let desc2 = new Discord.RichEmbed()
                .setTitle("Comando em manutenção!")
                .setColor(randomColor)
                .setDescription(`Agora o comando ${args[1]} está em manuntenção`)
                .setFooter(`Comando desativado por ${message.author.tag}`, message.author.avatarURL);
    
                message.channel.send(desc2);
            } else {
                let desc3 = new Discord.RichEmbed()
                .setTitle("Ops!")
                .setColor(randomColor)
                .setDescription(`Escreva alguma comando para eu colocar ele em manutenção!`)
                .setFooter(`Digitado por ${message.author.tag}`, message.author.avatarURL);
    
                message.channel.send(desc3);
            }
        }else if(args[0] = "off") {
            if(args[1]) {
                ma[args[1]].manutencao = ""
                ma[args[1]].manutencao = false
    
    
                let desc4 = new Discord.RichEmbed()
                .setTitle("Comando tirado da manutenção!")
                .setColor(randomColor)
                .setDescription(`Agora o comando ${args[1]} saiu da manuntenção`)
                .setFooter(`Comando ativado por ${message.author.tag}`, message.author.avatarURL);
    
                message.channel.send(desc4);
            } else {
                let desc5 = new Discord.RichEmbed()
                .setTitle("Ops!")
                .setColor(randomColor)
                .setDescription(`Escreva alguma comando para eu tira ele em manutenção!`)
                .setFooter(`Digitado por ${message.author.tag}`, message.author.avatarURL);
    
                message.channel.send(desc5);
            }
        } else {}
        }
    }*/

    if (message.content.startsWith(`${prefix}eval`)) {
        if(message.author.id !== "364241967388950531") return;
        try {
        const code = args.join(" ");
        let evaled = eval(code);
        
        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
        
        message.delete();
        message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
    
    if(message.content.startsWith(prefix + 'teste')){
        let Embed = new Discord.RichEmbed()
        .addField('\<a:malakoi:484192277133000715> \<:idle:438399398796460032> Amarelo', '\<:online:438399398808911882> Verde')
        .addField('\<:dnd:438399396548313091> Vermelho', '\<:offline:438399398762905600> Cinza')
        .addField('\<:stream:438399396963418131> Roxo', '\<a:Labfm:482171966833426432> Disco')

        message.channel.send(Embed)

        
    }



    const serverQueue = queue.get(message.guild.id);

    if(message.content.startsWith(prefix + 'tocar')){
        const voiceChannel = message.member.voiceChannel;
        if(!voiceChannel) return message.reply('Você precisa estar em um canal de voz!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) {
            return message.reply('Eu não pude conectar em seu canal, pois preciso ter algumas permissões!');
        }
        if(!permissions.has('SPEAK')) {
            return message.reply('Eu não posso falar, pois preciso ter algumas permissões!');
        }

        const songInfo = await ytdl.getInfo(args[0]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        };

        if(!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(message.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(message.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error('Tive um erro! ' + error);
                queue.delete(message.guild.id);
                return message.reply('Eu não pude conectar ao canal, pois tive alguns erros!');
            }

        } else {
            serverQueue.songs.push(song);
            return message.reply(`Adicionado para a lista: **${song.title}**`);
        }
        return;
    } else if (message.content.startsWith(prefix + 'pular')) {
        if(!message.member.voiceChannel) return message.reply('Você não está em um canal de voz!');
        if (!serverQueue) return message.reply('Não está tocando nada!');
        serverQueue.connection.dispatcher.end();
        return;



    } else if (message.content.startsWith(prefix + 'parar')){
        if(!message.member.voiceChannel) return message.reply('Você não está em um canal de voz!');
        if (!serverQueue) return message.reply('Não está tocando nada!');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
        return;



    } else if(message.content.startsWith(prefix + 'volume')) {
        if(!serverQueue) return message.reply('Não estou tocando nada!');
        if(!args[1]) return message.reply(`O volume atual é: **${serverQueue.volume}**`);
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return message.reply(`O volume atual agora é: **${args[1]}**`);



    } else if (message.content.startsWith(prefix + 'tocando')) {
        if(!serverQueue) return message.reply('Não estou tocando nada!');
        return message.reply(`Estou Tocando: **${serverQueue.songs[0].title}**`);
    
    
    } else if (message.content.startsWith(prefix + 'lista')) {
        if (!serverQueue) return message.reply('Eu não estou tocando nada!');
        return message.reply(`
==**Lista**==
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Tocando**: ${serverQueue.songs[0].title}
        `);
    }
    return;
});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if(!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Musica acabou!');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error))
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`Agora Tocando: **${song.title}**`);

};


bot.on('ready', () => {
    console.log('[Aviãosito] Iniciado !');
    console.log(`Logado em ${bot.guilds.size} servidores e ${bot.users.size} usuarios`)
    bot.user.setActivity(`-ajuda | ${bot.guilds.size} servers | ${bot.users.size} usuarios`, {type:'WATCHING'});
});

bot.on('GuildCreate', member => {
    console.log(`Entrou em um servidor: ` + member.guild.name)
    bot.user.setActivity(`-ajuda | ${bot.guilds.size} Servers | ${bot.users.size} Usuarios`, {type:'WATCHING'});
});

bot.on('GuildDelete', member => {
    console.log(`Saiu de um servidor: ` + member.guild.name)
    bot.user.setActivity(`-ajuda | ${bot.guilds.size} Servers | ${bot.users.size} Usuarios`, {type:'WATCHING'});
});

bot.on('guildMemberAdd', member => {
    console.log('Um Usuario entrou em um servidor: ' + member.guild.name)
    bot.user.setActivity(`-ajuda | ${bot.guilds.size} Servers | ${bot.users.size} Usuarios`, {type:'WATCHING'});
});

bot.on('guildMemberDelete', member => {
    console.log('Um Usuario saiu de um servidor: ' + member.guild.name);

    bot.user.setActivity(`-ajuda | ${bot.guilds.size} Servers | ${bot.users.size} Usuarios`, {type:'WATCHING'});
})


bot.login(process.env.TOKEN);

