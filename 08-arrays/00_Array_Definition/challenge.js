module.exports.newArray = function(first, second, third, fourth) {
  // should return new array 
  newArray = [first, second, third, fourth];
  return newArray;
}

module.exports.firstAndLast = function(array) {
var myArray = [array[0], array[array.length - 1]];
return myArray;
}