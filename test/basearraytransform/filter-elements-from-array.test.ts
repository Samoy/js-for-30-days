import {expect, test} from "vitest";
import {filter} from "@/basearraytransform/filter-elements-from-array";

test('Test filter', () => {
    expect(filter([0, 10, 20, 30], n => n > 10)).toStrictEqual([20, 30])
    expect(filter([1, 2, 3], (n, i) => i == 0)).toStrictEqual([1])
    expect(filter([-2, -1, 0, 1, 2], (n) => n + 1)).toStrictEqual([-2, 0, 1, 2])
})