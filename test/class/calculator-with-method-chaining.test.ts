import {describe, expect, test} from "vitest";
import {Calculator} from "@/class/calculator-with-method-chaining";

describe('Test Calculator', () => {
    test('Test case 1', () => {
        expect(new Calculator(10).add(5).subtract(7).getResult())
            .toBe(8)
    })
    test('Test case 2', () => {
        expect(new Calculator(2).multiply(5).power(2).getResult())
            .toBe(100)
    })
    test('Test case 3', () => {
        expect(() => new Calculator(20).divide(0).getResult())
            .toThrowError('Division by zero is not allowed')
    })
});