'use strict';

const fs = require('fs');

const fileReader = module.exports = function(paths, callback) {
    fs.readFile(paths[0], function(err, data){
        if (err) return callback(err);

        var result = data.toString('hex', 0, 8);
        console.log(result);
        return callback(null, result);

        fs.readFile(paths[1], function(err, data){
            if (err) return callback(err);

            var result2 = data.toString('hex', 0, 8);
            console.log(result2);
            return callback(null, result2);

            fs.readFile(paths[2], function(err, data){
                if(err) return callback(err);

                var result3 = data.toString('hex', 0, 8);
                console.log(result3);
                return callback(null, result3);
            });
        });
    });
};

