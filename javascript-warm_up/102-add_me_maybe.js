// a function that increments and calls a function

exports.addMeMaybe = function (number, theFunction) {
  let newNumber = 0;
  newNumber += number;
  theFunction(newNumber);
};
