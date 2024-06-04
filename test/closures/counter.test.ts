import {expect, test} from 'vitest'
import {createCounter} from "@/closures/counter";

test('Test Counter', () => {
    const testCase1 = createCounter(10);
    expect(testCase1()).toBe(10);
    expect(testCase1()).toBe(11);
    expect(testCase1()).toBe(12);
    const testCase2 = createCounter(-2);
    expect(testCase2()).toBe(-2);
    expect(testCase2()).toBe(-1);
    expect(testCase2()).toBe(0);
    expect(testCase2()).toBe(1);
    expect(testCase2()).toBe(2);
})