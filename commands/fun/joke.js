const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Sends a joke'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/others/joke"
        }).then(async resp => {
            await interaction.reply(resp.data.joke);
        })
	},
};
