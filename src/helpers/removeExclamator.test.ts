import {removeExclamations} from "./removeExclamator";

describe("remove-exclamations", () => {
    it("should return an '!' when the string is empty", () => {
        expect(removeExclamations("")).toEqual("!");
    })
    it("should return an '!' when the string is '!' ", () => {
        expect(removeExclamations("!")).toEqual("!");
    })
    it("should return an '!' when the string is '!!' ", () => {
        expect(removeExclamations("!!")).toEqual("!");
    })
    it("should return an '!' when the string is '!!!' ", () => {
        expect(removeExclamations("!!!")).toEqual("!");
    })
})
