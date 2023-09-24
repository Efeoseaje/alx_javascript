#!/usr/bin/node

const welcomeMessage = (fullName) => {
  const greeting = () => {
    alert('Welcome ' + fullName);
  };
  return greeting;
};

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
