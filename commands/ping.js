module.exports = {
    name: "ping",
    description: "Pulisci la chat",

    run: async(client, message, args) => {

        message.channel.send("Il mio ping:" + client.ws.ping)
    }
}

