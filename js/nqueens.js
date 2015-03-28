var solver = require('./nqueens-solver')

var readline = require('readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question("what will be your N? ", function(n) {
	var board = initBoard(n)
	if(!solver.solver(board,0)) {
		process.stdout.write('No solution found. :(\n')
	}

	printBoard(board)
	rl.close()
})

var initBoard = function(size) {
	var board = new Array(size)
	for(i = 0; i < size; i++) {
		board[i] = new Array(size)
		for(j = 0; j < size; j++) {
			board[i][j] = 0
		}
	}
	return board
}

var printBoard = function(board) {
	for(i = 0; i < board.length; i++) {
		for(j = 0; j < board.length; j ++) {
			if(board[i][j] === 0) {
				process.stdout.write('_  ')
			} else {
				process.stdout.write('Q  ')
			}
		}
		process.stdout.write('\n')
	}
}

