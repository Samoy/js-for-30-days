import {expect, test} from "vitest";
import {once} from "@/functiontransform/allow-one-function-call";

test('Test Call Once', () => {
    const onceCall1 = once((a: number, b: number, c: number) => (a + b + c))
    expect(onceCall1(1, 2, 3)).toBe(6)
    expect(onceCall1(2, 3, 6)).toBeUndefined()
    const oneCall2 = once((a: number, b: number, c: number) => (a * b * c))
    expect(oneCall2(5, 7, 4)).toBe(140)
    expect(oneCall2(5, 7, 4)).toBeUndefined()
    expect(oneCall2(5, 7, 4)).toBeUndefined()
})