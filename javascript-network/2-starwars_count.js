#!/usr/bin/node

// prints the number of movies where the character “Wedge Antilles” is present

const request = require('request');

const chunks = [];

const url = process.argv[2];
const characterId = '18';
let count = 0;

request.get(url, { encoding: 'utf-8' })
  .on('data', body => {
    chunks.push(body);
  })
  .on('complete', () => {
    const data = JSON.parse(chunks);
    data.results.forEach((film) => {
      film.characters.forEach((character) => {
        if (character.includes(characterId)) {
          count += 1;
        }
      });
    });
    console.log(count);
  })
  .on('response', response => {
    if (response.statusCode !== 200) {
      console.error('HTTP error:', response.statusCode);
    }
  })
  .on('error', err => {
    console.error(err);
  });
