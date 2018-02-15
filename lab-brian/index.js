'use strict';

const reader = require('./lib/reader.js');
const callback = require('./lib/callback.js');

// console.log('absolute path', __dirname);
console.log(reader([`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`], callback));