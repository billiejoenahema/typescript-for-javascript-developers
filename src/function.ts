export { }

function bmi(height: number, weight: number): number {
    return weight / (height * height)
}

const myBmi = bmi(1.73, 71)
console.log(myBmi)
