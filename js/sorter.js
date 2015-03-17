var selectionSort = function(arr) {
	for(var i = 0; i < arr.length-1; i++){
		//find the minimum, swap it with current position in the array
		minIndex = findMinIndex(i,arr)
		// console.log("min: " + arr[minIndex] + ", swappingwith: " + arr[i] + "\n")
		//swap the elements between i and minIndex found
		tmp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = tmp
		// console.log("new arr: [" + arr +"]")
	}
	return arr
}

var findMinIndex = function(index,arr) {
	iMin = index
	for(var i = index; i < arr.length; i++) {
		if(arr[i] < arr[iMin]) {
			iMin = i //current lowest index
		}
	}
	return iMin
}

module.exports.selectionSort = selectionSort