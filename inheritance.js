class Vehicle{
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
}
class Ship extends Vehicle{
    constructor(name,price,route) {
        super(name, price);
        this.route = route;
    }
}
const bus = new Vehicle('bus', 12000000);
const ship = new Ship('Sundorban', 2500000, 'river');
console.log(bus);
console.log(ship);

