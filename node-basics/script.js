// requiring a module

const fs = require('node:fs');

// writefile
// appendfile
// copyfile
// rename
// unlink
// Syntax for writefile- fs.writeFile("fileName", data, callback function)

fs.writeFile("test.txt", "My first node js code", function(err) {
    if (err) {
         console.error(err);
    } else {
        console.log("Done")
    }
})


// Append something to the old file
fs.appendFile("test.txt", "My second line of node js code", function(err) {
    if(err) {
        console.error(err)
    } else {
        console.log("Done")
    }
})

// Rename the file

fs.rename("test.txt", "helloWorld.txt", function(err) {
    if(err) {
        console.error(err)
    } else {
        console.log("Done")
    }
})