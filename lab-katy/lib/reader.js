'use strict';

const fs = require('fs');

const fileReader = module.exports = function(paths, callback) {
    fs.readFile(paths[0], function(err, data){
        if (err) return callback(err);

        var result = data.toString('hex', 0, 7);
    
        return callback(null, result);
        console.log(result);
    });
};

