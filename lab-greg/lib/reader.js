'use strict';

const fs = require('fs');

let txt1 = `${__dirname}/data/one.txt`;
let txt2 = `${__dirname}/data/two.txt`;
let txt3 = `${__dirname}/data/three.txt`;

console.log(txt1, txt2, txt3);

const fileReader = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    return callback(data).toString();
  });
};