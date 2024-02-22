const data = [{ id: 21, name: 'ad', class: 'xi', address: 'mirpur' }];
// console.log(data[0].address)

const product = {
    count: 50000,
    data: [
        { id: 1, name: 'lenevo', price: 65000 },
        { id: 2, name: 'asus', price: 75000 }
    ]
}
// second price
// console.log(product.data[1].price);
const user = {
    id: 4001,
    name: 'ankon',
    address: {
        first: '6/7 mirpur',
        second: 'block-f',
        third:'road-2'
    },
    city:'dhaka'
}
const user2 = {
    count: 50000,
    data: [
        { id: 1, name: 'lenevo', price: 65000 },
        { id: 2, name: 'asus', price: 75000 }
    ]
}

/***** optional chaining *****/
console.log(user.address.second);
console.log(user2.address?.second);
