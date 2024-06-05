import {describe, expect, test} from "vitest";
import {isEmpty} from "@/json/is-object-empty";

describe('Test object is empty', () => {
    test('Test case 1', () => {
        expect(isEmpty({"x": 5, "y": 42})).toBeFalsy()
    })
    test('Test case 2', () => {
        expect(isEmpty({})).toBeTruthy()
    })
    test('Test case 3', () => {
        expect(isEmpty([null, false, 0])).toBeFalsy()
    })
})