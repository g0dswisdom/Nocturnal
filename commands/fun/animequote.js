const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('animequote')
		.setDescription('Sends an anime quote'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animu/quote"
        }).then(async resp => {
            await interaction.reply(resp.data.sentence);
        })
	},
};
