const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fox')
		.setDescription('Sends a fox image'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animal/fox"
        }).then(async resp => {
            await interaction.reply(resp.data.image);
        })
	},
};
