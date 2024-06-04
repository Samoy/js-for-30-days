import {expect, test} from "vitest";
import {map} from "@/basearraytransform/apply-transform-over-each-element-in-array";

test('Test map', () => {
    expect(map([1, 2, 3], n => n + 1)).toStrictEqual([2, 3, 4])
    expect(map([1, 2, 3], (n, i) => n + i)).toStrictEqual([1, 3, 5])
    expect(map([10, 20, 30], () => 42)).toStrictEqual([42, 42, 42])
})