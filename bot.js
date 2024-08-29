require('dotenv').config();
const { Telegraf, Markup } = require("telegraf");
const TOKEN = process.env.TOKEN;
const bot = new Telegraf(TOKEN);
const desText = `
This is a simle telegram bot.
`;

const cert = "Made with 💖 by HighTech";

bot.command("start", (ctx) => {
    return ctx.reply(
        `${desText}\n${cert}`,
        Markup.inlineKeyboard([
            Markup.button.webApp(
                `💻Launch MiniApp`,
                "https://telegram-miniapp-three.vercel.app/"
            ),
            Markup.button.url(
                `🌐Website`,
                "https://telegram-miniapp-three.vercel.app/"
            ),
        ])
    );
});

bot.launch();