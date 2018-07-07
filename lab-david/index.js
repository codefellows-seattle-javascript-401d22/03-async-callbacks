'use strict';

const reader = require('./lib/reader.js');

console.log(reader([`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`], function(err, result){
    console.log(result);
}));
