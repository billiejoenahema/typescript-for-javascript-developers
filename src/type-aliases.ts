export { }

type Mojiretsu = string
// エイリアス名の頭文字は大文字にする

const fooString: string = 'Hello'
const fooMojiretsu: Mojiretsu = 'Hello'

const example1 = {
    name: 'Billie',
    age: 43
}

// type Profile = {
//     name: string;
//     age: number;
// }
type Profile2 = typeof example1

const example2: Profile2 = {
    name: 'Bill',
    age: 44
}

