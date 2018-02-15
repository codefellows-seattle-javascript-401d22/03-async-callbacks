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
    });
})