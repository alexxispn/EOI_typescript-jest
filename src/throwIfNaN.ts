import {NAN_ERROR} from "./constants";

export const throwIfNan = (a: number, b: number): void => {
    if (isNaN(a) || isNaN(b)) throw new Error(NAN_ERROR)
}
