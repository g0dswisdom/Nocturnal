const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('The help command'),
    async execute(interaction) {
        const utilEmbed = new EmbedBuilder()
            .setTitle('Utility Commands')
            .addFields({name: "shutdown", value: "Shut downs the bot"})
            .addFields({name: "guildlist", value: "Number of guilds bot is in"})
            .addFields({name: "help", value: "The help command"})
            .setColor('d927e6');
        const funEmbed = new EmbedBuilder()
            .setTitle('Fun Commands')
            .addFields({name: "8ball", value: "Ask the 8ball a question!"})
            .addFields({name: "ascii", value: "Converts given text to ASCII"})
            .addFields({name: "fakeaddy", value: "Sends a fake addy!"})
            .addFields({name: "email", value: "Sends a fake email!"})
            .addFields({name: "fakename", value: "Sends a fake name!"})
            .addFields({name: "fakephone", value: "Sends a fake phone number!"})
            .addFields({name: "gayrate", value: "How gay the given user is"})
            .addFields({name: "hackerphrase", value: "Sends a hacker phrase"})
            .addFields({name: "identity", value: "Sends a fake identity"})
            .addFields({name: "iq", value: "IQ of the given user"})
            .addFields({name: "ping", value: "Replies with pong!"})
            .addFields({name: "dogfact", value: "Sends a dog fact"})
            .addFields({name: "catfact", value: "Sends a cat fact"})
            .addFields({name: "birdfact", value: "Sends a birb fact"})
            .addFields({name: "koalafact", value: "Sends a koala fact"})
            .addFields({name: "pandafact", value: "Sends a panda fact"})
            .addFields({name: "joke", value: "Sends a joke"})
            .addFields({name: "animequtoe", value: "Sends an anime quote"})
            .setColor('d927e6');
        const adminEmbed = new EmbedBuilder()
            .setTitle('Administration Commands')
            .addFields({name: "ban", value: "Bans the given user"})
            .addFields({name: "kick", value: "Kicks the given user"})
            .addFields({name: "timeout", value: "Mutes the given user"})
            .addFields({name: "nick", value: "Sets the nickname of the given user"})
            .setColor('d927e6');
        const imageEmbed = new EmbedBuilder()
            .setTitle('Administration Commands')
            .addFields({name: "capy", value: "Sends a capybara!"})
            .addFields({name: "dailycapy", value: "Capybara of the day!"})
            .addFields({name: "birb", value: "Sends a birb image"})
            .addFields({name: "cat", value: "Sends a cat image"})
            .addFields({name: "dog", value: "Sends a dog image"})
            .addFields({name: "fox", value: "Sends a fox image"})
            .addFields({name: "kangaroo", value: "Sends a kangaroo image"})
            .addFields({name: "koala", value: "Sends a koala image"})
            .addFields({name: "panda", value: "Sends a panda image"})
            .addFields({name: "raccoon", value: "Sends a raccoon image"})
            .addFields({name: "facepalm", value: "Sends a facepalm gif"})
            .addFields({name: "wink", value: "Sends a wink gif"})
            .addFields({name: "pat", value: "Sends a pat gif"})
            .addFields({name: "hug", value: "Sends a hug gif"})
            .setColor('d927e6');
            
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('page1')
            .setLabel('Utility')
            .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
            .setCustomId('page2')
            .setLabel('Fun')
            .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
            .setCustomId('page3')
            .setLabel('Admin')
            .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
            .setCustomId('page4')
            .setLabel('Images')
            .setStyle(ButtonStyle.Success),

        )

        const message = await interaction.reply({embeds: [funEmbed], components: [button]});
        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {
            if (i.customId === 'page1') {
                await i.update({embeds: [utilEmbed], components: [button]})
            }
            if (i.customId === 'page2') {
                await i.update({embeds: [funEmbed], components: [button]})
            }
            if (i.customId === 'page3') {
                await i.update({embeds: [adminEmbed], components: [button]})
            }
            if (i.customId === 'page4') {
                await i.update({embeds: [imageEmbed], components: [button]})
            }
        })
    }
};