'use strict';

const fileReader = require('../lib/reader.js');
require('jest');

describe('File Reader Module', function(){
    describe('with improper file path', function(){
        it('should return an error', function(){
            fileReader(`${__dirname}/no-file.txt`, function(err){
                expect(err).toBeTruthy();
                expect(typeof err).toBe('object');
            });
        });
    describe('with proper file path', function(){
        it('should return first 8 bytes of binary info', function(){
            fileReader([`${__dirname}/../data/one.txt`], function(err, data){
                expect(err).toBe(null);
                expect(typeof data).toBe('string');
            })
        })
    })
  })
})