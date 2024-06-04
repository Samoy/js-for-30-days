import {test, expect, describe} from "vitest";
import {addTwoPromises} from "@/promiseandtime/add-two-promises";

describe('Test add two promise', () => {
    test('Test case 1', async () => {
        const promise1 = new Promise<number>(resolve => setTimeout(() => resolve(2), 20)),
            promise2 = new Promise<number>(resolve => setTimeout(() => resolve(5), 60))
        const ans = await addTwoPromises(promise1, promise2);
        expect(ans).toBe(7)
    })
    test('Test case 2', async () => {
        const promise1 = new Promise<number>(resolve => setTimeout(() => resolve(10), 50)),
            promise2 = new Promise<number>(resolve => setTimeout(() => resolve(-12), 30))
        const ans = await addTwoPromises(promise1, promise2)
        expect(ans).toBe(-2)
    })
})