module.exports.addItem = function(itemToAdd, array) {
  if (array.indexOf(itemToAdd, 0) === -1){
    array.push(itemToAdd);
    return array;
  } 
  else {
    return array;
  };
};
//
module.exports.reverseSortedList = function(array) {
	array.sort();
	array.reverse();
	return array;
};