process.stdin.setEncoding('utf-8')

var input = ""

var lue = function(input) {
	var nums = input.split("\n")
	for(i = 0; i < nums.length; i++) {
		if(nums[i]==42) {
			break;
		}
		console.log(nums[i])
	}
}

process.stdin.on('readable',function(){
	var chunk = process.stdin.read()
	if(chunk != null) {
		input+=chunk
	}
})

process.stdin.on('end',function(){
	lue(input)
})