'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Read File Module', function() {
    describe('with improper file paths', function() {
        it('should return an error', function(done) {
            reader([`${__dirname}/dont-exist.txt`,`${__dirname}/dont-exist.txt`,`${__dirname}/dont-exist.txt`],function(err) {
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
        it('should have the correct order of hex strings', done => {
            var expectedResult = [ '7468697320697320', '77726974696e6720', '49276d20676f696e'];

            reader(this.paths, function(err,data) {
                console.log(data);
                expect(err).toEqual(null);
                expect(typeof data[0]).toBe('string');
                expect(typeof data[1]).toBe('string');
                expect(typeof data[2]).toBe('string');
                expect(data[0]).toEqual(expectedResult[0]);
                expect(data[1]).toEqual(expectedResult[1]);
                expect(data[2]).toEqual(expectedResult[2]);
                done();
            })
        });
    });
});