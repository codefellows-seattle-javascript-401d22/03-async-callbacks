'use strict';

const fs = require('fs');

const reader = module.exports = function(pathArray, callback){
  var arr = [];

  console.log('sdfsdfsdfsdf', pathArray)

  fs.readFile(pathArray[0], function(err, data) {
    console.log('pathArray:', pathArray);
    if (err) throw err;
    data = new Buffer(data);
    data = data.toString('hex');
    data = data.slice(0, 8);
    arr.push(data);
console.log('@', pathArray[1])
    fs.readFile(pathArray[1], function(err, data) {
      console.log('2');
      if (err) throw err;
      data = new Buffer(data);
      data = data.toString('hex');
      data = data.slice(0, 8);
      arr.push(data);

      fs.readFile(pathArray[2], function(err, data) {
        console.log('3');
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
