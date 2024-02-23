class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`Sleeping Now ${this.name}`);
        
    }
}
const anonno = new Person('anonno', 26);
anonno.sleep();