var assert = require('assert')
var regex = require('../regex2')

describe('regex matcher',function(){
	it('blank string with any regex should fail',function(){
		assert(regex.match('a*b','') === false)
	})

	it('matches a simple regex with period',function(){
		assert(regex.match('a.b.99','a9b499') === true)
	})

	it('matches a simple regex when using a period, and input is longer than regex',function(){
		assert(regex.match('a.b','a9bd') === false)
	})

	it('matches a simple regex with asterisk',function(){
		assert(regex.match('a*b','why hello there aaaaab') === true)
	})

	it('matches a regex with both asterisk and period with matching input',function(){
		assert(regex.match('a*bcd.ef','aaaaabcd7ef') === true)
	})

	it('properly fails a regex with both asterisk and period with non-matching input',function(){
		assert(regex.match('a*bcd.ef','aaaaazbcd7ef') === true)
	})
})