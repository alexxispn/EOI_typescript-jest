import {sub} from './sub'
import {validateParameters} from "../helpers/validateParameters";
import {operationAll} from "../helpers/operationAll";

export const subAll = (...values: number[]): number => {
    values.forEach((value) => validateParameters(value))
    return operationAll(sub, ...values)
}

