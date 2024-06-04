import {expect, test} from "vitest";
import {compose} from "@/functiontransform/function-composition";

test('Test compose', () => {
    const fn1 = compose([x => x + 1, x => x * x, x => 2 * x])
    expect(fn1(4)).toBe(65)
    const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x])
    expect(fn2(1)).toBe(1000)
    const fn3 = compose([])
    expect(fn3(42)).toBe(42)
})