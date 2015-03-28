
var willPlace = function(board,row,col) {
	//make sure there are no adjacent queens. 
	//only have to check stuff to the left of us
	//left diag upper
	if(col==0) return true

	for(i = row, j = col; i >= 0 && j>=0 ; i--, j--) {
		if(board[i][j]===1) {
			return false
		}
	}

	//left
	for(i = col-1; i >= 0; i--) {
		if(board[row][i]===1) {
			return false
		}
	}

	//left diag bottom
	for(i = row, j = col; i < board.length && j >=0; i++, j--) {
		if(board[i][j]===1) {
			return false
		}
	}

	return true
}

var solver = function(board,col) {
	// console.log("column: " + col, " board length: " + board.length)
	if(col >= board.length) {
		return true //we're done going through the board
	} 

	//iterate through the board, row by row.
	for(var row = 0; row < board.length; row++) {
		//can we place a queen?
		if(willPlace(board,row,col)) {
			board[row][col] = 1
			//good, now continue solving on the next column
			if(solver(board,col+1)) {
				return true
			} else {
				board[row][col] = 0 //backtrack
			}
		}
	}
	return false
}

module.exports.solver = solver
