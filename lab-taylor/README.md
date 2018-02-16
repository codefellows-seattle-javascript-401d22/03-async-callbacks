# File Reader Module
The `reader()` function exported from `reader.js` takes two parameters
 - an array of filepaths
 - a callback

It takes three filepaths to text files on your local machine and returns the first eight bytes, in hex, from those files. 


```
const reader = module.exports = function(paths, callback) {
    var result = [];

    fs.readFile(paths[0], function(err,data) {
        if(err) return callback(err);
        result.push(data.toString('hex', 0, 8));
        
    
        fs.readFile(paths[1], function(err,data){
            if(err) return callback(err);
            result.push(data.toString('hex', 0, 8));
        
            fs.readFile(paths[2], function(err,data) {
                if(err) return callback(err);
                result.push(data.toString('hex', 0, 8));

                return callback(null, result);
            })
        })
    })
}
```

