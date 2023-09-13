import {removeExclamations} from "./exclamator";
import {countChars} from "../helpers/countChars";

jest.mock('../helpers/countChars', () => ({
    countChars: jest.fn(() => 50)
}))

describe("remove-exclamations", () => {
    it("should return an object with the 'total' number ocurrences and the 'value' string", () => {
        expect(removeExclamations("Hello World!!")).toEqual({
            total: 50,
            value: "Hello World!!",
        });
    })
    it("should return an object with the 'total' number ocurrences, the 'value' string and the 'limit' string if there is more than 50 occurrences", () => {
        jest.mocked(countChars).mockReturnValueOnce(51);
        expect(removeExclamations("Hello World!!")).toEqual({
            total: 51,
            value: "Hello World!!",
            limit: "It has passed the limit of 50 exclamation marks",
        });
    })
    it("should return an object with the 'total' number ocurrences, the 'value' string and the 'limit' string if there is more than 100 occurrences", () => {
        jest.mocked(countChars).mockReturnValueOnce(101);
        expect(removeExclamations("Hello World!!")).toEqual({
            total: 101,
            value: "Hello World!!",
            limit: "It has passed the limit of 100 exclamation marks",
        });
    })
    it("should return an object with the 'total' number ocurrences, the 'value' string and the 'limit' string if there is more than 150 occurrences", () => {
        jest.mocked(countChars).mockReturnValueOnce(151);
        expect(removeExclamations("Hello World!!")).toEqual({
            total: 151,
            value: "Hello World!!",
            limit: "It has passed the limit of 150 exclamation marks",
        });
    })
    it("should return an object with the 'total' number ocurrences, the 'value' string and the 'limit' string if there is more than 200 occurrences", () => {
        jest.mocked(countChars).mockReturnValueOnce(201);
        expect(removeExclamations("Hello World!!")).toEqual({
            total: 201,
            value: "Hello World!!",
            limit: "It has passed the last limit of 200 exclamation marks",
            invalid: true,
        });
    })
})
