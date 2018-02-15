'use strict';

const reader = require('../lib/reader.js');
require('jest');
describe('Reader Module', function() {
  describe('with an improper file path', function() {
    it('should throw argument data type error', function() {
      expect(function() {
        reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], []);
      }).toThrow('argument data type error');
      expect(function() {
        reader({}, function() {});
      }).toThrow('argument data type error');
    });
    it('should throw argument number error', function() {
      expect(function() {
        reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function() {}, function() {});
      }).toThrow();
      expect(function() {
        reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function() {}, function() {});
      }).toThrow('must have exactly 2 arguments');
    });
    it('should throw array length error', function() {
      expect(function() {
        reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`], function(){});
      }).toThrow();
      expect(function() {
        reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`], function(){});
      }).toThrow('file length not 3');
    });
  });
});
// it('should return an error', function(done) {
//   reader([`${__dirname}/../data/one.txt]`], function(err) {
//     expect(err).toBeTruthy();
//     expect(typeof err).toBe('object');
//     expect(err.code).toBe('ENOENT');
//     done();
//     // error is an object with a code parameter that is a string data-type
//     // ENOENT IS A file that is not found
//     // EISDIR
//   });
// });
// it('should return a data-type error', function(done) {
//   reader(`${__dirname}/../data/one.txt`, function(err) {
//     expect(err).roBeTruthy();
//     done();
//   });
// });
//   it('should throw argument numer error', function() {
//     expect(function() {
//       reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], [1], [1])
//     .toThrow();
//     expect(function() {
//       largestTwo({key1: 5})
//     }).toThrow('argument data type error');
//   });
// });


// it('should throw argument number error', function() {
//   expect(function() {
//     reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], [1], [1])
//   }).toThrow();
//   expect(function() {
//     reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], [1], [1])
//   }).toThrow('must have exactly 2 arguments');
// });


// not success in finding File
// array length 3
// array datatypes and callback is a function