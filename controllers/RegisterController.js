'use strict';

const Telegram = require('telegram-node-bot');

class RegisterController extends Telegram.TelegramBaseController {

    registerInline($) {
	$.runInlineMenu({
	    layout: 2,
	    method: 'sendMessage',
	    params: ['text'],
	    menu: [
		{
		    text: '1',
		    callback: (callbackQuery, message) => {
			console.log(1);
		    }
		},
		{
		    text: 'Exit',
		    message: 'Are you sure ?',
		    layout: 2,
		    menu: [
			{
			    text: 'Yes!',
			    callback: () => {
			    }
			},
			{
			    text: 'No!',
			    callback: () => {
			    }
			}
		    ]
		}
	    ]
	});
    }

    register($) {
        /*
        $.runMenu({
            message: 'Select:',
            layout: 2,
            'test1': () => {}, //first line
            'test2': () => {}, //first line
            'test3': () => {}, //second line
            'test4': () => {}, //second line
            'test5': () => {}, //third line
            'test6': () => {} //third line
        });
        */        
        const form = {
            name: {
                q: 'Send me your name',
                error: 'sorry, wrong input',
                validator: (message, callback) => {
                    if (message.text) {
                        callback(true, message.text); // you must pass the result also
                        return;
                    }

                    callback(false);
                }
            },
            age: {
                q: 'Send me your age',
                error: 'Sorry, wrong input',
                validator: (message, callback) => {
                    if (message.text) {
                        let age = parseInt(message.text.trim());
                        callback(true, age);
                        return;
                    }

                    callback(false);
                }
            }
        }; // const form

        $.runForm(form, (result) => {
            console.log(result);
            let self = this;
            $.runMenu({
                message: 'Save the data ?\n/1 YES\n/2 NO',
                resizeKeyboard: false,
                oneTimeKeyboard: true,
                options: {
                    parse_mode: 'Markdown' // other choice: 'HTML'
                },
                'Yes': {
                    message: 'End the session ?',
                    resizeKeyboard: false,
                    oneTimeKeyboard: true,
                    'yes': () => {
                        //console.log('chat_id:', JSON.stringify($._message.chat.id));
                        $.sendMessage("Your chat session has ended. You can comeback anytime by typing /start command");
                    },
                    'no': () => {
                        console.log('canceled');
                    }
                },
                'No': () => {
                    $.sendMessage('You have canceled your registration process');
                },
                '/1': {
 		    message: 'End the session ?',
		    resizeKeyboard: false,
		    oneTimeKeyboard: true,
		    'yes': () => {
		       $.sendMessage("Your chat session has ended. You can comeback anytime by typing /start command");
		    },
		    'no': () => {
		       $.sendMessage("Use /register for registration");
		    }
 		},
                'anyMatch': () => {
                    // will be executed at any other message
                }
            });                
        });
    }

    get routes() {
        return {
            'registerCommand': 'registerInline'
        };
    }
}

module.exports = RegisterController;
