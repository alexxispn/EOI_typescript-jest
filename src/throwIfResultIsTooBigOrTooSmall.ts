import {RESULT_IS_TOO_BIG_OR_TOO_SMALL} from "./constants";

export const throwIfResultIsTooBigOrTooSmall = (result: number) => {
    if ((result > Number.MAX_SAFE_INTEGER) || (result < Number.MIN_SAFE_INTEGER)) {
        throw new Error(RESULT_IS_TOO_BIG_OR_TOO_SMALL);
    }
}
