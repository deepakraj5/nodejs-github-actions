const { add, sub, div } = require('../src/calculation')


test('add 5 + 5 = 10', () => {
    expect(add(5, 5)).toBe(10)
})

test('sub 10 - 5 = 5', () => {
    expect(sub(10, 5)).toBe(5)
})

test('div 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4)
})