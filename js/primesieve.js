var primesSieve = function(lowerRange,upperRange) {
	var primes = new Array(upperRange)
	var result = []
	for(var i = 0; i < upperRange; i++) {
		primes[i] = 1
	}

	for(var i = 2; i < primes.length; i++) {
		if(primes[i]==0) continue
		// console.log(i + " is prime.")
		if(i >= lowerRange && i <= upperRange) result.push(i)
		// console.log("found prime: " + i + ", removing factors from " + primes)
		for(j = 0; i*j <= primes.length; j++) {
			primes[i*j] = 0
		}
	}
	console.log(result)
}

primesSieve(1,10000000)

module.exports.ps = primesSieve
