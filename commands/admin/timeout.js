const { SlashCommandBuilder , PermissionFlagsBits, EmbedBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Mutes the given member in the server.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for the mute')
                .setRequired(true))
        .addIntegerOption(option => 
            option
                .setName('seconds')
                .setDescription('Amount of seconds')
                .setMinValue(0)
                .setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.setDMPermission(false),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
        const seconds = interaction.options.getInteger('seconds')
        const ms = seconds * 1000

        if (!user) { await interaction.editReply("That user doesn't exist."); return; }
        if (user.id === interaction.guild.ownerId) { await interaction.editReply("You can't mute the server owner."); return; }

        try {
            await interaction.reply({ content: `Muted ${user.username} for ${reason}`, ephemeral: true });
            await interaction.member.timeout(ms, reason)
        } catch (err) {
            console.log(err)
        }
    }
};