interface ListItem {
    label: string
    value: string
}

export const FRUITS_OBJECT = {
    apple: '苹果',
    banana: '香蕉',
    pear: '梨'
}

function mapObjectToArray(o: Record<string, string>) {
    const arr: ListItem[] = []
    Object.keys(o).forEach(item => {
        arr.push({ label: o[item], value: item })
    })
    return arr
}

export const FRUITS_LIST = mapObjectToArray(FRUITS_OBJECT)

export type FruitType = keyof typeof FRUITS_OBJECT // 'apple' | 'banana' | 'pear'

type FruitType2 = typeof FRUITS_OBJECT
