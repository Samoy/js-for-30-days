import {describe, expect, test} from "vitest";
import {chunk} from "@/json/chunk-array";

describe('Test array chunk', () => {
    test('Test case 1', () => {
        expect(chunk([1, 2, 3, 4, 5] as any[], 1)).toStrictEqual([[1], [2], [3], [4], [5]]);
    })
    test('Test case 2', () => {
        expect(chunk([1, 9, 6, 3, 2] as any[], 3)).toStrictEqual([[1, 9, 6], [3, 2]]);
    })
    test('Test case 3', () => {
        expect(chunk([8, 5, 3, 2, 6] as any[], 6)).toStrictEqual([[8, 5, 3, 2, 6]]);
    })
});