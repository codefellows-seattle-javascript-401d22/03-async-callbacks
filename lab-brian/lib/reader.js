'use strict';

const fs = require('fs');

const reader = module.exports = function(file, callback) {
  fs.readFile(file[0], function(err, data) {
    let byteArr = [];
    if (err) return callback(err);
    // console.log(data, Buffer.byteLength(data, 'utf8'));
    data = Buffer.from(data);
    data = data.slice(0,8);
    byteArr.push(data.toString('hex'));
    fs.readFile(file[1], function(err, data1) {
      if (err) return callback(err);
      data1 = Buffer.from(data1);
      data1 = data1.slice(0,8);
      byteArr.push(data1.toString('hex'));
      fs.readFile(file[2], function(err, data2) {
        if (err) return callback(err);
        data2 = Buffer.from(data2);
        data2 = data2.slice(0,8);
        byteArr.push(data2.toString('hex'));
        return callback(null, byteArr);
      });
    });
  });
};