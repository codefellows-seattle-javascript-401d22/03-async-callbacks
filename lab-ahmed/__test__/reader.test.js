'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function() {
  describe('not a file', function() {
    it('should return an error', function() {
      reader([`${__dirname}/../data/onez.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toBe('ENOENT');
      });
    });
  });

  describe('right data', function() {
    beforeAll((done) => {
      this.file = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];
      done();
    });
    it('correct array with hex strings', () => {
      var expectedArr = [ '68656c6c', '616c6d6f', '77687920' ];
      console.log('this,.file', this.file)
      reader(this.file, function(err, data) {
        expect(err).toEqual(null);
        expect(data[0]).toEqual(expectedArr[0]);
        expect(data[1]).toEqual(expectedArr[1]);
        expect(data[2]).toEqual(expectedArr[2]);
      });
    });
  });
});