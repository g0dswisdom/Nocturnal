const figlet = require("figlet");
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ascii')
		.setDescription('Converts given text to ascii')
        .addStringOption(option =>
			option
				.setName('text')
				.setDescription('The text to convert')
                .setRequired(true)),
	async execute(interaction) {
        const text = interaction.options.getString('text');
        figlet.text(text, function(err, data) {
            if(!err) {
                interaction.reply("```\n" + data + "```")
            }
        })
	},
};
