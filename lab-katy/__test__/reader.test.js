'use strict';

const fileReader = require('../lib/reader.js');
require('jest');

describe('File Reader Module', function(){
    describe('with improper file path', function(){
        it('should return an error', function(done){
            fileReader(`${__dirname}/no-file.txt`, function(err){
                expect(err).toBeTruthy();
                expect(typeof err).toBe('object');
                done();
            });
        });
    describe('with proper file path', function(){
        it('should return first 8 bytes of binary info', function(done){
            fileReader([`${__dirname}/../data/one.txt`], function(err, data){
                expect(err).toBe(null);
                expect(typeof data).toBe('string');
                done();
            });
        });
        it('should return first 8 bytes of binary info for 2nd path', function(done){
            fileReader([`${__dirname}/../data/two.txt`], function(err, data){
                expect(err).toBe(null);
                expect(typeof data).toBe('string');
                done();
            });
        });
        it('should return first 8 bytes of binary info for 3nd path', function(done){
            fileReader([`${__dirname}/../data/three.txt`], function(err, data){
                expect(err).toBe(null);
                expect(typeof data).toBe('string');
                done();
            });
        });
    })
  })
})