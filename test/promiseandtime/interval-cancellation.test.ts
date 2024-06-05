import {describe, expect, test, beforeAll, vi, afterAll} from "vitest";
import {cancellable} from "@/promiseandtime/interval-cancellation";

describe('Test cancel interval', () => {
    beforeAll(() => {
        vi.useFakeTimers();
    })
    afterAll(() => {
        vi.useRealTimers();
    })
    test('Test case 1', () => {
        const mock = vi.fn((x: number) => x * 2)
        const cancelTimeMs = 190;
        const cancelFn = cancellable(mock, [4], 35)
        setTimeout(cancelFn, cancelTimeMs);
        vi.runAllTimers();
        expect(mock).toHaveBeenCalledTimes(6)
    })
    test('Test case 2', () => {
        const mock = vi.fn((x1: number, x2: number) => x1 * x2)
        const cancelTimeMs = 165;
        const cancelFn = cancellable(mock, [2, 5], 30)
        setTimeout(cancelFn, cancelTimeMs);
        vi.runAllTimers();
        expect(mock).toHaveBeenCalledTimes(6)
    })
    test('Test case 3', () => {
        const mock = vi.fn((x1: number, x2: number, x3: number) => (x1 + x2 + x3))
        const cancelTimeMs = 180;
        const cancelFn = cancellable(mock, [5, 1, 3], 50)
        setTimeout(cancelFn, cancelTimeMs)
        vi.runAllTimers();
        expect(mock).toHaveBeenCalledTimes(4)
    })
})