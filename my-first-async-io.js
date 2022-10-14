const fs = require('fs');

const buffer = fs.readFile(process.argv[2], (err, data) => {
	if (err) throw err;
	let string = data.toString().split("\n")
	console.log(string.length - 1)
})
