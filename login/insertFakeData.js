"use strict";
var Database = require('./Database');

    setInterval(() => {
        Database.query(`INSERT INTO dados (temperatura, umidade, data_time) VALUES ('${t()}', '${u()}', NOW())`, (e, r) => {
            if (e) {
                console.error(e);
            }
            console.log('Success!');
        });
    }, 1000);

function t() {
    return 25 + Math.floor(Math.random() * 15);
}

function u() {
    return 70 + Math.floor(Math.random() * 30);
}