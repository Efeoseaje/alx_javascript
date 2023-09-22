#!/usr/bin/node

// script that gets the contents of a webpage and stores it in a file

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url)
  .on('response', response => {
    if (response.statusCode !== 200) {
      console.error('HTTP error:', response.statusCode);
    }
  })
  .on('error', err => {
    console.error(err);
  })
  .pipe(fs.createWriteStream(filePath));
