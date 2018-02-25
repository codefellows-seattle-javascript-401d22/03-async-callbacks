'use strict';

require('jest');
const fileReader = require('../lib/reader.js');

let firstPath = `${__dirname}/../data/one.txt`;

let secondPath = `${__dirname}/../data/two.txt`;

let thirdPath = `${__dirname}/../data/three.txt`;

let pathsArray = [firstPath, secondPath, thirdPath];

describe('reader.js', () => {
  it('expecting data to be an array of paths', (done) => {
    
    fileReader.readFiles(pathsArray, (error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual(pathsArray);
      expect(typeof data).toEqual('object');
       
      console.log(pathsArray);
      done();
    });
  });
});
