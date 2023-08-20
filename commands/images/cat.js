const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Sends a cat image'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animal/cat"
        }).then(async resp => {
            await interaction.reply(resp.data.image);
        })
	},
};
