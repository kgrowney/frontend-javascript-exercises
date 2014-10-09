module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
		var courseObj = new Object ();
		courseObj.title = courseTitle;
		courseObj.duration = courseDuration;
		courseObj.students = courseStudents; 

		return courseObj;
};

module.exports.addProperty = function(propObject, propNewProp, propNewValue) {
		if (propObject.propNewProp === undefined) {
			propObject[propNewProp] = propNewValue;
			return propObject;
		}
		else {
			return propObject;
		};
	};

module.exports.formLetter = function(letter) {
	//Combine the three properties into string + add text
	return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender
};


module.exports.canIGet = function(item, money) { 
	var Object = {};
	Object['MacBook Air'] = 999;
	Object['MacBook Pro'] = 1299;
	Object['Mac Pro'] = 2499;
	Object['Apple Sticker'] = 1;

	return (money >= Object[item]);
};