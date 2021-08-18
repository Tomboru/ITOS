const { Client, Intents, DiscordJS} = require('Discord.js');
require('dotenv').config({path:__dirname+'/Config/.env'});

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log("Online")
})

client.login(process.env.DISCORDTOKEN)