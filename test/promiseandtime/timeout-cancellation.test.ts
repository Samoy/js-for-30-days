import {test, describe, expect} from "vitest";
import {cancellable} from "@/promiseandtime/timeout-cancellation";

describe('Test timeout cancellation', () => {
    test('Test case 1', () => {
        const cancelTimeMs = 50;
        const cancelFn = cancellable((x: number) => x * 5, [2], 20);
        setTimeout(cancelFn, cancelTimeMs);
        setTimeout(() => {
            expect(cancelFn()).toBe(10);
        }, 20);
    })
    test('Test case 2', () => {
        const cancelTimeMs = 50;
        const cancelFn = cancellable((x: number) => x ** 2, [2], 100);
        setTimeout(cancelFn, cancelTimeMs);
        setTimeout(() => {
            expect(cancelFn()).toBeUndefined();
        }, 100);
    })
    test('Test case 3', () => {
        const cancelTimeMs = 100;
        const cancelFn = cancellable((x1: number, x2: number) => x1 * x2, [2, 4], 30);
        setTimeout(cancelFn, cancelTimeMs);
        setTimeout(() => {
            expect(cancelFn()).toBe(8);
        }, 30);
    })
})