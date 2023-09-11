import {throwIfNaN} from "../helpers/throwIfNaN";
import {throwIfNumberIsTooBigOrTooSmall} from "../helpers/throwIfNumberIsTooBigOrTooSmall";

export const sub = (a: number, b: number): number => {
    throwIfNaN(a, b)
    throwIfNumberIsTooBigOrTooSmall(a)
    throwIfNumberIsTooBigOrTooSmall(b)
    const roundedResult = Math.round((a - b) * 1000000000000000) / 1000000000000000
    if (a - b < 1) return roundedResult
    return a - b
}
