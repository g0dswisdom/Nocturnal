const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask the 8ball a question!')
        .addStringOption(option =>
			option
				.setName('text')
				.setDescription('The question')
                .setRequired(true)),
	async execute(interaction) {
        const question = interaction.options.getString('text');
        const responses = ["It is certain.","It is decidedly so.","Without a doubt.","Yes - definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.","Outlook not so good.","My sources say no.","Very doubtful."];
        const response = responses[Math.floor(Math.random() * responses.length)]
        const embed = new EmbedBuilder()
            .setTitle("The 8ball says..")
            .setDescription(`${response}`)
            .setColor('#d927e6');
        interaction.reply({embeds:[embed]})
	},
};
