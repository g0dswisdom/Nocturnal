const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { faker } = require("@faker-js/faker")
module.exports = {
	data: new SlashCommandBuilder()
		.setName('fakephone')
		.setDescription('Sends a fake phone number in chat'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
		.setDescription(`Fake email: ${faker.phone.number('501-###-####')}`)
		.setColor('#d927e6');
		await interaction.reply({embeds: [embed]});
	},
};
