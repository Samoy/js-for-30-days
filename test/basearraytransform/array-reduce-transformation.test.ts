import {expect, test} from "vitest";
import {reduce} from "@/basearraytransform/array-reduce-transformation";

test('Test reduce', () => {
    expect(reduce([1, 2, 3, 4], (s, c) => s + c, 0)).toBe(10)
    expect(reduce([1, 2, 3, 4], (s, c) => s + c * c, 100)).toBe(130)
    expect(reduce([], () => 0, 25)).toBe(25)
})