module.exports.copy = function(object) {
  var newObj = new Object();
  for(var property in object) {
    newObj[property] = object[property];
  };
  return newObj;
};

module.exports.extend = function (dest, src) {
	// body...
	for (var property in src) {
		dest[property] = src [property];
	};
	return dest;
};

module.exports.hasElems = function(object, array) {
  if(array.length === 0) {
      return true;
    } else {
    for(var i = 0; i < array.length; i++) {
      if(object.hasOwnProperty(array[i]) === false){
        return false;
      } 
      else if(i === (array.length - 1)){
        return true;
      };
    };
  };
};