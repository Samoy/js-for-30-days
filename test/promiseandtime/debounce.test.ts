import {vi, describe, expect, test, beforeAll, afterAll} from "vitest";
import {debounce} from "@/promiseandtime/debounce";

describe('Test debounce', () => {
    beforeAll(() => {
        vi.useFakeTimers()
    })
    afterAll(() => {
        vi.useRealTimers()
    })
    test('Test case 1', () => {
        const log = vi.fn(() => console.log('I have been called.'));
        const dlog = debounce(log, 100)
        setTimeout(dlog, 50)
        setTimeout(dlog, 75)
        vi.runAllTimers();
        expect(log).toHaveBeenCalledTimes(1)
    });
    test('Test case 2', () => {
        const log = vi.fn(() => console.log('I have been called.'));
        const dlog = debounce(log, 20)
        setTimeout(dlog, 70)
        setTimeout(dlog, 120)
        vi.runAllTimers();
        expect(log).toHaveBeenCalledTimes(2)
    });
    test('Test case 3', () => {
        const log = vi.fn(() => console.log('I have been called.'));
        const dlog = debounce(log, 50)
        setTimeout(dlog, 50)
        setTimeout(dlog, 300)
        setTimeout(dlog, 300)
        vi.runAllTimers();
        expect(log).toHaveBeenCalledTimes(2)
    });
});