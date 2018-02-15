'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function() {
  describe('with improper arguments', function() {
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

  describe('with an improper file path', function() {
    it('should return an error', function() {
      reader([`${__dirname}/../data/dgsweg.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
      });
    });
  });

  describe('with proper arguments and proper file path', function() {
    it('should return file contents', function() {
      reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('object');
        expect(data).toEqual([ '53697474696e6720', '7368652073616964', '596f752072656163' ]);
      });
    });
  });

});