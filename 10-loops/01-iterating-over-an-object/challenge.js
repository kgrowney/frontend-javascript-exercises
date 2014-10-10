module.exports.getKeys = function(myObject) {
	//create an empty array
	var array = [];
	//loop through keys, adding each key to array
	for (var property in myObject) {
		array.push(property);
	};
	return array;
	};

module.exports.getValues = function(anObject) { 
	//create an empty array
	var array = [];
	//loop through the keys in the object, adding each value to array
	for (var property in anObject) {
		array.push(anObject[property]);
	};
	return array;
};

module.exports.objectToArray = function(object) {
	//create an array of strings
	var array = [];
	for (var property in object) {
		array.push(property + " is " + object[property]);
	};
	return array;
};
