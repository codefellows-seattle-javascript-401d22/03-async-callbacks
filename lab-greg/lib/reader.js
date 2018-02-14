'use strict';

const fs = require('fs');

let txt1 = `${__dirname}/data/one.txt`;
let txt2 = `${__dirname}/data/two.txt`;
let txt3 = `${__dirname}/data/three.txt`;


let buff1 = new Buffer(txt1);
let buff2 = new Buffer(txt2);
let buff3 = new Buffer(txt3);

let allData = [buff1, buff2, buff3];

const fileReader = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    return callback(data).toString();
  });
};

