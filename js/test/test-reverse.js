myreverse = require("../myreverse")

var assert = require("assert")

describe("reverse",function(){
	it("should reverse a string",function(){
		var str1 = "hello  world"
		var str2 = "adslkjqmeoiue adlfkj%@ !99"
		assert.equal("dlrow  olleh",myreverse.reverse(str1))
		assert.equal("99! @%jkflda euioemqjklsda",myreverse.reverse(str2))
	});
})