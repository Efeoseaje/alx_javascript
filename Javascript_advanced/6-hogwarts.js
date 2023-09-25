#!/usr/bin/node

const studentHogwarts = () => {
  let privateScore = 0;
  let name = null;

  const changeScoreBy = (points) => {
    privateScore += points;
  };

  return {
    setName: (newName) => {
      name = newName;
    },
    rewardStudent: () => {
      changeScoreBy(1);
    },
    penalizeStudent: () => {
      changeScoreBy(-1);
    },
    getScore: () => {
      return (`${name}: ${privateScore}`);
    }
  };
};

const harry = studentHogwarts();
harry.setName('Harry');

// use a loop to reward Harry 4 times
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
// use loop to penalize Draco 3 times
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
