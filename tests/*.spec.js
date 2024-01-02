const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("Function is called with two positive integers. The value returned should be the result of the multiplication of both values",
    () => {
        const result = multiply(2,3)
        expect(result).toBe(6)
    })
})

describe('Multiply', () => {
    test('Function is called with a negative and a positive integer. The value returned should be a negative number.',
    () => {
        const result = multiply(-1)
        expect(result).toBe(-1)
    })
})

describe('Multiply', () => {
    test('Function is called with any number and a number 0. The value returned should be 0 (any number multiplied by 0 equals 0).',
    () => {
        const result= multiply(0)
        expect(result).toBe(0)
    })
})