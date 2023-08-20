const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kangaroo')
		.setDescription('Sends a kangaroo image'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animal/kangaroo"
        }).then(async resp => {
            await interaction.reply(resp.data.image);
        })
	},
};
