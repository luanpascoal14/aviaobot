const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        //bot.users.filter(a => a.send('Olá'))
        if(!message.guild.id === '437625052775710753') return message.reply('Apenas utilizavel no servidor Raposa Craft!');
        let URole = message.member.roles.find('id', '468108011731419147');
        if(!URole) return message.reply('Sem permissão!')
        
        if(!args[0]) return message.reply('PorFavor Mencione um usuario!');

        let User = message.mentions.members.first();

        let Embed1 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**1- menino ou menina?**', '**15 SEGUNDOS** \n Digite apenas **menino** ou **menina**!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed2 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**2- youtuber ou miniyt ou n1(nenhum)?**', '**15 SEGUNDOS** \n Digite apenas **youtuber** ou **miniyt** ou **n1**!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed3 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**3- apaixonado ou namorando ou solteiro ou enrolado?**', '**15 SEGUNDOS** \n Digite apenas **apaixonado** ou **namorando** ou **solteiro** ou **enrolado**!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed4 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**4- comunidade LGBT?**', '**15 SEGUNDOS** \n Digite apenas **lgbt** ou **não4**!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed5 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**5- otome ou otaku?**', '**15 SEGUNDOS** \n Digite apenas **otome** ou **otaku**!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed6 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**6- -18 ou +18?**', '**15 SEGUNDOS** \n Digite apenas **-18** ou **+18**!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL); //Celular,pc, playstation e Xbox

        let Embed7 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**7- celular ou pc ou playstation ou xbox?**', '**15 SEGUNDOS** \n Digite apenas **celular** ou **pc** ou **playstation** ou **xbox**! \n **ATENÇÃO**: Coloque apenas uma plataforma!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed8 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**8- Qual signo?**', '**15 SEGUNDOS** \n Digite apenas o **signo**! \n **ATENÇÃO**: Coloque tudo letra minuscula e sem acento!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed9 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**9- musica preferida ou ecletico?**', '**15 SEGUNDOS** \n Digite apenas **preferida** ou **ecletico**!')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed10 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**10- Qual jogo?**', '**15 SEGUNDOS** \n Para passar pro proximo digite **next** \n**REGISTRADOR**: Aqui você terá que colocar a tag! Pois não posso criar tags por enquanto')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed11 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**11- Qual o estado? Se for de fora digite "extrangeiro"**', '**15 SEGUNDOS** \n Apenas digite **A SIGLA DO ESTADO(Ex: SP, BA, RS)** \n **AVISO** EM LETRA MAISCULA')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed12 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**12- estuda, trabalha ou vagabundo**', '**15 SEGUNDOS** \n Apenas digite **alguns dos 3, com mesmos caracteres**')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed13 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**13- raposa, patinho ou galinha**', '**15 SEGUNDOS** \n Apenas digite **alguns dos 3, com mesmos caracteres**')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);
        
        let Embed14 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**14- sadboy ou sadgirl ou n2(nenhum)**', '**15 SEGUNDOS** \n Apenas digite **sadboy** ou **sadgirl** ou **n1**')
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Sendo Registrado por ${message.author.tag}`, message.author.avatarURL);

        let Embed15 = new Discord.RichEmbed()
        .setTitle(User.user.username)
        .setDescription('**REGISTRO**')
        .addField('**Registrado com sucesso**', 'Servidor: ' + message.guild.name)
        .setColor('RANDOM')
        .setThumbnail(User.displayAvatarURL)
        .setFooter(`Registrado por ${message.author.tag}`, message.author.avatarURL);

        message.channel.send(Embed1).then(msg => {
        const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 120000 });
        collector1.on('collect', message => {
            if(message.content == 'menino', 'menina', 'miniyt', 'youtuber', 'n1', 'namorando', 'solteiro', 'enrolado', 'apaixonado', 'lgbt', 'não4', 'otome', 'otaku', '-18', '+18', 'celular', 'pc', 'xbox', 'playstation', 'peixes', 'aquario', 'cancer', 'touro', 'gemeos', 'escorpiao', 'aries', 'libra', 'virgem', 'leao', 'sagitario', 'capricornio', 'preferido', 'ecletico', 'next', 'SP', 'ES', 'RJ', 'MG', 'RS', 'SC', 'PR', 'MS', 'MT', 'GO', 'DF', 'MA', 'PI', 'CE', 'BA', 'RN', 'PE', 'PB', 'AL', 'SE', 'AM', 'PA', 'TO', 'RO', 'AC', 'RR', 'AP', 'extrangeiro', 'estuda', 'trabalha', 'vagabundo', 'raposa', 'patinho', 'galinha', 'sadboy', 'sadgirl', 'n2'){
                if (message.content == "menino", "menina") {
                    if(message.content == 'menino') {
                        let Role = message.guild.roles.find('id', '452472261102796801');
                        User.addRole(Role)
                        message.delete();
                        msg.edit(Embed2);
                    } else if (message.content == 'menina') {
                        let Role = message.guild.roles.find('id', '452469818889863188');
                        User.addRole(Role)
                        message.delete();
                        msg.edit(Embed2);
                        
                    }
                }
                //////////////////////////
                if (message.content == 'youtuber') {
                    let Role = message.guild.roles.find('id', '437628325972672512'); 
                    User.addRole(Role);
                    message.delete();
                    msg.edit(Embed3)
                }
                if(message.content == 'miniyt'){
                    let Role = message.guild.roles.find('id', '442460777853747212'); 
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed3)
                }
                if(message.content == 'n1'){
                    message.delete();
                    msg.edit(Embed3)
                }
                /////////////////////////////
                if(message.content == 'namorando'){
                    let Role = message.guild.roles.find('id', '458809226022748183');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed4) 
                }
                if(message.content == 'apaixonado'){
                    let Role = message.guild.roles.find('id', '470286710366928913');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed4) 
                }
                if(message.content == 'solteiro'){
                    let Role = message.guild.roles.find('id', '458809115020492800');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed4) 
                }
                if(message.content == 'enrolado'){
                    let Role = message.guild.roles.find('id', '470286707066142732');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed4) 
                }
                //////////////////////////////
                if(message.content == 'lgbt'){
                    let Role = message.guild.roles.find('id', '470365384772681738');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed5) 
                }
                ///////////////////////////////
                if(message.content == 'não4'){
                    message.delete();
                    msg.edit(Embed5) 
                }
                //////////////////////////////
                if(message.content == 'otome'){
                    let Role = message.guild.roles.find('id', '470287210915037194');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed6) 
                }
                if(message.content == 'otaku'){
                    let Role = message.guild.roles.find('id', '451787464298987542');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed6) 
                }
                //////////////////////////////////////
                if(message.content == '-18'){
                    let Role = message.guild.roles.find('id', '458724444614033409');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed7) 
                }
                if(message.content == '+18'){
                    let Role = message.guild.roles.find('id', '458719241034792978');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed7) 
                }
                //////////////////////////////////////
                if(message.content == 'celular'){
                    let Role = message.guild.roles.find('id', '470267694877376513'); //470267694877376513 -> Celular, 470267787961434124 -> PC, 470267848669921281 -> Xbox, 470268013619445781 -> Playstation
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed8) 
                }
                if(message.content == 'pc'){
                    let Role = message.guild.roles.find('id', '470267787961434124'); //470267694877376513 -> Celular, 470267787961434124 -> PC, 470267848669921281 -> Xbox, 470268013619445781 -> Playstation
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed8) 
                }
                if(message.content == 'playstation'){
                    let Role = message.guild.roles.find('id', '470268013619445781'); //470267694877376513 -> Celular, 470267787961434124 -> PC, 470267848669921281 -> Xbox, 470268013619445781 -> Playstation
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed8) 
                }
                if(message.content == 'xbox'){
                    let Role = message.guild.roles.find('id', '470267848669921281'); //470267694877376513 -> Celular, 470267787961434124 -> PC, 470267848669921281 -> Xbox, 470268013619445781 -> Playstation
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed8) 
                } 
                ///////////////////////////////
                if(message.content == 'aries'){
                    let Role = message.guild.roles.find('id', '458810891807490060');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'touro'){
                    let Role = message.guild.roles.find('id', '458810895074852875');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'gemeos'){
                    let Role = message.guild.roles.find('id', '458810897654349828');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'leao'){
                    let Role = message.guild.roles.find('id', '458810924724387840');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'cancer'){
                    let Role = message.guild.roles.find('id', '458810922685693962');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'virgem'){
                    let Role = message.guild.roles.find('id', '458810926729003019');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'libra'){
                    let Role = message.guild.roles.find('id', '458810928499130368');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'escorpiao'){
                    let Role = message.guild.roles.find('id', '458810930273189913');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                }
                if(message.content == 'sagitario'){
                    let Role = message.guild.roles.find('id', '458810932378992650');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                } 
                if(message.content == 'capricornio'){
                    let Role = message.guild.roles.find('id', '458810933951856641');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                } 
                if(message.content == 'aquario'){
                    let Role = message.guild.roles.find('id', '458810935835099137');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                } 
                if(message.content == 'peixes'){
                    let Role = message.guild.roles.find('id', '458810937982451712');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed9) 
                } 
                /////////////////////////
                if(message.content == 'preferida'){
                    message.delete();
                    msg.edit(Embed10) 
                } 
                if(message.content == 'ecletico'){
                    message.delete();
                    msg.edit(Embed10) 
                } 
                /////////////////////////////
                if(message.content == 'next'){
                    message.delete();
                    msg.edit(Embed11) 
                } 
                ////////////////////////////
                if(message.content == 'extrangeiro'){
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'SP'){
                    let Role = message.guild.roles.find('id', '458715854968848384');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'RJ'){
                    let Role = message.guild.roles.find('id', '458719225800818689');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'RS'){
                    let Role = message.guild.roles.find('id', '458719228380577809');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'RN'){
                    let Role = message.guild.roles.find('id', '458719226547535903');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'PR'){
                    let Role = message.guild.roles.find('id', '458718446373306388');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'MT'){
                    let Role = message.guild.roles.find('id', '458717946567720960');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'MS'){
                    let Role = message.guild.roles.find('id', '458717947553382401');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'ES'){
                    let Role = message.guild.roles.find('id', '458717441518862347');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'MG'){
                    let Role = message.guild.roles.find('id', '458717949927358464');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'SC'){
                    let Role = message.guild.roles.find('id', '458719234428764191');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'GO'){
                    let Role = message.guild.roles.find('id', '458717442449866788');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'DF'){
                    let Role = message.guild.roles.find('id', '458717439501402112');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'PI'){
                    let Role = message.guild.roles.find('id', '458718448588161034');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'CE'){
                    let Role = message.guild.roles.find('id', '458717429598781441');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'PE'){
                    let Role = message.guild.roles.find('id', '458718447598043147');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'PB'){
                    let Role = message.guild.roles.find('id', '458718445316341768');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'AL'){
                    let Role = message.guild.roles.find('id', '458716768928530443');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'SE'){
                    let Role = message.guild.roles.find('id', '458719236014211094');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'BA'){
                    let Role = message.guild.roles.find('id', '458715062505439232');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'MA'){
                    let Role = message.guild.roles.find('id', '458717943954407463');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'AC'){
                    let Role = message.guild.roles.find('id', '458715058642485268');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'RR'){
                    let Role = message.guild.roles.find('id', '458719232645922826');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'RO'){
                    let Role = message.guild.roles.find('id', '458719230544838657');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'TO'){
                    let Role = message.guild.roles.find('id', '458719237930876988');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'PA'){
                    let Role = message.guild.roles.find('id', '458718444389531648');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'AM'){
                    let Role = message.guild.roles.find('id', '458717197578010624');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                } 
                if(message.content == 'AP'){
                    let Role = message.guild.roles.find('id', '458717205350187008');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed12) 
                }
                //////////////////////////////////////////
                if(message.content == 'estuda'){
                    let Role = message.guild.roles.find('id', '470287211603034115');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed13) 
                }
                if(message.content == 'trabalha'){
                    let Role = message.guild.roles.find('id', '470287211535925248');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed13) 
                }
                if(message.content == 'vagabundo'){
                    let Role = message.guild.roles.find('id', '470287215788818452');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed13) 
                }
                ////////////////////////
                if(message.content == 'raposa'){
                    let Role = message.guild.roles.find('id', '471532212026867727');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed14) 
                }
                if(message.content == 'galinha'){
                    let Role = message.guild.roles.find('id', '470288011666391050');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed14) 
                }
                if(message.content == 'patinho'){
                    let Role = message.guild.roles.find('id', '470288012211781632');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed14) 
                }
                //////////////////////
                if(message.content == 'sadboy'){
                    let Role = message.guild.roles.find('id', '470286713013665802');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed15) 
                }
                if(message.content == 'sadgirl'){
                    let Role = message.guild.roles.find('id', '470286715517403146');
                    User.addRole(Role)
                    message.delete();
                    msg.edit(Embed15) 
                }
                if(message.content == 'n2'){
                    message.delete();
                    msg.edit(Embed15) 
                }
            } else {
                return;
            }

        })
        })

    
}

module.exports.help = {
    name: "registro"
}