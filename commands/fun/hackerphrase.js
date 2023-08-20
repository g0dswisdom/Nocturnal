const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { faker } = require("@faker-js/faker")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hackerphrase')
		.setDescription('Sends a hacker phrase in chat'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
		.setDescription(`Hacker phrase: ${faker.hacker.phrase()}`)
		.setColor('#d927e6');
		await interaction.reply({embeds:[embed]});
	},
};
