'use strict';

const reader = require('../lib/reader.js');
require('jest');

let paths = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];
// console.log(paths);

describe('Read Files Module', function() {
  describe('with correct file path', function() {
    it('should return first 8 bytes of text from one.txt', function() {
      reader(paths[0], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data.buffer).toEqual('object');
        console.log('one.txt:',data);
      });
    });
  });
  describe('with incorrect file path', function() {
    it('should return an error', function() {
      reader(`${__dirname}/../data/onez.txt`, function(err, data) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
      });
    });
  });
});