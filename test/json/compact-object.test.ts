import {describe, expect, test} from "vitest";
import {compactObject} from "@/json/compact-object";

describe('Test compact object', () => {
    test('Test case 1', () => {
        expect(compactObject([null, 0, false, 1])).toEqual([1])
    })
    test('Test case 2', () => {
        expect(compactObject({"a": null, "b": [false, 1]})).toEqual({"b": [1]})
    })
    test('Test case 3', () => {
        expect(compactObject([null, 0, 5, [0], [false, 16]])).toEqual([5, [], [16]])
    })
});