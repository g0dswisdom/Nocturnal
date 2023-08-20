const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { faker } = require("@faker-js/faker")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('identity')
		.setDescription('Generates a fake identity.'),
	async execute(interaction) {
        const email = faker.internet.email()
        const name = faker.name.fullName()
        const addy = faker.address.streetAddress()
        const phone = faker.phone.number('501-###-####')
		const embed = new EmbedBuilder()
		.setDescription(`Name: ${name}\nEmail: ${email}\nPhone number: ${phone}\nAddress: ${addy}`)
		.setColor('#d927e6');
		await interaction.reply({embeds:[embed]});
	},
};
