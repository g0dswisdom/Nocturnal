const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('part')
		.setDescription('Sends a pat gif'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animu/pat"
        }).then(async resp => {
            await interaction.reply(resp.data.link);
        })
	},
};
