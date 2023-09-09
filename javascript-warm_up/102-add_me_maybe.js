// a function that increments and calls a function

let newNumber = 0;
exports.addMeMaybe = function (number, theFunction) {
  newNumber += number;
  theFunction(newNumber);
};
