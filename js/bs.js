var exists = function(item,arr) {
	var median = getMedian(arr)
	// console.log("starting with median: " + median)
	var index = 0
	if(!median) {
		// console.log("no dice :( ")
		return false
	}

	if(arr && median == item) {
		// console.log("found it! " + median + " at index: " + index)
		return true
	}

	if(item < median) {
		++index
		left = leftSplit(median,arr)
		// console.log("finding items on the left: " + left)
		return exists(item,left)
	} else {
		++index
		right = rightSplit(median,arr)
		// console.log("finding items on the right: " + right)
		return exists(item,right)
	}
}

var leftSplit = function(item,arr) {
	return arr.slice(0,arr.indexOf(item))
}

var rightSplit = function(item,arr) {
	return arr.slice(arr.indexOf(item))
}

var getMedian = function(arr) {
	return arr[arr.length/2]
}

module.exports.exists = exists