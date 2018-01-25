'use strict';

const Telegram = require('telegram-node-bot');
const tg = new Telegram.Telegram('387374499:AAEJuPQJHVgq-mzC3ThM6UZPQb54248Fvdg');

const HelpController = require('./controllers/HelpController');
const PingController = require('./controllers/PingController');
const StartController = require('./controllers/StartController');
const OtherwiseController = require('./controllers/OtherwiseController');

tg.router
    .when(new Telegram.TextCommand('/ping', 'pingCommand'), new PingController())
    .when(new Telegram.TextCommand('/help', 'helpCommand'), new HelpController())
    .when(new Telegram.TextCommand('/start', 'startCommand'), new StartController())
    .otherwise(new OtherwiseController()); 