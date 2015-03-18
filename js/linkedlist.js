var util = require('util')

var LinkedList = function(arr) {
	this._head = null
	// console.log("new LinkedList: " + util.inspect(this))
	if(arr != undefined) {
		if( Object.prototype.toString.call(arr) !== '[object Array]') {
	    	throw new Error("Sorry not sorry. I require an array as input.")
		}
		// console.log("new LinkedList from array: " + util.inspect(this))

		for(var i = 0; i < arr.length; i++) {
			this.push(arr[i])
		}		
	}
}

var _insert = function (item) {
	var node = {
		value: item,
		next: null
	}

	if(this._head==null) {
		// console.log("head null, new: " + item)
		this._head = node
		// console.log("added new node to head: " + util.inspect(this))
		// console.log(this.toArray())
	} else {
		//replace head node with this one
		tmp = this._head
		node.next = tmp
		this._head = node
		// console.log("inserted new node from head, new list" + JSON.stringify(this))
		// console.log(this.toArray())
	}
}


var _push = function (item){
	var node = {
		value: item,
		next: null
	}

	if(this._head==null) {
		this._head = node
		// console.log("created new node: " + JSON.stringify(this))
	} else {
		var current = this._head
		while(current.next) {
			current = current.next
		}
		current.next = node
		// console.log("pushed new node to end:" + JSON.stringify(this))
		// console.log(this.toArray())
	}
}

var _contains = function(item) {
	if(!item) return false
	var current = this._head
	while(current) {
		if(item === current.value)
		return true
		current = current.next
	}
	return false
}

LinkedList.prototype = {
	constructor: LinkedList,

	insert: _insert,

	push: _push,

	contains: _contains,

	toArray: function() {
		var result = [], i = 0
		var toPrint = this._head
		while(toPrint) {
			result[i] = toPrint.value
			i++
			// console.log(toPrint.value)
			toPrint = toPrint.next
		}
		return result
	}
}

module.exports.LinkedList = LinkedList