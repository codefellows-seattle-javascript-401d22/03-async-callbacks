'use strict';

const fs = require('fs');

module.exports = function(fileArr, callback) {

  if (!callback) throw new Error('no callback provided');
  if (!Array.isArray(fileArr)) return null;
  if(fileArr.length !== 3) return null;

  fs.readFile(fileArr[0], function (err, data) {
    if (err) return callback(err);
    callback(null, data.toString('hex', 0, 8));
    fs.readFile(fileArr[1], function(err, data) {
      if (err) return callback(err);
      callback(null, data.toString('hex', 0, 8));
      fs.readFile(fileArr[2], function(err, data) {
        if (err) return callback(err);
        callback(null, data.toString('hex', 0, 8));
  
      })
    })
  })

}