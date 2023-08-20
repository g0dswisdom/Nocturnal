const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wink')
		.setDescription('Sends a wink gif'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animu/wink"
        }).then(async resp => {
            await interaction.reply(resp.data.link);
        })
	},
};
