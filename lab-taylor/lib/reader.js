'use strict';

const fs = require('fs');

const reader = module.exports = function(paths, callback) {
    fs.readFile(paths[0], function(err,data) {
        if(err) return callback(err);
        let result = data.toString('hex', 0, 8);
        console.log(result);
        return callback(null, result);
    })
    fs.readFile(paths[1], function(err,data){
        if(err) return callback(err);
        let result = data.toString('hex', 0, 8);
        console.log(result);
        return callback(null, result);
    })
    fs.readFile(paths[2], function(err,data) {
        if(err) return callback(err);
        let result = data.toString('hex', 0, 8);
        console.log(result);
        return callback(null, result);
    })
}


    
    
    

    
        


    
