const numbers = [2, 3, 4, 5, 6];
// function doubleIt(num) {
//     return num * 2;
// }
const doubleIt = (n) => n * 2;
const result = numbers.map(doubleIt);
// console.log(result);
// console.log(numbers.map(n=>n*2));

const friends = ['Tom', 'John', 'Michel', 'Oliver'];
const length = friends.map(name=>name.length);
// console.log(length);
const firstLetter = friends.map(friend => friend[2].toUpperCase());
console.log(firstLetter);



