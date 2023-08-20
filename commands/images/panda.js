const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('panda')
		.setDescription('Sends a panda image'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://some-random-api.ml/animal/panda"
        }).then(async resp => {
            await interaction.reply(resp.data.image);
        })
	},
};
