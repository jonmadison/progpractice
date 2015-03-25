var match = function(regex,input) {
	var regexChars = ["*","."]
	var i = 0;
	var result = true;
	rSplit = regex.split("")
	iSplit = input.split("")
	console.log("rsplit: " + rSplit)
	var matchedAsteriskChar = ""

	//keep considering 
	for(; i < rSplit.length; ++i) {
		console.log("testing : " + rSplit[i])
		if(rSplit[i] == '.') { //auto pass
			continue
		}

		//encounter an asterisk. look at the last character
		//and push onto the matching set until we're
		if(rSplit[i] == '*') {
			matchedAsteriskChar = iSplit[i-1]
			console.log("got an asterisk, now to match char: " + matchedAsteriskChar)
		} 

		//now, let's subloop until we encounter a letter in iSplit[i] that doesn't
		//match our matchedAsteriskChar. as soon as we get a miss we need to punt back
		//to the main loop to continue matching.
		if(matchedAsteriskChar.length) {
			console.log("in asterisk matching, checking " + iSplit[i] + "==" + matchedAsteriskChar)
			if(iSplit[i]==matchedAsteriskChar) {
				continue
			} else { //stop matching
				console.log("out of asterisk matching")
				matchedAsteriskChar = ""
			}
		}

		if(iSplit[i] && (rSplit[i] != iSplit[i])) {
			return false
		}
	}

	return  !(input.length > regex.length) //final test input shouldn't be longer than the regex for '.'
}

module.exports.match = match