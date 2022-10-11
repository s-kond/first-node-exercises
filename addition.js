const numbers = process.argv.slice(2)

if(numbers.length === 2){ 	
	const result = parseInt(numbers[0]) + parseInt(numbers[1]);
	if(isNaN(result)){
		console.log("You need to use numbers!");
	} else {
		console.log("The result is " + result)
	}
} else {
	console.log("You can only add two numbers!")
}
