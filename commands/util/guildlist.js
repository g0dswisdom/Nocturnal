const { SlashCommandBuilder , PermissionFlagsBits, EmbedBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('guildlist')
		.setDescription('Gets the number of guilds the bot is in'),
    async execute(interaction) {
        const serverCount = interaction.client.guilds.cache.size;
        const embed = new EmbedBuilder()
          .setTitle('Server Count')
          .setDescription(`The bot is currently in ${serverCount} server(s).`)
          .setColor('d927e6');
        await interaction.reply({embeds: [embed]})
    }
};