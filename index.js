'use strict';

const Telegram = require('telegram-node-bot');
const config = require('./config');
/*
const tg = new Telegram.Telegram('387374499:AAEJuPQJHVgq-mzC3ThM6UZPQb54248Fvdg', {
    webAdmin: {
        port: config.dev.webAdmin.port,
        host: config.dev.webAdmin.host
    },
    workers: config.dev.workers
});
*/
const tg = new Telegram.Telegram('387374499:AAEJuPQJHVgq-mzC3ThM6UZPQb54248Fvdg');

const HelpController = require('./controllers/HelpController');
const PingController = require('./controllers/PingController');
const StartController = require('./controllers/StartController');
const RegisterController = require('./controllers/RegisterController');
const OtherwiseController = require('./controllers/OtherwiseController');

tg.router
    .when(new Telegram.TextCommand('/ping', 'pingCommand'), new PingController())
    .when(new Telegram.TextCommand('/help', 'helpCommand'), new HelpController())
    .when(new Telegram.TextCommand('/start', 'startCommand'), new StartController())
    .when(new Telegram.TextCommand('/register', 'registerCommand'), new RegisterController())
    .otherwise(new OtherwiseController()); 