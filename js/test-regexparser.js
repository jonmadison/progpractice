var assert = require('assert')
var regex = require('./regex2')

describe('regex matcher',function(){
	it('blank string with any regex should fail',function(){
		assert(regex.match('a*b','') == false)
	})

	it('matches a simple regex with period',function(){
		assert(regex.match('a.b.99','a9b499') == true)
	})

	it('matches a simple regex when using a period, and input is longer than regex',function(){
		assert(regex.match('a.b','a9bd') == false)
	})

	it('matches a simple regex with asterisk',function(){
		assert(regex.match('a*b','aaab') == true)
	})
})