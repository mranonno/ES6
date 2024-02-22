/***** problem 1 *****/
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const mulResult = multiply(4, 5, 4);
// console.log(mulResult);
function temPlate(){
    return  `I am a Web developer
             I love to code 
             I love to eat biriyani`
}
// console.log(temPlate());
const add = (num1 = 0, num2 = 0) => num1 + num2;
// console.log(add(3));

/***** problem 2 *****/
const friends = ['emon', 'mehedi', 'prosanto', 'akash','anitosh','anonno'];
const evenFriends = [];
for (const friend of friends) {
    if (friend.length % 2 === 0) {
        evenFriends.push(friend);
    }
    
}
// console.log(evenFriends);
/***** problem 3 *****/
const numbers = [2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
    const square = number * number;
    sum += square;
}
// const average = sum / numbers.length;
// console.log(average);
/***** problem 4 *****/
const array1 = [2, 3, 5];
const array2 = [3, 4, 8];
const findMax = (array1, array2) => {
    const joined = [...array1].concat([...array2]);
    console.log(joined);
    console.log(Math.max(...joined));
    
    
}
findMax(array1, array2);