'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function() {
      reader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
        // error is an object with a code parameter that is a string data-type
        // ENOENT IS A file that is not found
      });
    });
  });

});