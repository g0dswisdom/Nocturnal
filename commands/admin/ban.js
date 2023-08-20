const { SlashCommandBuilder , PermissionFlagsBits, EmbedBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans the given member from the server.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

        if (!user) { await interaction.editReply("That user doesn't exist."); return; }
        if (user.id === interaction.guild.ownerId) { await interaction.editReply("You can't ban the server owner."); return; }
        const embed = new EmbedBuilder()
            .setDescription(`Banned ${user.username} for ${reason}`)
            .setColor('#d927e6');
        try {
            await interaction.reply({ embeds:[embed]});
            await interaction.guild.members.ban(user);
        } catch (err) {
            console.log(err)
        }
    }
};