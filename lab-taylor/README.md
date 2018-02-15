# File Reader Module
The `reader()` function exported from `reader.js` takes two parameters
 - an array of filepaths
 - a callback

It takes three filepaths to text files on your local machine and returns the first eight bytes, in hex, from those files. 

```
const reader = module.exports = function(paths, callback) {
    fs.readFile(paths[0], function(err,data) {
        if(err) return callback(err);
        let result = data.toString('hex', 0, 8);
        console.log(result);
        return callback(null, result);
    })
    fs.readFile(paths[1], function(err,data){
        if(err) return callback(err);
        let result = data.toString('hex', 0, 8);
        console.log(result);
        return callback(null, result);
    })
    fs.readFile(paths[2], function(err,data) {
        if(err) return callback(err);
        let result = data.toString('hex', 0, 8);
        console.log(result);
        return callback(null, result);
    })
}
```

