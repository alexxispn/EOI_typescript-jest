import {sum} from './sum'
import {operationAll} from "../helpers/operationAll";
import {validateParameters} from "../helpers/validateParameters";

export const sumAll = (...values: number[]): number => {
    values.forEach((value) => validateParameters(value))
    return operationAll(sum, ...values)
}
