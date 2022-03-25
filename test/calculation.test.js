const { add, sub } = require('../src/calculation')


test('add 5 + 5 = 10', () => {
    expect(add(5, 5)).toBe(10)
})

test('sub 10 - 5 = 5', () => {
    expect(sub(10, 5)).toBe(5)
})