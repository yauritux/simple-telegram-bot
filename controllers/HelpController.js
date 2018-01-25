'use strict';

const Telegram = require('telegram-node-bot');

class HelpController extends Telegram.TelegramBaseController {

    helpHandler($) {
        $.sendMessage(`All commands supported by this Bot:
            /help display this manual
            /start start new chat session
            /ping test bot connection
            /stop stop (end) the chat session`);
    }

    get routes() {
        return {
            'helpCommand': 'helpHandler'
        };
    }
}

module.exports = HelpController;