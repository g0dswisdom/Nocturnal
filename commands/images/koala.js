const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('koala')
		.setDescription('Sends a koala image'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animal/koala"
        }).then(async resp => {
            await interaction.reply(resp.data.image);
        })
	},
};
