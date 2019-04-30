const path = require('path');
const fs = require('fs');
const pug = require('pug');

const directoryPath = path.join(__dirname, 'img');
const compiledFunction = pug.compileFile('template.pug');

fs.readdir(directoryPath, function(err, files) {
    if(err) {
        return console.log('Unable to scan directory' + err)
    }

    files.forEach(function(file) {
        console.log(file);
    });
}); 