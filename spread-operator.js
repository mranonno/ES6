const numbers = [2, 3, 5, 6, 7, 8];

const getMax1 = Math.max(numbers);
// console.log(getMax1);

const getMax2 = Math.max(...numbers);
// console.log(getMax2);

const getArray1 = ([numbers]);
// console.log(getArray1);

const getArray2 = ([...numbers, 23]);
// console.log(getArray2);

const pushNumber = [...numbers];
pushNumber.push(12)
console.log(numbers);

console.log(pushNumber);


