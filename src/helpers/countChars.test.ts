import {countChars} from "./countChars";
import {ERROR_CHARACTER_LENGTH} from "../constants";

describe('countChars', () => {
    it('should return 0 when the character is not found', () => {
        expect(countChars('a', 'b')).toBe(0)
    })
    it('should return 1 when the character is found once', () => {
        expect(countChars('a', 'a')).toBe(1)
    })
    it('should not be accent sensitive', () => {
        expect(countChars('a', 'á')).toBe(1)
    })
    it('should not be case sensitive', () => {
        expect(countChars('a', 'A')).toBe(1)
    })
    it('ñ edge cases', () => {
        expect(countChars('ñ', 'n')).toBe(0)
        expect(countChars('ñ', 'ñ')).toBe(1)
    })
    it('should throw an error when the character to find is longer than one character', () => {
        expect(() => countChars('aa', 'a')).toThrow(ERROR_CHARACTER_LENGTH)
    })
})
