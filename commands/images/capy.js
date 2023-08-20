const { SlashCommandBuilder } = require('discord.js');
const axios = require("axios")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('capy')
		.setDescription('Sends a capybara in chat'),
	async execute(interaction) {
        axios({
            method: "GET",
            url: "https://api.capy.lol/v1/capybara?json=true"
        }).then(async resp => {
            await interaction.reply(resp.data.data.url);
        })
	},
};
