import {describe, test, expect, vi, beforeAll, afterAll} from "vitest";
import {timeLimit} from "@/promiseandtime/promise-time-limit";

describe('Test Promise time limit', () => {

    beforeAll(() => {
        vi.useFakeTimers()
    })

    afterAll(() => {
        vi.useRealTimers()
    })

    test('Test case 1', async () => {
        const limited = timeLimit(async (n: number) => {
            await new Promise(res => setTimeout(res, 100));
            return n * n;
        }, 50)
        limited(5).catch(error => expect(error).toBe('Time Limit Exceeded'))
        vi.advanceTimersByTime(100);
    })
    test('Test case 2', () => {
        const limited = timeLimit(async (n: number) => {
            await new Promise(res => setTimeout(res, 100));
            return n * n;
        }, 150)
        limited(5).then(res => expect(res).toBe(25));
        vi.advanceTimersByTime(100);
    })
    test('Test case 3', () => {
        const limited = timeLimit(async (a: number, b: number) => {
            await new Promise(res => setTimeout(res, 120));
            return a + b;
        }, 150)
        limited(5, 10).then(res => expect(res).toBe(15));
        vi.advanceTimersByTime(120);
    })
    test('Test case 4', () => {
        const limited = timeLimit(() => {
            throw "Error";
        }, 1000)
        limited().catch(error => expect(error).toBe('Error'))
        vi.advanceTimersByTime(0);
    })
})