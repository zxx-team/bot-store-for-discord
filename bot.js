const Discord = require("discord.js")
const bot = new Discord.Client({disableMentions: 'everyone'})
const config = require("./config.json")


bot.on("ready", () => {
    console.log("Bot Sudah Online:)")

    bot.user.setActivity("Trexy Store | Ready All Product. Hosting MC,Akun Game,Rdp,dll, { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if (command === "help") {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle(`**🛒HELP STORE🛒**`)
            .setDescription(`Prefix: ${config.prefix}`)
            .addField(`**TESTIMONI**`, `\`${config.prefix}testi\``)
            .addField(`**RDP**`, `\`${config.prefix}rdp\``)
            .addField(`**JASA SAMP**`, `\`${config.prefix}jasasamp\``)
            .addField(`**DM FF**`, `\`${config.prefix}dmff\``)
            .addField(`**DM ML**`, `\`${config.prefix}dmml\``)
            .addField(`**UC PUBG**`, `\`${config.prefix}ucpubg\``)
            .addField(`**YT PREMIUM**`, `\`${config.prefix}ytprem\``)
        message.channel.send(helpEmbed)
    }

    if (command === "ping") {
        message.channel.send(`Pong **(${Date.now() - message.createdTimestamp}ms)**`)
    }

    if (command === "kick") {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send("Insufficient permissions (Requires permission `Kick members`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.kickable)
            return message.channel.send("This user is unkickable").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked, no reason was provided`);
            })

            if (reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked for ${reason}`);
            })
        }
    }

    if (command === "ban") {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send("Insufficient permissions (Requires permission `Ban members`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.bannable)
            return message.channel.send("This user is unbannable").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.ban().then(member => {
                message.channel.send(`${member.user.tag} was banned, no reason was provided`);
            })

            if (reason) return member.ban(reason).then(member => {
                message.channel.send(`${member.user.tag} was banned for ${reason}`);
            })
        }
    }
   
   
    if (command === "purge") {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Insufficient permissions (requires permission `Manage messages`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    const number = args.join(" ")
    if(!number) return message.channel.send("You haven't specified a number to purge").then(msg => {
        msg.delete({ timeout: 30000 })
    })
   message.channel.bulkDelete(number).catch(console.error)
   
   }
    
   if (command === "invite") {
    return message.channel.send("Nih Jangan Lupa Di Invite https://discord.com/oauth2/authorize?client_id=848879826961170432&scope=bot&permissions=4276092670")
    }

   if (command === "dmff") {
    return message.channel.send("COMING SOON")
   }

   if (command === "dmml") {
    return message.channel.send("COMING SOON")
   }

   if (command === "ucpubg") {
    return message.channel.send("COMING SOON")
   }

   if (command === "jasasamp") {
    return message.channel.send("COMING SOON")
   }

   if (command === "") {
    return message.channel.send("COMING SOON")
   }

   if (command === "ytprem") {
    return message.channel.send("**YT PREMIUM**\n\n•YT PREMIUM INVITE\n5k GOPAY/DANA/OVO\n100K OWOCASH\n10K PULSA\n\n•YT PREMIUM ADMIN\n20K GOPAY/DANA/OVO\n600K OWOCASH\n25K PULSA\n\n•YT PREMIUM ADMIN EMAIL SENDIRI \n15K GOPAY/DANA/OVO\n450K OWOCASH\n20K PULSA\n\n@everyone")
   }

   if (command === "testi") {
    return message.channel.send("CEK <#854332607659900959>")
   }

   if (command === "rdp") {
    const helpEmbed = new Discord.MessageEmbed()
            .setTitle(`**VPS•RDP**`)
            .addField(`RDP 1GB`, `STORAGE : 25 GB\nCPU : 1 CORE\n:money_with_wings: : 15k`)
            .addField(`RDP 2GB¹`, `STORAGE : 50 GB\nCPU : 1 CORE\n:money_with_wings::25K`)
            .addField(`RDP 2GB²`, `STORAGE 60 GB\nCPU : 1  CORE\n:money_with_wings: : 35K`)
            .addField(`RDP 4GB`, `STORAGE : 80 GB\nCPU : 2 CORE\n:money_with_wings: : 60k`)
            .addField(`RDP 8GB`, `STORAGE : 160 GB\nCPU : 4 CORE\n:money_with_wings: : 80k`)
            .addField(`SELLER:`, `EPENG`)
        message.channel.send(helpEmbed)
   }
});

bot.login(config.token)
