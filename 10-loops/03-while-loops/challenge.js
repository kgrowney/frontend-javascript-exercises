module.exports.stream = function(conditionalFn, actionFn) {
  var counter = 10;
  while(conditionalFn() === true && counter > 0) {
    actionFn();
    counter --;
  };
};

module.exports.sumNumbers = function(numArray) {
  var i = 0;
  var counter = 0;
  while(i < numArray.length) {
    counter += numArray[i];
    i++;
  };
  return counter;
};