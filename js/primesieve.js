var primesSieve = function(upperRange) {
	var primes = new Array(upperRange)
	for(var i = 0; i < upperRange; i++) {
		primes[i] = 1
	}
	
	for(var i = 2; i < primes.length; i++) {
		if(primes[i]==0) continue
		if(isPrime(i)) {
			console.log(i + "is prime.")
			// console.log("found prime: " + i + ", removing factors from " + primes)
			for(j = 0; i*j <= primes.length; j++) {
				primes[i*j] = 0
			}
		}
	}
}


var isPrime = function(number) {
	if(number==1) return false
	var numFactors = 0;
	for(var i = 2; i <= Math.sqrt(number); i++) {
		if(number % i == 0) {
			// console.log(number + ": " + i + " is a factor")
			numFactors++
		}
	}
	// console.log(number + " has " + numFactors + " factors, so "+!(numFactors > 0))
	return !(numFactors > 0)
}

primesSieve(1000000)

module.exports.ps = primesSieve
