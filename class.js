class Teacher{
    constructor(name,subject) {
        this.name = name;
        this.subject = subject;
    }
}
const rahim = new Teacher('Rahim', 'Math');
// console.log(rahim);

class Product{
    constructor(id,name,price) {
        this.id = id;
        this.name =name;
        this.price = price;
    }
}
const lenevo = new Product(1, 'lenevo', 45000);
console.log(lenevo);
