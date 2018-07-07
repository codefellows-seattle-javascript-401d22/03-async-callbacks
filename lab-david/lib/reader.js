'use strict';

const fs = require('fs');

const reader = module.exports = function(arr, callback){
  var result = [];
  fs.readFile(arr[0], function(err, data){
    if(err) return callback(err);
    result.push(data.toString('hex', 0, 8));
    fs.readFile(arr[1], function(err, data){
      if(err) return callback(err);
      result.push(data.toString('hex', 0, 8));
      fs.readFile(arr[2], function(err, data){
        if(err) return  callback(err);
        result.push(data.toString('hex', 0, 8));
        return callback(null, result);
      });
    });
  });
};
