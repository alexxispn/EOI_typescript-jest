import {multiply} from './multiply'
import {validateParameters} from "../helpers/validateParameters";
import {operationAll} from "../helpers/operationAll";

export const multiplyAll = (...values: number[]): number => {
    values.forEach((value) => validateParameters(value))
    return operationAll(multiply, ...values)
}
