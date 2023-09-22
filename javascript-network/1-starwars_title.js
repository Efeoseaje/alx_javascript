#!/usr/bin/node

// prints the title of a Star Wars movie where the episode number matches a given integer

const request = require('request');

const chunks = [];

const id = `${process.argv[2]}`;
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, { encoding: 'utf-8' })
  .on('data', body => {
    chunks.push(body);
  })
  .on('complete', () => {
    const data = JSON.parse(chunks);
    console.log(data.title);
  })
  .on('response', response => {
    if (response.statusCode !== 200) {
      console.error('HTTP error:', response.statusCode);
    }
  })
  .on('error', err => {
    console.error(err);
  });
