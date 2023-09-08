import {div, multiply, NAN_ERROR, sub, sum} from './math-operators'

describe('Math Operators', () => {
    describe('sum', () => {
        it('should add two positive numbers', () => {
            expect(sum(1, 2)).toBe(3)
        })

        it('should return an error if one of the numbers is not a number', () => {
            expect(() => sum(1, NaN)).toThrowError(NAN_ERROR)
        })

        it('should sum small decimal numbers', () => {
            expect(sum(0.1, 0.2)).toBe(0.3)
        })

        it('should sum big numbers', () => {
            expect(sum(12345678912345678, 100)).toBe(12345678912345778)
        })

        it('should sum big numbers with decimals', () => {
            expect(sum(12345678912345678.1, 100.2)).toBe(12345678912345778.3)
        })
    })
    describe('sub', () => {
        it('should subtract two positive numbers', () => {
            expect(sub(1, 2)).toBe(-1)
        })
        it('should subtract decimal numbers', () => {
            expect(sub(1.5, 2.5)).toBe(-1)
        })
    })
    describe('multiply', () => {
        it('should multiply two positive numbers', () => {
            expect(multiply(1, 2)).toBe(2)
        })
    })
    describe('div', () => {
        it('should divide two positive numbers', () => {
            expect(div(1, 2)).toBe(0.5)
        })
    })
})
