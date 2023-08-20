const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pandafact')
		.setDescription('Sends a panda fact'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/facts/panda"
        }).then(async resp => {
            await interaction.reply(resp.data.fact);
        })
	},
};
