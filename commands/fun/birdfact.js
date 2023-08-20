const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('birdfact')
		.setDescription('Sends a birb fact'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/facts/bird"
        }).then(async resp => {
            await interaction.reply(resp.data.fact);
        })
	},
};
