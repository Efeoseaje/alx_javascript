#!/usr/bin/node

// prints the title of a Star Wars movie where the episode number matches a given integer

const request = require('request');

const id = `${process.argv[2]}`;

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get({ url, json: true }, (error, response, data) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('HTTP Error:', response.statusCode);
  } else {
    console.log(data.title);
  }
});
