'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function(){
    describe('with an invalid file path', function(){
        it('should return an error', function(){
            reader([`${__dirname}/doesntexists.pdf`], function(err){    
                expect(err).toBeTruthy();
                expect(typeof err).toBe('object');
                expect(err.code).toBe('ENOENT');
            })
        });
    });
    describe('with a valid file path', function(){
        it('should return the first 8 bytes of the each file', function(){
            reader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err, data){
               expect(err).toBe(null);
               expect(Array.isArray(data)).toBeTruthy();
               expect(data).toEqual(['4c65', '4f21', '5468'])    
            });
        })
    })
})