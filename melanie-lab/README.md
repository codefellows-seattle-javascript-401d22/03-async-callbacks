![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 03: Asynchronous Callbacks
===

### Module Documentation

#### FP (functional programming) Module
The `reader.js` module in the `lib` directory is a single function that is exported with an arity of two: paths and callback. 

This function reads the contents of three separate files and then writes the contents as a sliced buffer. Each readFile function within the overall function passes data to the next readFile function.

All data passed through is expected to be a Buffer object and to return the first 8 bytes of text from its corresponding text file.