import {test, expect} from "vitest";
import {createCounter} from "@/closures/counter-ii";

test('Test Counter Ⅱ', () => {
    const testCase1 = createCounter(5);
    expect(testCase1.increment()).toBe(6);
    expect(testCase1.reset()).toBe(5);
    expect(testCase1.decrement()).toBe(4);

    const testCase2 = createCounter(0)
    expect(testCase2.increment()).toBe(1);
    expect(testCase2.increment()).toBe(2);
    expect(testCase2.decrement()).toBe(1);
    expect(testCase2.reset()).toBe(0);
    expect(testCase2.reset()).toBe(0);
})