export { }

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Mie' | 'Shiga'

type Covid19InfectionInfo = {
    kanji_name: string,
    confirmed_cases: number
}

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 240 },
    Mie: { kanji_name: '三重', confirmed_cases: 30 },
    Shiga: { kanji_name: '滋賀', confirmed_cases: 40 },
}
