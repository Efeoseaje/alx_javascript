#!/usr/bin/node

// script that computes the number of tasks completed by user id

const request = require('request');

// API URL for the JSON data
const url = 'https://jsonplaceholder.typicode.com/todos';

request(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error(`An error occurred: ${error}`);
    return;
  }
  if (response.statusCode === 200) {
    // Create an object to store the count of completed tasks for each user
    const userCompletedTasks = {};
    body.forEach((todo) => {
      if (todo.completed) {
        const userId = todo.userId;
        // Update the count of completed tasks for this user
        userCompletedTasks[userId] = userCompletedTasks[userId] ? userCompletedTasks[userId] + 1 : 1;
      }
    });
    // Print users with completed tasks
    console.log(userCompletedTasks);
  }
});
