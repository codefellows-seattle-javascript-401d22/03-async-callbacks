'use strict';

const fs = require('fs');
const read = module.exports = function(paths, callback) {
  paths.forEach(file => {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      // console.log(data.toString().split(' ').slice(0, 8).join(' '));    
      return callback(null, data.toString());
    });
  });
};