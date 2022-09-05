import { shuffleArray } from './utils'

describe('shuffleArray should', () => {
    test('returns an array of the same length', () => {
        let array = [1, 2, 3, 4, 5]
        let starting = array.length
        let shuffleArray = shuffleArray(array)
        let shuffleLength = shuffleLength.length
        expect(shuffleLength).toEqual(starting)
    })
    test('returns an array of the same length', () => {
        let arrayZ = ["A", "B", "C", "D", "E"]
        let startingZ = arrayZ.length
        let shuffleArrayz = shuffleArrayz(arrayZ)
        let shuffleLengthz = shuffleLengthz.length
        expect(shuffleLengthz).toEqual(startingZ)
    })
})