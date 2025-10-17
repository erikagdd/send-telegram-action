const core = require('@actions/core');
const TelegramBot = require('node-telegram-bot-api');

async function run() {
  try {
    const name = core.getInput('name');
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const bot = new TelegramBot(token);

    const message = `Workflow executat correctament després de l'últim commit. Salutacions ${name}`;
    await bot.sendMessage(chatId, message);

    console.log("Mensaje enviat.");
  } catch (error) {
    core.setFailed(`Error: ${error.message}`);
  }
}

run();
