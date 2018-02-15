const reader = require('../lib/reader.js');
require('jest');

var files = ['./data/one.txt', './data/two.txt', './data/three.txt'];
var fakeFiles = ['./data/woo.txt', './data/woohoo.txt', './data/wee.txt'];
var moreFake = ['./data/one.txt'];
var moreFake2 = ['./data/one.txt', './data/two.txt'];
var moreFake3 = ['./data/one.txt', './data/two.txt', './data/dne.txt'];


describe('Reader Module', function() {
  describe('with an improper file array', function() {
    it('should return an error', function(done) {
      reader(fakeFiles, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
      })
      done();
    })
    it('should return null', function(done) {
      expect(reader('woo', function() {
          console.log(data);
        })).toBe(null);
      done();
    })
    it('should return null when there is only one value in array', function(done) {
      expect(reader(moreFake, function(err, data) {
        console.log(data);
      })).toBe(null);
      done();
    })
    it('should return null when there is only two values in array', function(done) {
      expect(reader(moreFake2, function(err, data) {
        console.log(data);
      })).toBe(null);
      done();
    })
  })

  describe('with a proper file path', function() {
    it('should return hex of the first 8 chars in each file', function() {
      reader(files, function(err, data) {
        console.log(data);
        expect(err).toBe(null);
        expect(typeof data).toBe('string');
      })
    })

  })

  describe('without a callback provided', function() {
    it('should return an error', function() {
      expect(reader).toThrow();
    }) 
  })
})