import {throwIfNaN} from "../helpers/throwIfNaN";
import {throwIfNumberIsTooBigOrTooSmall} from "../helpers/throwIfNumberIsTooBigOrTooSmall";

export const sum = (a: number, b: number): number => {
    throwIfNaN(a, b)
    const result = a + b
    throwIfNumberIsTooBigOrTooSmall(result)
    const roundedResult = Math.round(result * 1000000000000000) / 1000000000000000
    if (result < 1) return roundedResult
    return result
}
