'use strict';

const reader = require('../lib/reader.js');
require('jest');

let paths = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];

describe('Read Files Module', function() {
  describe('with incorrect file path', function() {
    it('should return an error', function() {
      reader(`${__dirname}/../data/onez.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
      });
    });
  });
  describe('with no data passed through', function() {
    it('should return an error with no data', function() {
      reader(paths[0], function(err) {
        expect(err).toBe(null);
      });
    });
  });
  describe('with correct file path', function() {
    it('should return first 8 bytes of text from one.txt', function() {
      reader(paths[0], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data.buffer).toEqual('object');
        console.log('one.txt:', data);
      });
    });
  });
  describe('with correct file path round 2', function() {
    it('should return first 8 bytes of text from two.txt', function() {
      reader(paths[1], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data.buffer).toEqual('object');
        console.log('two.txt:', data);
      });
    });
  });
  describe('with correct file path round 3', function() {
    it('should return first 8 bytes of text from two.txt', function() {
      reader(paths[2], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data.buffer).toEqual('object');
        console.log('three.txt:', data);
      });
    });
  });
});