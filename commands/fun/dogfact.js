const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dogfact')
		.setDescription('Sends a dog fact'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/facts/dog"
        }).then(async resp => {
            await interaction.reply(resp.data.fact);
        })
	},
};
