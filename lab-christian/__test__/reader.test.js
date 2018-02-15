'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('#Reader Module', function() {
    describe('with improper file paths', function() {
        it('should return an error', function(done) {
            reader([`${__dirname}/dont-exist.txt`], function(err) {
                expect(err).toBeTruthy();
                expect(err.code).toEqual('ENOENT');
                done();
            });
        });
    });
    describe('with proper file path', function() {
        beforeAll((done) => {
            this.paths = [
                `${__dirname}/../data/one.txt`,
                `${__dirname}/../data/two.txt`,
                `${__dirname}/../data/three.txt`
            ];
            done();
        });
        it('should have the correct order of hex strings', done => {
            var expectedResult = ['49206c696b652042', '4920616c736f206c', '526f636b6574204c'];
            reader(this.paths, function(err, data) {
                expect(err).toEqual(null);
                expect(data[0]).toEqual(expectedResult[0]);
                expect(data[1]).toEqual(expectedResult[1]);
                expect(data[2]).toEqual(expectedResult[2]);
                done();
            });
        });
    });
})