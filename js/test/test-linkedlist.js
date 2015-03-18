var assert = require('assert')

var linkedlist = require('../linkedlist')

describe('linked list',function() {
	it('should initialize a linked list using an array, retaining the order of the array', function(){
		var list = new linkedlist.LinkedList([5,10,15,203,30,12,11,3])
		assert(list.toArray().length == 8)
		assert(list.toArray() == "5,10,15,203,30,12,11,3")
	})

	it('should reasonably handle an empty array as input',function() {
		var list = new linkedlist.LinkedList([])
		assert(list.toArray() == "")
	})

	it('should throw an exception if input is not an array',function(){
		assert.throws(function(){
			new linkedlist.LinkedList("oh snap")
		}, Error);
	})

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

	it('should push items onto the right of the list',function() {
		var list = new linkedlist.LinkedList()
		list.push(5)
		// console.log("list: " + list.toString())
		list.push(10)
		// console.log("list: " + list.toString())
		list.push(15)
		// console.log("list: " + list.toString())
		assert(list.toArray() == "5,10,15")
	})

	it('should return t/f whether or not an item is in the list', function() {
		var list = new linkedlist.LinkedList([5,10,15,203,30,12,11,3])
		assert(list.contains(203) == true)
		assert(list.contains(-3) == false)
		assert(list.contains("yo son") == false)
		assert(list.contains({"value":"this aint there"}) == false)
	})
})

