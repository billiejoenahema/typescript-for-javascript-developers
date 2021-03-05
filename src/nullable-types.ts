export { }

// union型を使うことで局所的にnullableにできる
let profile: { name: string, age: number | null } = {
    name: 'Billie',
    age: null
}

