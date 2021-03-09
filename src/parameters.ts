export { }

const debugProfile = (name: string, age: number) => {
    console.log(name, age)
}

debugProfile('Billie', 42)

type Profile = Parameters<typeof debugProfile>

const profile: Profile = ['Gloria', 76]

debugProfile(...profile)

type Parameters<T extends (...args: any) => any> = T extends (...args: infer P)
    => any ? P : never;

