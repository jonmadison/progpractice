sorter = require("./sorter")

var assert = require("assert")

Array.prototype.equals = function(arr) {
	if(!this || !arr) {
		return false
	}

	if(this.length != arr.length) {
		return false
	}

	for(i = 0; i < arr.length; i++) {
		if (this[i] != arr[i]) {
			return false;
		}
	}
	return true;
}

describe("selection sort",function(){
	it("should sort via selection sort",function(){
		var arr = [5,3,9,33,1,-3]
		var newArr = sorter.selectionSort(arr)
		console.log(newArr)
		assert(newArr.equals([-3,1,3,5,9,33]))
	});

	it("should sort via selection sort, second case",function(){
		var arr = [15,73,9,33,1,-3]
		var newArr = sorter.selectionSort(arr)
		console.log(newArr)
		assert(newArr.equals([-3,1,9,15,33,73]))
	});

	it("should sort via selection sort, third case",function(){
		var arr = [0,15.3,73,9,-33.3,1,-3]
		var newArr = sorter.selectionSort(arr)
		console.log(newArr)
		assert(newArr.equals([-33.3,-3,0,1,9,15.3,73]))
	});
})

describe("quicksort", function() {
	
})