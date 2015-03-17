var reverse = function(inputString) {
	var splitString = inputString.split("")
	var newString = []
	var c = 0;
	console.log("splitting " + inputString + " of length: " + splitString.length)
	for(i = splitString.length; i >= 0; i--) {
		// console.log(splitString [i])
		newString[c++] = splitString[i]
	}
	return newString.join("")
}

module.exports.reverse = reverse