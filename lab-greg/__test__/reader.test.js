'use strict';

let txt1 = `${__dirname}/../data/one.txt`;
let txt2 = `${__dirname}/../data/two.txt`;
let txt3 = `${__dirname}/../data/three.txt`;

let allData = [txt1, txt2, txt3];

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function() {
  describe('with an bad file path', function() {
    it('should return an error', function(done) {
      reader.fileReader(`${__dirname}/derpaderp.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
        done();
      });
    });
  });
  describe('with a valid file path', function() {
    it('should return our file', function(done) {
      reader.fileReader(txt1, function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('string');
        expect(data.toString()).toEqual('Groovy, this is the first thing with text, whoopie!');
        done();
      });
    });
  });
  describe('.txt files converted properly', function() {
    it('should return an the first 8 bits in hexidecimal for the first index in the allData array', function(done) {
      reader.hexConverter(allData[0], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('string');
        let result = reader.hexConverter(allData[0], function(err, data) {
          if(err) throw err;
          console.log(data.toString('hex', 0 ,8));
          return data.toString('hex', 0 ,8);
          
        });
        expect(result).toEqual('47726f6f76792c20');
      });
      reader.hexConverter(allData[1], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('string');
        let result = reader.hexConverter(allData[1], function(err, data) {
          if(err) throw err;
          let strData = (data.toString('hex', 0 ,8));
          return strData;
        });
        expect(result).toEqual('5468697320697320');
      });
      reader.hexConverter(allData[2], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('string');
        let result = reader.hexConverter(allData[2], function(err, data) {
          if(err) throw err;
          let strData = (data.toString('hex', 0 ,8));
          return strData;
        });
        expect(result).toEqual('436f776162756e67');
      });
      done();
    });
  });
});
