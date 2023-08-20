const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('foxfact')
		.setDescription('Sends a fox fact'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/facts/fox"
        }).then(async resp => {
            await interaction.reply(resp.data.fact);
        })
	},
};
