import { expect, test } from 'vitest'
import { sum, minus, multiply, divide, power } from './fun'

test('sum: 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('minus: 1 - 2 = -1', () => {
    expect(minus(1, 2)).toBe(-1)
})

test('multiply: 1 * 2 = 2', () => {
    expect(multiply(1, 2)).toBe(2)
})

test('divide: 1 / 2 = 0.5', () => {
    expect(divide(1, 2)).toBe(0.5)
})

test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8)
})

