##Day 3 Lab

In your README.md describe the exported values of the module you have defined. Your file reader function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information to your README.md that seems relavent and useful.

I exported two functions from my reader.js.  The first function is fileReader on the .fs object.  It will take a file path and a callback as it's arguments.  The expected result is the text contained within the .txt file provided in string form.

The other function I exported is a converter to take a string and convert it to hexidecimal.  In this instance it will specifically find the first 8 bits of a hexidecimal string.  It will intake a .txt file, and specifically one from an array in this instance.