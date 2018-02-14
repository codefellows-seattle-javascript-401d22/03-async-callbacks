'use strict';

const reader = require('./lib/reader.js');

console.log('Reader Ans:', reader([`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`], function(err, data){
    console.log(data);
}));