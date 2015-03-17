
var sorter = require("./sorter")
var RBTree = require('bintrees').RBTree

var getOrdered = function(m) {
	var tree = new RBTree(function(a,b) { return a - b})

	for(var i=0; i < m.length; i++) {
		var row = m[i]
		// console.log("inspecting row " + row + ", length " + row.length)
		for(var j = 0; j < row.length; j++) {
			// console.log("adding item to tree: " + m[i][j])
			tree.insert(m[i][j])
		}
	}
	var it = tree.iterator(), item, i
	var result = []
	while((item = it.next()) !== null) {
		console.log("added to result: " + item)
		result[i++] = item
	}
	return result
}

module.exports.getOrdered = getOrdered