import {div, multiply, sub, sum} from "./math-operators"
import {NAN_ERROR, RESULT_IS_TOO_BIG_OR_TOO_SMALL} from "./constants";
import {throwIfNaN} from "./throwIfNaN";
import {throwIfResultIsTooBigOrTooSmall} from "./throwIfResultIsTooBigOrTooSmall";

const mockThrowIfNaN = throwIfNaN as jest.MockedFunction<typeof throwIfNaN>
const mockThrowIfResultIsTooBigOrTooSmall = throwIfResultIsTooBigOrTooSmall as jest.MockedFunction<typeof throwIfResultIsTooBigOrTooSmall>

jest.mock('./throwIfNaN', () => ({
    throwIfNaN: jest.fn()
}))

jest.mock('./throwIfResultIsTooBigOrTooSmall', () => ({
    throwIfResultIsTooBigOrTooSmall: jest.fn()
}))

beforeEach(() => {
    mockThrowIfNaN.mockReset()
    mockThrowIfResultIsTooBigOrTooSmall.mockReset()
})

describe('sum', () => {
    it('should return a NaN_ERROR if any of the parameters is NaN', () => {
        mockThrowIfNaN.mockImplementation(() => {
            throw new Error(NAN_ERROR)
        })

        expect(() => sum(NaN, NaN)).toThrowError(NAN_ERROR)
    })

    it('should return a RESULT_IS_TOO_BIG_OR_TOO_SMALL if the result is too big or too small', () => {
        mockThrowIfResultIsTooBigOrTooSmall.mockImplementation(() => {
            throw new Error(RESULT_IS_TOO_BIG_OR_TOO_SMALL)
        })
        const bigNumber = 9007199254740992
        const smallNumber = -9007199254740992

        expect(() => sum(bigNumber, 100)).toThrowError(RESULT_IS_TOO_BIG_OR_TOO_SMALL)
        expect(() => sum(smallNumber, -100)).toThrowError(RESULT_IS_TOO_BIG_OR_TOO_SMALL)
    })

    it('should sum two integers', () => {
        expect(sum(1, 1)).toBe(2)
    })

    it('should sum two small floats', () => {
        expect(sum(0.1, 0.2)).toStrictEqual(0.3)
    })
})

describe('sub', () => {
    it('should return a NAN_ERROR if any of the parameters is NaN', () => {
        mockThrowIfNaN.mockImplementation(() => {
            throw new Error(NAN_ERROR)
        })

        expect(() => sub(NaN, NaN)).toThrowError(NAN_ERROR)
    })

    it('should sub two integers', () => {
        expect(sub(1, 1)).toStrictEqual(0)
    })
})

describe('multiply', () => {
    it('should return a NAN_ERROR if any of the parameters is NaN', () => {
        mockThrowIfNaN.mockImplementation(() => {
            throw new Error(NAN_ERROR)
        })

        expect(() => multiply(NaN, NaN)).toThrowError(NAN_ERROR)
    })

    it('should multiply two integers', () => {
        expect(multiply(1, 1)).toStrictEqual(1)
    })
})

describe('div', () => {
    it('should return a NAN_ERROR if any of the parameters is NaN', () => {
        mockThrowIfNaN.mockImplementation(() => {
            throw new Error(NAN_ERROR)
        })

        expect(() => div(NaN, NaN)).toThrowError(NAN_ERROR)
    })

    it('should return 0 if we divide 0 by any number', () => {
        expect(div(0, 2)).toBe(0)
    })

    it('should return Infinity if we divide any number by 0', () => {
        expect(div(2, 0)).toBe(Infinity)
    })

    it('should return -Infinity if we divide any number by 0', () => {
        expect(div(-2, 0)).toBe(-Infinity)
    })
})
