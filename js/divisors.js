var properDivisors = function(number) {
	var result = []

	for(var i = 0; i <= Math.sqrt(number); i++) {
		if( number % i == 0) {
			//add cofactors
			if(i!=number) {
				result.push(i)
			}

			if( i != Math.sqrt(number) ) {
				if(number/i != number)
				result.push(number/i)
			}
		}
	}
	console.log("factors of " + number + ": " + result)
	return result
}

var sumArray = function(arr) {
	var sum = 0
	for(var i = 0; i < arr.length; i++) {
		// console.log("adding " + arr[i])
		sum += arr[i]
	}	
	return sum
}

module.exports.properDivisors = divisors
module.exports.sumArray = sumArray
