
module.exports.reversePlusOne = function(Array) {
//var Array = [3,4];
Array.reverse();
//var Array = [4,3];
Array.unshift(1);
//var Array = [1,4,3];
return Array;
};

module.exports.plusesEverywhere = function(Array){
//var Array = Array.toString();
var Array = Array.join("+");
return Array;
};
//
module.exports.arrayQuantityPlusOne = function(Array){
var plusOne = Array.length + 1;
return plusOne;
};
