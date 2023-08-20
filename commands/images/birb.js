const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('birb')
		.setDescription('Sends a birb image'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animal/bird"
        }).then(async resp => {
            await interaction.reply(resp.data.image);
        })
	},
};
