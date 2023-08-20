const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('raccoon')
		.setDescription('Sends a raccoon image'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animal/raccoon"
        }).then(async resp => {
            await interaction.reply(resp.data.image);
        })
	},
};
