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
    if (err) {
        console.error(err)
    } else {
        console.log("Done")
    }
})

// Rename the file

fs.rename("test.txt", "helloWorld.txt", function(err) {
    if (err) {
        console.error(err)
    } else {
        console.log("Done")
    }
})

// Copy file

fs.copyFile("helloWorld.txt", "./copy/copyWorld.txt", function(err) {
    if (err) {
        console.error(err)
    } else {
        console.log("Copied")
    }
})

// unlinkfile--delete a file

fs.unlink("./copy/copyWorld.txt", function(err) {
    if (err) {
        console.error(err.message)
    } else {
        console.log("Deleted")
    }
})

// rmdir-or rm- to remove an empty directory

fs.rmdir("./copy", function(err) {
    if (err) {
        console.error(err)
    } else {
        console.log("Removed")
    }
})

// To read a file

fs.readFile("helloWorld.txt", "utf-8", function(err, data) {
    if (err) {
        console.error(err)
    } else {
        console.log('File Content:', data)
    }
})