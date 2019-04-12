
// * In the starter code, you'll once again find an `app.js` that reads and modifies a file.
// * On a successful write, publish a "save" event to the "file" queue
// * On error, publish an "error" event to the "file" queue
// * Modularize the file reader

'use strict';
const Q = require('@nmq/q/client');

const fs = require('fs');
const util = require('util');
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

let read = (file) => {return readFile(file);};
let write = (file, buffer) => {return writeFile(file, buffer);};
let upper = (buffer) => { Buffer.from(buffer.toString().trim().toUpperCase());};

let alterFile = (file) => {
  read(file)
    .then(buffer => {
      buffer = upper(buffer);
      write(file, buffer)
        .then(Q.publish('database', 'file-save', 'file written ok'));
    })
    .catch(error => Q.publish('database', 'file-error', error));
};

module.exports = {alterFile};
