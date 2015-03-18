var assert = require('assert')
var calc = require('../calc')

describe('calculator',function(){
	it('should calculate a simple math problem',function(){
		assert(calc.calc("1+2+3") == 6)
	})

	it('should calculate something with multiple operands',function(){
		assert(calc.calc("1+2*3+4+5") == 16)
	})
})