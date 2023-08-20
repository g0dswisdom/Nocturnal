const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { faker } = require("@faker-js/faker")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('email')
		.setDescription('Sends a fake email in chat'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
		.setDescription(`Fake email: ${faker.internet.email()}`)
		.setColor('#d927e6');
		await interaction.reply({embeds:[embed]});
	},
};
