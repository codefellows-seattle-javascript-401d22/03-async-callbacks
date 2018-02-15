'use strict';

const fs = require('fs');

const reader = module.exports = function(pathArray, callback) {
  let result = [];

  fs.readFile(pathArray[0], function(err, data) {
    if(err) return callback(err);
    result.push(data.toString('hex', 0, 4));

    fs.readFile(pathArray[1], function(err, data) {
      if(err) return callback(err);
      result.push(data.toString('hex', 0, 4));

      fs.readFile(pathArray[2], function(err, data) {
        if(err) return callback(err);
        result.push(data.toString('hex', 0, 4));
        console.log('results:', result);
        callback(null, result);
      });
    });
  });
};