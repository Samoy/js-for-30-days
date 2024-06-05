import {promiseAll} from "@/promiseandtime/execute-asynchronous-functions-in-parallel";
import {afterAll, beforeAll, describe, expect, test, vi} from "vitest";

describe('Test Promise all', () => {
    beforeAll(() => {
        vi.useFakeTimers()
    })
    afterAll(() => {
        vi.useRealTimers()
    })
    test('Test case 1', () => {
        promiseAll([
            () => new Promise(resolve => setTimeout(() => resolve(5), 200))
        ]).then((res) => {
            expect(res).toContainEqual(5)
        })
        vi.runAllTimers()
    })
    test('Test case 2', () => {
        promiseAll([
            () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
            () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
        ]).catch(error => expect(error).toBe('Error'))
        vi.runAllTimers()
    })
    test('Test case 3', () => {
        promiseAll([
            () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
            () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
            () => new Promise(resolve => setTimeout(() => resolve(16), 100))
        ]).then((res) => {
            expect(res).toStrictEqual([4, 10, 16])
        })
        vi.runAllTimers()
    })
});