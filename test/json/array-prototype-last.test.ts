import '@/json/array-prototype-last'
import {describe, expect, test} from "vitest";

describe('Test Array last()', () => {
    test('Test case 1', () => {
        expect([null, {}, 3].last()).toBe(3)
    })
    test('Test case 2', () => {
        expect([].last()).toBe(-1)
    })
    test('Test case 1', () => {
        expect([null].last()).toBeNull()
    })
});