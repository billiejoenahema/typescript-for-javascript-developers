export { }

class Mage { }
class Monk { }

// クラスは1つしか継承できない
class Taro extends Mage { }

interface Sage {
    ionazun(): void
}

interface Fighter {
    attack(): void
}

// interfaceは複数実装できる
class Jiro implements Sage, Fighter {
    ionazun(): void {
        console.log('ionazun')
    }

    attack(): void {
        console.log('attack')
    }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.attack()
