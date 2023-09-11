import {validateParameters} from "./validateParameters";

export const operationAll = (operation: (a: number, b: number) => number, ...values: number[]): number => {
    let total = 0
    for (const value of values) {
        validateParameters(value)
        total = operation(total, value)
    }
    return total
}
