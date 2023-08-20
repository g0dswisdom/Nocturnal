const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dailycapy')
		.setDescription('Sends the daily capybara in chat'),
	async execute(interaction) {
        await interaction.reply("https://api.capy.lol/v1/capyoftheday");
	},
};
