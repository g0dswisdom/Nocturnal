const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Sends a hug gif'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animu/hug"
        }).then(async resp => {
            await interaction.reply(resp.data.link);
        })
	},
};
