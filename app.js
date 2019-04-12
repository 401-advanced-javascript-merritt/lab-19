'use strict';

let alter = require('./src/filereader.js');

let file = process.argv.slice(2).shift();
alter.alterFile(file);