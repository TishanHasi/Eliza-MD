const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/9qP72Tv/Picsart-24-10-05-02-41-54-744.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "Hello..I'm Queen Eliza multi-device Whatsapp bot..I'm Alive now",
};
