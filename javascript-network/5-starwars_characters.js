#!/usr/bin/node

// script that prints all characters of a Star Wars movie

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  if (response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;
    // Iterate through character URLs and fetch character information
    characterUrls.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error(`Error: ${error}`);
          return;
        }
        if (response.statusCode === 200) {
          const characterData = JSON.parse(body);
          const characterName = characterData.name;
          console.log(characterName);
        }
      });
    });
  }
});
