'use strict';

const read = require('./lib/reader.js');

var paths = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`]
read(paths, function(err, data) {
  if(err) throw err;
  console.log(data.toString('hex').split(' ').slice(0,8).join(' '));
  // console.log(data);
})