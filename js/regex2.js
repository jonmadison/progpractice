var match = function(regex,input) {
	if(regex.length == input.length) {
		return true
	}
	if(regex.length && !input.length) {
		return false
	}

	var regexChars = ["*","."]
	var i = 0;
	var result = true;
	rSplit = regex.split("")
	iSplit = input.split("")
	console.log("rsplit: " + rSplit)

	//turn the regex into a 'language' that will guide our input matching.
	//run the input through that machine



}

module.exports.match = match