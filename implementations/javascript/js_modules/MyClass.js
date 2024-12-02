class MyClass {
    constructor(personName) {
        this.personName = personName;
    }

    sayHello() {
        console.log(`Hi, this is ${this.personName}`);
    }
}

export { MyClass };