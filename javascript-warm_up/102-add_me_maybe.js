// a function that increments and calls a function

let newNumber;
exports.addMeMaybe = function (number, theFunction) {
  newNumber += number;
  theFunction(newNumber);
};
