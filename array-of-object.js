const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'mac', price: 165000 },
    { id: 3, name: 'dell', price: 55000 },
    { id: 4, name: 'hp', price: 45000 },
];
const names = products.map(products => products.price);
const sumOfPrice = names.reduce((p, c) => p + c, 0);
console.log(names);
console.log(sumOfPrice);
