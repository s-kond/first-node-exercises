const  numbers = process.argv.slice(2)

const checkedNumbers = numbers.map(num => +num);;

const initialValue = 0;
const sumWithInitial = checkedNumbers.reduce((prev, curr) => prev + curr, initialValue);

console.log(sumWithInitial)
