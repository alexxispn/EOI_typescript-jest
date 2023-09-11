import {ERROR_NAN} from "../constants";

export const throwIfNaN = (a: number, b: number): void => {
    if (isNaN(a) || isNaN(b)) throw new Error(ERROR_NAN)
}
