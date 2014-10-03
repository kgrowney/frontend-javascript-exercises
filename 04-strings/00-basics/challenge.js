module.exports.formLetter = function(firstName, senderName, message) {
  return("Hello " + firstName + ",\n\n" + message + "\n\n" + "Sincerely,\n" + senderName);
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return(bigString.substring(startA, endA) + bigString.substring(startB, endB));
};

module.exports.findFirstMatch = function(text, searchString) {
  return(text.indexOf(searchString));
};

module.exports.findLastMatch = function(text, searchString) {
  return(text.lastIndexOf(searchString));
};

module.exports.substringBetweenMatches = function(text, searchString) {
  //find the ending index for the first occurence
  var firstMatch = text.indexOf(searchString) + searchString.length;
  //find the beginning index for the last occurence
  var secondMatch = text.lastIndexOf(searchString);
  //return the text between the end of the first occurence and beginning of the second occurence
  return(text.substring(firstMatch, secondMatch));
};

//Are my commits working 