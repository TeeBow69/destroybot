const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Destroyer les joueur(Command:*help" );
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    

    if (message.content === "Salut"){
        message.reply("Bien le bonjour, fait *help pour savoir les commandes. :)");
        console.log("Commande Salut Effectué");
    }

    if (message.content === "Comment va-tu ?"){
        message.reply("Super, je vien de faire top 1 la ^^");
        console.log("Commande humeur Effectué");
    }

    if (message.content === "DestroyBot"){
        message.reply("Oui, à ton service !");
        console.log("Commande identifie Effectué")

    }

    if (message.content === "*inscription"){
        message.reply("tu à été inscris !");
        console.log("Commande inscription Effectué")

    }
    
    if (message.content === prefix + "help"){
        var embed = new discord.RichEmbed()
            .setTitle("Page D'aide")
            .setDescription("Voici la page d'aide")
            .addField("[DOC]", "https://docs.google.com/document/d/1ZoV-ylZSG8f_dLeI9jzdav3vRFGyRxwlBaVMrIdi1DA/edit?usp=sharing")
            .addField("Règles du serveur","Voici les règles du serveur #🚸charte🚸", true)
            .setColor("0x04B486")
            .setFooter ("Bon moment parmis nous !")
        message.channel.sendEmbed(embed);
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Salut, Bienvenue sur le server Destroy Communitys, je t"invite à lire la charte et à faire !command pour savoir ce que tu peut faire ! https://i.imgur.com/vKhhDMu.gif ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});
