var util = require('util')

var LinkedList = function() {
	this._head = null
}

LinkedList.prototype = {
	constructor: LinkedList,

	insert: function (number){
		var node = {
			value: number,
			next: null
		}

		if(this._head==null) {
			this._head = node
			console.log("added new node to head: " + JSON.stringify(this))
			console.log(this.toArray())
		} else {
			//replace head node with this one
			tmp = this._head
			node.next = tmp
			this._head = node
			console.log("inserted new node from head, new list" + JSON.stringify(this))
			console.log(this.toArray())
		}

	},

	push: function (number){
		var node = {
			value: number,
			next: null
		}

		if(this._head==null) {
			this._head = node
			console.log("created new node: " + JSON.stringify(this))
		} else {
			var current = this._head
			while(current.next) {
				current = current.next
			}
			current.next = node
			console.log("pushed new node to end:" + JSON.stringify(this))
			console.log(this.toArray())
		}

	},

	toArray: function() {
		var result = [], i = 0
		var toPrint = this._head
		while(toPrint) {
			result[i++] = toPrint.value
			// console.log(toPrint.value)
			toPrint = toPrint.next
		}
		return result
	}
}

module.exports.LinkedList = LinkedList