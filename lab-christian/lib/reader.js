'use strict';

const fs = require('fs');

const reader = module.exports = function(paths, callback) {
    fs.readFile(paths[0], function(err, data) {
        if (err) return callback(err)

        
    })
}