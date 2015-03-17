matrix = require("../matrix")
assert = require("assert")

describe('matrix problem',function() {
	it('should sort a matrix\'s rows',function(){
		m = [[20,40,80],[5,60,90],[45,50,55]]
		ordered = matrix.getOrdered(m)
		console.log("ordered: " + ordered)
		assert(ordered.equals([5,20,40,45,50,55,60,80,90]))
	})
	it('should sort a matrix\'s rows with dup entries',function(){
		m = [[20,40,80],[5,60,40],[45,50,5]]
		ordered = matrix.getOrdered(m)
		console.log("ordered: " + ordered)
		assert(ordered.equals([5,20,40,45,50,60,80]))
	})
})

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