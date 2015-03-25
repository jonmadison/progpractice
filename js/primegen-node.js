process.stdin.setEncoding('utf-8')
var prime = require('./primesieve')

var input = ""

process.stdin.on('readable',function(){
	var chunk = process.stdin.read()
	if(chunk!=null){
		input+=chunk
	}
})

process.stdin.on('end',function(){
	primeGen(input)
})

var primeGen = function(input) {
	inputLines = input.split("\n")
	var numberOfCases = inputLines[0]
	console.log("processing " + numberOfCases + " test cases")
	for(var i = 0; i < numberOfCases; i++) {
		// printPrimes(inputLines[i+1].split(" "))

		printPrimesSieveE(inputLines[i+1].split(" "))
		console.log()
	}
	
}

var primesSieve = function(upperRange) {
	var primes = new Array(upperRange+1)
	for(var i = 0; i <= upperRange.length; i++) {
		primes[i] = 1
	}

	for(var i = 0; i <= upperRange; i++) {
		if(isPrime(primes[i])) {
			for(j = 2; j <= primes.length; j++) {
				primes[i*j] = 0
			}
		}
	}
}

var printPrimesSieveE = function(rangeArray) {
	// console.log("sieving primes between: " + rangeArray)
	var arr = arrayOfRange(parseInt(rangeArray[0]),parseInt(rangeArray[1])) 
	var primes = arr.slice() // all numbers are prime until otherwise
	// console.log("array: " + arr)

	for(i = 0; i < arr.length; i++) {
		num = arr[i]
		console.log("is " + num + " prime?")

		if(primes.indexOf(num)!=-1 && isPrime(num)) { 
			console.log(num + " is prime")
			for(j = 2; j <= arr.length; j++) { //sieve out obviously non-prime nums
				console.log("removing " + num*j)
				delete (primes[arr.indexOf(num*j)])
			}
		} else {
			delete (primes[arr.indexOf(num)]) //in case we started out of range!
		}
	}
	// console.log(""+primes)
}

var arrayOfRange = function(lower,upper) {
	var result = []
	console.log("arrayOfRange: " + lower + ", " + upper )

	for(var i = lower; i <= upper; i++) {
		result.push(i)
	}
	return result.slice()
}

var printPrimes = function(numberRangeArray) {
	console.log("printing primes between: " + numberRangeArray)
	for(var i = parseInt(numberRangeArray[0]); i <= parseInt(numberRangeArray[1]); ++i) {
		// console.log("is " + i + " prime?")
		if(isPrime(i)) {
			console.log(i)
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