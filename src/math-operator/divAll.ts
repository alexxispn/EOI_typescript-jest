import {div} from './div'
import {validateParameters} from "../helpers/validateParameters";
import {operationAll} from "../helpers/operationAll";

export const divAll = (...values: number[]): number => {
    values.forEach((value) => validateParameters(value))
    return operationAll(div, ...values)
}
