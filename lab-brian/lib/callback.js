'use strict';

const callback = module.exports = function(err, data) {
  if(err) throw err;
  console.log('got some data', data);
};

// console.log(callback);