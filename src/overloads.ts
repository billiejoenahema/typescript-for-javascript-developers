export { }

function double(value: number): number
function double(value: string): string

// 実体のほうではany型にする
function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2
    }
    return value + value
}

console.log(double(100))
console.log(double('Go'))
