var util = require('util')

var LinkedList = function() {
	this.head = null
}

LinkedList.prototype = {
	constructor: LinkedList,

	insert: function (number){
		var node = {
			value: number,
			next: null
		}

		if(this.head==null) {
			console.log("added new node to head: " + JSON.stringify(this.head))
			this.head = node
		} else {
			this.next = this.head
			console.log("inserted new node from head, new list" + JSON.stringify(this))
		}

	},

	push: function (number){
		var node = {
			value: number,
			next: null
		}

		if(this.head==null) {
			console.log("added new node to head: " + JSON.stringify(this.head))
			this.head = node
		} else {
			current = this.head
			//walk to the end and add
			while(current.next) {
				current = current.next
			}
			this.head.next = node
			console.log("added new node from head, new list" + JSON.stringify(this.head))
		}

	},



	toString: function() {
		var toPrint = this
		console.log(toPrint.value)  //print top
		while(toPrint.next) {
			console.log("val: " + toPrint.value)
			toPrint = toPrint.next
		}
	}
}

module.exports.LinkedList = LinkedList