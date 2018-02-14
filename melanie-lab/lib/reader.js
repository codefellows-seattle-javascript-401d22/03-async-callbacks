'use strict';

const fs = require('fs');

const reader = module.exports = function(paths, callback) {
  fs.readFile(paths, function(err, data) {
    if (err) return callback(err);

    data = Buffer.from(data);
    data = data.slice(0,8);

    return callback(null, data);
  });
};


/* In the lib/ directory, create a reader.js module that exports a single function. The reader module should take an array of three file paths and console.log the first 8 bytes (in hex) of each file. All three files should be read and logged in the order one.txt, two.txt, three.txt.

The file reader module should have the function signature (paths, callback) => undefined
On failure, the file reader module should invoke the callback with an error callback(error)
On success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(null, result)
*/
