'use strict';

const fs = require('fs');

const reader = module.exports = function(arr, callback){
    var result = Array.prototype.map.call(arr, function(file) {
        fs.readFile(file, function(err, data){
            if(err) return callback(err);
            return callback(null, data.toString('hex', 0, 8));
        });
    });
}
