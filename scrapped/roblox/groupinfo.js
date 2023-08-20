const { util } = require("../../axios/util")
const axios = require("axios")
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

async function getInfo(id, information) {
    return new Promise(async (resolve, reject) => {
        let thing = ""
        //console.log(auth.cookie)
        await util.sendRequest("get", `https://groups.roblox.com/v2/groups?groupIds=${id}`, {}, {}).then(async (res) => {
          for (const key in res.data) {
            if (Object.hasOwnProperty.call(res.data, key)) {
              const element = res.data[key];
              element.map(async (data) => {
                if (information == "owner") {
                  return resolve(data["owner"]["id"])
                } else {
                  return resolve(data[`${information}`])
                }
              })
            }
          }
        })
        return thing
    })
}

async function getInfo2(id, information) {
    let thing = ""
    await axios({
        method: "GET",
        url: `https://groups.roblox.com/v2/groups?groupIds=${id}`
    }).then(async (res) => {
        for (const key in res.data) {
            if (Object.hasOwnProperty.call(res.data, key)) {
                const element = res.data[key];
                element.map(async (data) => {
                    if (information == "owner") {
                        return thing = (data["owner"]["id"])
                      } else {
                        return thing = (data[`${information}`])
                      }
                })
            }
        }
    })
    return thing
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('groupinfo')
		.setDescription('Gets information from a Roblox group.')
		.addStringOption(option =>
			option
				.setName('id')
				.setDescription('The group ID')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('info')
                .setDescription('Information you want to get from the group (owner, name, description, created, etc)')
                .setRequired(true)),
    async execute(interaction) {
        const groupId = interaction.options.getString('id')
        const info = interaction.options.getString('info')
        if (!groupId) { return; }
        if (!info) { await interaction.editReply("You need to specify what info you wanna get from the group."); return; }

        //let thing = getInfo2(groupId, info).

        const embed = new EmbedBuilder()
        .setTitle(`${groupId}`)
        .setDescription(`${await getInfo2(groupId, info)}`)
        .setColor('#d927e6');

        await interaction.reply({ embeds:[embed]})
    }
};
