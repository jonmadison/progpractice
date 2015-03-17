bs = require('./bs')
assert = require('assert')

Array.prototype.fyshuffle = function() {
	for(var i = this.length - 1; i > 0; i--) {
		var rand = Math.floor((Math.random() * i))
		// console.log("swap current index " + i + " with " + rand)
		if(i!==rand) swap(this,i,rand)
	}
}

describe('binary search',function(){
	it('should return true if item is found',function(){
		var arr = [-44,-22,0,1,3,4,6,9,12,33,42,78,123,92,199,572]
		assert(bs.exists(123,arr) == true)
	})

	it('should return false if item is not found',function(){
		var arr = [-44,-22,0,1,3,4,6,9,12,33,42,78,123,92,199,572]
		assert(bs.exists(92348,arr) == false)
	})

	it('should balance a tree',function() {
		var arr = []
		var n = 10000
		for(var i = 0; i < n; i++) {
			arr[i] = Math.floor(Math.random() * n)
		}
		console.log("balancing\n" + "[" + arr + "]")
		assert(false) //break this test
	})
})



var swap = function(arr,aindex,bindex) {
	tmp = arr[aindex]
	arr[aindex] = arr[bindex]
	arr[bindex] = tmp
}