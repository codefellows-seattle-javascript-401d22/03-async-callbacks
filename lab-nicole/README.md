### File Reader and Encoder

The file reader created expects two parameters, the first being an array of file paths, and the second being a callback function. The expected output when correctly used are console.logs of the hexadecimal representation of the first 8 characters in the files that we provided in our data folder.
The file reader will throw errors when:
- The file paths are incorrect, aka do not point to anything. This will throw an error.
- If there is no callback provided, it will throw the error 'no callback provided'.
- The array provided does not have 3 file paths, or one of them is incorrect, the function will return null.
- If the first parameter provided is not an array, it will return null.