const { Discord, MessageEmbed } = require("discord.js");

module.exports= {
    name: "avatar",
    description: "Vedi l'avatar di qualcuno",

    run: async(client, message, args) => {

        let persona = message.author || message.frist.mentioned();

        const embed = new MessageEmbed()
        .setTitle("Avatar")
        .setAuthor(persona.tag, persona.displayAvatarURL(), persona.displayAvatarURL())
        .setDescription(`[JPG](${persona.displayAvatarURL({ format: "jpg"})}), [PNG](${persona.displayAvatarURL({ format: "jpg"})}), [WEBP](${persona.displayAvatarURL({ format: "jpg"})})`)
        .setImage(persona.displayAvatarURL({ format: "jpg"}))
        .setFooter("Comando eseguito da" + persona.tag, persona.displayAvatarURL())
        .setTimestamp();
        message.channel.send(embed)
    }
}