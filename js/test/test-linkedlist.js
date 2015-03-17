var assert = require('assert')

var linkedlist = require('../linkedlist')

describe('linked list',function(){
	it('should insert items onto the left of the list',function() {
		var list = new linkedlist.LinkedList()
		list.insert(5)
		// console.log("list: " + list.toString())
		list.insert(10)
		// console.log("list: " + list.toString())
		list.insert(15)
		// console.log("list: " + list.toString())
		assert(list.toArray() == "15,10,5")
	})

	it('should push items into the right of the list',function() {
		var list = new linkedlist.LinkedList()
		list.push(5)
		// console.log("list: " + list.toString())
		list.push(10)
		// console.log("list: " + list.toString())
		list.push(15)
		// console.log("list: " + list.toString())
		assert(list.toArray() == "5,10,15")
	})
})

