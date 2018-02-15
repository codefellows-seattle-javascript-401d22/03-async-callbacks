### Reader Module
- Reader module accepts an array of .txt paths and a callback function
- Callback data returns the first 8 bytes of each file in hexidecimal coding
- [bug] reader.js currently doesn't populate the map array with the datat returned from fs.readFile

### Reader Test Module
- Reader Test uses jest to test whether reader.js has been passed a valid file path
- It then tests whether reader.js returns the correct array of hexidecmals, which it currently doesn't