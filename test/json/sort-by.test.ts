import {describe, test, expect} from "vitest";
import {sortBy} from "@/json/sort-by";

describe('Test array sorted', () => {
    test('Test case 1', () => {
        expect(sortBy([5, 4, 1, 2, 3], (x: number) => x)).toEqual([1, 2, 3, 4, 5])
    })
    test('Test case 2', () => {
        expect(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d: {
            x: number
        }) => d.x)).toEqual([{"x": -1}, {"x": 0}, {"x": 1}])
    })
    test('Test case 3', () => {
        expect(sortBy([[3, 4], [5, 2], [10, 1]], (x: number[]) => x[1])).toEqual([[10, 1], [5, 2], [3, 4]])
    })
});