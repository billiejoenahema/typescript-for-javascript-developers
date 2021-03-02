export { }

namespace Japanese {

    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {
            }
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) {
            }
        }
    }
}


namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) { }
    }
}

const me = new Japanese.Osaka.Person('Billie')
console.log(me.name)

const michael = new English.Person('MIchael', 'Joseph', 'Jackson')
console.log(michael.middleName)
