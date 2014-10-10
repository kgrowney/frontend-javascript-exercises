module.exports.sumNumbers = function(array) {
	var total = 0
	for (var i= 0; i < array.length; i++) {
		total += array[i];
	};
	return total;
};

module.exports.splitAndLowerCaseString = function(inputString) {
	var lowerCaseString = inputString.toLowerCase();
	var arrayOfStrings = lowerCaseString.split(",");
	return arrayOfStrings;
};

module.exports.addIndex = function(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    newArray[i] = i + " is " + array[i].toString();
  }; 
  return newArray;
};

