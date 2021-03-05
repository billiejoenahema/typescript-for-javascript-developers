export { }

let name = 'Billie'

name = 'Joe'

// 実質的に定数扱いになる
let nickname = 'Bill' as const
nickname = 'Bill'

let profile = {
    name: 'Billie',
    height: 173
} as const

// profile.name = 'Bull'
// profile.height = 180
