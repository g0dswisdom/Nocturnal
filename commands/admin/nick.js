const { SlashCommandBuilder , PermissionFlagsBits, EmbedBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('nick')
		.setDescription('Sets the nickname of the given user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('nickname')
				.setDescription('The nickname')
                .setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)
		.setDMPermission(false),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
		const userNickname = interaction.options.getString('nickname')

        if (!user) { await interaction.editReply("That user doesn't exist."); return; }

        const embed = new EmbedBuilder()
            .setDescription(`${user.username}'s nickname has been set to ${userNickname}`)
            .setColor('#d927e6');

        try {
            await interaction.reply({embeds: [embed]});
            await interaction.member.setNickname(userNickname);
        } catch (err) {
            console.log(err)
        }
    }
};