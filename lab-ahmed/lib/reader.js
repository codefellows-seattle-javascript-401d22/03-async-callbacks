'use strict';

const fs = require('fs');

const reader = module.exports = function(pathArray, callback){
  var arr = [];


  fs.readFile(pathArray[0], function(err, data) {
    if (err) throw err;
    data = new Buffer(data);
    data = data.toString('hex');
    data = data.slice(0, 8);
    arr.push(data);
    fs.readFile(pathArray[1], function(err, data) {
      if (err) throw err;
      data = new Buffer(data);
      data = data.toString('hex');
      data = data.slice(0, 8);
      arr.push(data);

      fs.readFile(pathArray[2], function(err, data) {
        if (err) throw err;
        data = new Buffer(data);
        data = data.toString('hex');
        data = data.slice(0, 8);
        arr.push(data);
        callback(null, arr);
      });
    });
  });

}
