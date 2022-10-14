const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]).toString().split("\n");

console.log(buffer.length-1);
