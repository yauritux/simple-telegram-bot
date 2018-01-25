'use strict';

const Telegram = require('telegram-node-bot');

class StartController extends Telegram.TelegramBaseController {

    startHandler($) {
        $.sendMessage('Welcome to IbanezBlack Chatbot App. use /help command to list all supported commands.');
    }

    get routes() {
        return {
            'startCommand': 'startHandler'
        };
    }
}

module.exports = StartController;