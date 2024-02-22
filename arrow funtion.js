const add = function (num1, num2) {
    return num1 + num2;
}
const sum = add(10, 4);
console.log(sum);

const add2 = (num1, num2) => num1 + num2;
const sum2 = add2(10, 20);
console.log(sum2);

const person = {
    name: 'ananna',
    age: 26,
    profession: 'student'
}
const array = [2, 6, 8, 3, 5, 6];
const getThird = array => array[2];
const getTwo = array => array[1];
console.log(getThird(array));
console.log(getTwo(array));

const getAge = person => person.age;
const getName = person => person.name;
// console.log(getAge(person));
// console.log(getName(person));