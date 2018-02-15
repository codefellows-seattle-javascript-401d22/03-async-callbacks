'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.fileReader = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    return callback(null, data.toString());
  });
};

exports.hexConverter = function(file, callback) {
  var result;
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    result = (null, data.toString('hex', 0, 8));
    console.log(result);
    return result;
  });
};


