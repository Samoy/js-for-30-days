import {expect as ex} from '@/closures/to-be-or-not-to-be'
import {test, expect} from "vitest";

test('Test to be or no to be', () => {
    expect(ex(5).toBe(5)).toBeTruthy()
    expect(() => ex(5).toBe(null)).toThrowError('Not Equal')
    expect(ex(5).notToBe(null)).toBeTruthy()
    expect(ex('10').notToBe(10)).toBeTruthy()
})