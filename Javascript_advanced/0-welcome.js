#!/usr/bin/node

// a function that displays an alert

const welcome = (firstName, lastName) => {
  const fullName = firstName + ' ' + lastName;
  const displayFullName = () => {
    alert('Welcome ' + fullName + '!');
  };
  displayFullName();
};
