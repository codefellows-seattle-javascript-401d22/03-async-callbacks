'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function() {

  describe('with improper file paths', function() {
    it('should return an error', function(done) {
      reader([`${__dirname}/don't-exist.txt`], function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        done();
      });
    });
  });

  describe('with proper file paths', function() {
    beforeAll((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`,
      ];
      done();
    });
    it('should have correct order of hex strings', done => {
      var expectedResult = [ '736f6d65', '736f6d65', '736f6d65' ];

      reader(this.paths, function(err, data) {
        console.log('data array:', data);
        expect(err).toEqual(null);
        expect(data[0]).toEqual(expectedResult[0]);
        expect(data[1]).toEqual(expectedResult[1]);
        expect(data[2]).toEqual(expectedResult[2]);
        done();
      });
    });
  });

});