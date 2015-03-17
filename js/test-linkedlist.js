var assert = require('assert')

var linkedlist = require('./linkedlist')

describe('linked list',function(){
	it('should add items to a linked list',function() {
		var list = new linkedlist.LinkedList()
		list.insert(5)
		// console.log("list: " + list.toString())
		list.insert(10)
		// console.log("list: " + list.toString())
		list.insert(15)
		// console.log("list: " + list.toString())
		assert(linkedlist.toString() == "[15,10,5]")
	})
})

