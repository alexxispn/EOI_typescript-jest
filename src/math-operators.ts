import {throwIfNaN} from "./throwIfNaN";
import {throwIfResultIsTooBigOrTooSmall} from "./throwIfResultIsTooBigOrTooSmall";

export const sum = (a: number, b: number): number => {
    throwIfNaN(a, b)
    const result = a + b
    throwIfResultIsTooBigOrTooSmall(result)
    const roundedResult = Math.round(result * 1000000000000000) / 1000000000000000
    if (result < 1) return roundedResult
    return result
}

export const sub = (a: number, b: number): number => {
    throwIfNaN(a, b)
    return a - b
}

export const multiply = (a: number, b: number): number => {
    throwIfNaN(a, b)
    return a * b
}

export const div = (a: number, b: number): number => {
    throwIfNaN(a, b)
    return a / b
}

// To Implement: sumAll, subAll, multiplyAll, divAll
