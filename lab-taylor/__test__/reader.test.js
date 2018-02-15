'use srict';

const reader = require('../lib/reader.js');
require('jest');

describe('File Reader Module', function() {
    describe('with an invalid array of paths', function() {
        it('should throw an error', function(done) {
            reader([`${__dirname}/not-a-file.txt`,`${__dirname}/not-a-file.txt`,`${__dirname}/not-a-file.txt`], function(err) {
                expect(err).toBeTruthy();
                expect(typeof err).toBe('object');
                expect(err.code).toBe('ENOENT');
                done();
            });    
        });
    });
    describe('with a proper array of paths', function() {
        it('should return 8 bytes from each file in paths', function(done) {
            reader([`${__dirname}/../data/one.txt`,`${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err,data){
                expect(err).toBe(null);
                expect(typeof data).toBe('string');
                done();
            });
        });
    });
});