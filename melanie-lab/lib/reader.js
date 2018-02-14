'use strict';

const fs = require('fs');

const reader = module.exports = function(paths, callback) {
  fs.readFile(paths, function(err, data) {
    if (err) return callback(err);
    data = Buffer.from(data);
    data = data.slice(0,8);
    var dataOne = (null, data);

    fs.readFile(paths, dataOne, function(err, data) {
      if (err) return callback(err);
      data = Buffer.from(data);
      data = data.slice(0,8);
      var dataTwo = callback(null, data);

      fs.readFile(paths, dataOne, dataTwo, function(err, data) {
        if (err) return callback(err);
        data = Buffer.from(data);
        data = data.slice(0,8);

        callback(null, data);
      });
    });
  });
};