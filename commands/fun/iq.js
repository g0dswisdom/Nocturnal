const { SlashCommandBuilder , PermissionFlagsBits, EmbedBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('iq')
		.setDescription('Funny iq!!!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user')
				.setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
		const iq = Math.floor(Math.random() * 201)
        if (iq < 100) {
            const embed = new EmbedBuilder()
            .setDescription(`${user.username} has an IQ of ${iq}! He dumb asl`)
            .setColor('#d927e6');
            interaction.reply({embeds:[embed]})
        } else {
            const embed = new EmbedBuilder()
            .setDescription(`${user.username} has an IQ of ${iq}!`)
            .setColor('#d927e6');
            interaction.reply({embeds:[embed]})
        }
    }
};