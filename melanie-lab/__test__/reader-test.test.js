'use strict';

const reader = require('../lib/reader.js');
require('jest');

let paths = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];

describe('Read Files Module', function() {
  describe('with incorrect file path', function() {
    it('should return an error', function(done) {
      reader(`${__dirname}/../data/onez.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        done();
      });
    });
  });
  describe('with correct file path', function() {
    it('should return error when no data is passed through', function(done) {
      reader(paths[0], function(err) {
        expect(err).toBe(null);
        done();
      });
    });
    it('should accept two arguments', function(done) {
      expect(arguments.length === 2);
      done();
    });
    it('should return first 8 bytes of text from one.txt', function(done) {
      reader(paths[0], function(err, data) {
        expect(err).toBe(null);
        expect(typeof paths[0]).toEqual('string');
        expect(typeof data.buffer).toEqual('object');
        expect(data.toString()).toEqual('One file');
        console.log('one.txt:', data);
        done();
      });
    });
  });
  describe('with correct file path round 2', function() {
    it('should return error when no data is passed through', function(done) {
      reader(paths[1], function(err) {
        expect(err).toBe(null);
        done();
      });
    });
    it('should return first 8 bytes of text from two.txt', function(done) {
      reader(paths[1], function(err, data) {
        expect(err).toBe(null);
        expect(typeof paths[1]).toEqual('string');
        expect(typeof data.buffer).toEqual('object');
        expect(data.toString()).toEqual('File num');
        console.log('two.txt:', data);
        done();
      });
    });
  });
  describe('with correct file path round 3', function() {
    it('should return error when no data is passed through', function(done) {
      reader(paths[2], function(err) {
        expect(err).toBe(null);
        done();
      });
    });
    it('should return first 8 bytes of text from two.txt', function(done) {
      reader(paths[2], function(err, data) {
        expect(err).toBe(null);
        expect(typeof paths[2]).toEqual('string');
        expect(typeof data.buffer).toEqual('object');
        expect(data.toString()).toEqual('The thir');
        console.log('three.txt:', data);
        done();
      });
    });
  });
});