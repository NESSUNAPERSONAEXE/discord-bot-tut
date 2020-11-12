module.exports = {
    name: "clear",
    description: "Pulisci la chat",

    run: async(client, message, args) => {

       let argss = args.join(" ");

       if(!argss) return message.channel.send(message.author.tag + ", scpecifica i messaggi da eliminare")

       if(!argss > 100) return message.channel.send("Non puoi eliminare + di 100msg")

       await message.channel.messages.fetch({limit: argss}).then(messages => {
           message.channel.bulkDelete(messages)
       });
    }

    }
