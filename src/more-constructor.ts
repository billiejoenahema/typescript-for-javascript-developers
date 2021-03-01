export { }

class Person {
    constructor(public name: string, protected age: number) {
    }
}

const me = new Person('Billie', 42)
console.log(me)
