#!/usr/bin/node

// script that computes the number of tasks completed by user id

const request = require('request');

// API URL for the JSON data
const url = 'https://jsonplaceholder.typicode.com/todos';

request(url, (error, response, body) => {
  if (error) {
    console.error(`An error occurred: ${error}`);
    return;
  }
  // Check if the request was successful (status code 200)
  if (response.statusCode === 200) {
    // Parse the JSON data
    const todos = JSON.parse(body);
    // Create an object to store the count of completed tasks for each user
    const userCompletedTasks = {};
    // Iterate through the todos
    todos.forEach((todo) => {
      // Check if the task is completed
      if (todo.completed) {
        // Get the user ID
        const userId = todo.userId;
        // Update the count of completed tasks for this user
        userCompletedTasks[userId] = userCompletedTasks[userId] ? userCompletedTasks[userId] + 1 : 1;
      }
    });
    // Print users with completed tasks
    console.log(userCompletedTasks);
  }
});
