'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {

    handle($) {
        $.sendMessage('Sorry, we don\'t recognize your command. Please type /help to see all supported commands.');
    }
}

module.exports = OtherwiseController;