export { }

class VisaCard {
    constructor(public readonly owner: string) {
    } // readonlyのときはpublicは省略可能だが書いておいたほうが安心
}

let myVisaCard = new VisaCard('Billie')
console.log(myVisaCard.owner)
// myVisaCard.owner = 'Bill'
