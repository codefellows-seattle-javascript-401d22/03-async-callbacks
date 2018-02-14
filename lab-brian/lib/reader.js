'use strict';

const fs = require('fs');

const reader = module.exports = function(file, callback) {
  fs.readFile(file[0], function(err, data) {
    let byteArr = [];
    if (err) return callback(err);
    byteArr.push(data.toString());
    // console.log('data: ', data.toString(), 'byteArr: ', byteArr);
    fs.readFile(file[1], function(err, data1) {
      if (err) return callback(err);
      // console.log('2nd cl', data, data.toString('hex'));
      byteArr.push(data1.toString());
      // console.log('data: ', data1.toString(), 'byteArr: ', byteArr);
      fs.readFile(file[2], function(err, data2) {
        if (err) return callback(err);
        // console.log('3rd cl', data, data.toString('hex'));
        byteArr.push(data2.toString());
        // console.log('bytearr', byteArr);
        // console.log(callback(null, byteArr));
        return callback(null, byteArr);
        // console.log('data: ', data2.toString(), 'byteArr: ', byteArr);
        // return callback(null, data.toString());
      });
      // return callback(null, data.toString());
    });
    // return callback(null, data.toString());
    // callback(null, byteArr);
    // console.log('bytearr', byteArr);
    // return callback(null, byteArr);
  });
};
// console.log('absolute path', __dirname);
// console.log(reader);

