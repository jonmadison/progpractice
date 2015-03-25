var primesSieve = function(lowerRange,upperRange) {
	var primes = new Array(upperRange)
	for(var i = 0; i < upperRange; i++) {
		primes[i] = 1
	}

	for(var i = lowerRange; i < primes.length; i++) {
		if(primes[i]==0) continue
			console.log(i + " is prime.")
			// console.log("found prime: " + i + ", removing factors from " + primes)
			for(j = 0; i*j <= primes.length; j++) {
				primes[i*j] = 0
			}
	}
}

primesSieve(10,50)

module.exports.ps = primesSieve
