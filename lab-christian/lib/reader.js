'use strict';

const fs = require('fs');

const reader = module.exports = function(paths, callback) {
    let result = [];

    fs.readFile(paths[0], function(err, data) {
        if (err) return callback(err);
        result.push(data.toString('hex', 0, 8));

        fs.readFile(paths[1], function(err, data) {
            if (err) return callback(err);
            result.push(data.toString('hex', 0, 8));

            fs.readFile(paths[2], function(err, data) {
                if (err) return callback(err);
                result.push(data.toString('hex', 0, 8));

                console.log('results: ', result)
                callback(null, result);
            });
        });
    });
}