'use strict';

const fs = require('fs');

const fileReader = module.exports = {};


fileReader.readFiles = (paths, callback) => {
  fileReader.results = [];

  if(paths.length === 0) {
    callback(null, fileReader.results);
    fileReader.results = [];
  } else {
    let filePath = paths.shift();

    fs.readFile(filePath, (err, data) => {
      if(err)
        return callback(err);

      fileReader.results.push(data.toString());
      fileReader.readFiles(paths, callback);
    });
  }
};

// fileReader.getPath = (file) => {
//   if(typeof file !== 'string')
//     throw new TypeError(`expected file name to be a string`);

//   return `${__dirname}/../data/${file}`;
// };