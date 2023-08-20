const { SlashCommandBuilder , PermissionFlagsBits, EmbedBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('gayrate')
		.setDescription('Funny gayrate!!!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user')
				.setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
		const gayrate = Math.floor(Math.random() * 101)
        const embed = new EmbedBuilder()
            .setDescription(`${user.username} is ${gayrate}% gay!`)
            .setColor('#d927e6');
        interaction.reply({embeds:[embed]})
    }
};