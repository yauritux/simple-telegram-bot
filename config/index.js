'use strict';

module.exports = {
    "dev": {
        "webAdmin": {
            "port": 9999,
            "host": "localhost"
        },
        "workers": 1
    },
    "prod": {
        "webAdmin": {
            "port": 9999,
            "host": ""
        },
        "workers": 3
    }
};