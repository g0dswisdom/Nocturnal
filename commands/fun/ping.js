const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
		.setDescription(`Pong!`)
		.setColor('#d927e6');
		await interaction.reply({embeds:[embed]})
	},
};
