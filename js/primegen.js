process.stdin.setEncoding('utf-8')

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
	for(var i = 1; i < inputLines.length; i++) {
		printPrimes(inputLines[i].split(" "))
		console.log()
	}
	
}

var printPrimes = function(numberRangeArray) {
	console.log("printing primes between: " + numberRangeArray)
	for(var i = numberRangeArray[0]; i <= numberRangeArray[1]; ++i) {
		if(isPrime(i)) {
			console.log(i)
		}
	}
}

var isPrime = function(number) {
	if(number==1) return false
	var numFactors = 0;
	for(var i = 1; i < number; i++) {
		if(number % i == 0) {
			numFactors++
		}
	}
	if(numFactors > 1) return false
	return true
}