export { }

let getBMI: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const myBMI: number = weight / (height * height)

    if (printable) {
        console.log(myBMI)
    }
    return myBMI
}

getBMI(1.73, 71, true)

// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(1.73, 71, true)
// bmi(1.73, 71, false)
// bmi(1.73, 71)
