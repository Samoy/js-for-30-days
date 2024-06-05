import {test, describe, expect, vi, beforeAll, afterAll} from "vitest";
import {cancellable} from "@/promiseandtime/timeout-cancellation";

describe('Test timeout cancellation', () => {
    beforeAll(() => {
        vi.useFakeTimers(); // 在所有测试开始前启用假的定时器
    });

    afterAll(() => {
        vi.clearAllTimers(); // 测试结束后清理
    });

    test('Test case 1', () => {
        const cancelTimeMs = 50;
        const mock = vi.fn((x: number) => x * 5);
        const cancelFn = cancellable(mock, [2], 20)
        setTimeout(cancelFn, cancelTimeMs);
        vi.runAllTimers();
        expect(mock).toBeCalled();
    });
    test('Test case 2', () => {
        const cancelTimeMs = 50;
        const mock = vi.fn((x: number) => x ** 2);
        const cancelFn = cancellable(mock, [2], 100)
        setTimeout(cancelFn, cancelTimeMs);
        vi.runAllTimers();
        expect(mock).not.toHaveBeenCalled();
    });
    test('Test case 3', () => {
        const cancelTimeMs = 100;
        const mock = vi.fn((x1: number, x2: number) => x1 * x2);
        const cancelFn = cancellable(mock, [2, 4], 30)
        setTimeout(cancelFn, cancelTimeMs);
        vi.runAllTimers();
        expect(mock).toBeCalled();
    });
})