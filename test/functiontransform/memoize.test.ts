import {beforeEach, describe, expect, test} from "vitest";
import {memoize, callCount, reset} from '@/functiontransform/memoize'

describe('Test memoize', () => {

    beforeEach(() => {
        reset()
    })

    test('Test memoize sum', async () => {
        const sum = (a: number, b: number) => a + b;
        const memoizedSum = memoize(sum);
        expect(memoizedSum(2, 2)).toBe(4)
        expect(memoizedSum(2, 2)).toBe(4)
        expect(callCount).toBe(1)
        expect(memoizedSum(1, 2)).toBe(3)
        expect(callCount).toBe(2)
    })
    test('Test memoize factorial', async () => {
        const factorial = (n: number) => (n <= 1) ? 1 : (n * factorial(n - 1));
        const memoFactorial = memoize(factorial);
        expect(memoFactorial(2)).toBe(2)
        expect(memoFactorial(3)).toBe(6)
        expect(memoFactorial(2)).toBe(2)
        expect(memoFactorial(5)).toBe(120)
        expect(callCount).toBe(3)
        expect(memoFactorial(3)).toBe(6)
        expect(callCount).toBe(3)
    })
    test('Test memoize fib', async () => {
        const fib = (n: number) => n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
        const memoFib = memoize(fib);
        expect(memoFib(5)).toBe(8);
        expect(callCount).toBe(1);
    })
})