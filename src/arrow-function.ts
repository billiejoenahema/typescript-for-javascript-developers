export { }

let bmi: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number => weight / (height * height)

const myBMI = bmi(1.73, 71)
console.log(myBMI)
