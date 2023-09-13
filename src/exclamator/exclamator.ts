import {countChars} from "../helpers/countChars"
// TODO Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner, you can assume that the input data is always a non empty string, no need to verify it.

// should return an object with the 'total' number ocurrences and the 'value' string;

// if there is more than 50 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value

// if there is more than 100 occurrences we should add new prop 'limit' to object with 'It has passed second limit value

// if there is more than 150 occurrences we should add new prop 'limit' to object with 'It has passed third limit' value

// if there is more than 200 occurrences we should add new prop 'limit' to object with 'It has passed the last limit' value and another prop 'invalid' with true value

export const removeExclamations = (sentence: string, limit: number = 200) => {
    const occurrences = countChars('!', sentence);
    let result: { total: number; value: string; limit?: string; invalid?: boolean } = {
        total: occurrences,
        value: sentence,
    }

    if (occurrences <= 50) return result;

    if (occurrences > limit) {
        result.limit = `It has passed the last limit of ${limit} exclamation marks`;
        result.invalid = true;
    } else {
        for (let i = limit; i >= limit - 150; i -= 50) {
            if (occurrences > i - 50) {
                const limitNumber = i - 50
                result.limit = `It has passed the limit of ${i - 50} exclamation marks`;
                break;
            }
        }
    }

    return result
}


