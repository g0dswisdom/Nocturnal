const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { faker } = require("@faker-js/faker")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fakeaddy')
		.setDescription('Sends a fake address in chat'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
		.setDescription(`Fake address: ${faker.address.streetAddress()}`)
		.setColor('#d927e6');
		await interaction.reply({embeds:[embed]});
	},
};
