'use strict';

const fs = require('fs');

const reader = module.exports = function(arr, callback){
    return arr.map(file => {
        fs.readFile(file, function(err,callback){
            if(err) return callback(err);
            return callback(null, data.toString('hex').split(' ').slice(0, 3));
        });
    });
}