import {describe, expect, test} from "vitest";
import {ArrayWrapper} from "@/class/array-wrapper";

describe('Test Array Wrapper', () => {
    test('Test case 1', () => {
        const obj1 = new ArrayWrapper([1, 2]);
        const obj2 = new ArrayWrapper([3, 4]);
        // @ts-ignore
        expect(obj1 + obj2).toBe(10);
    });
    test('Test case 2', () => {
        const obj1 = new ArrayWrapper([23, 98, 42, 70]);
        expect(String(obj1)).toBe('[23,98,42,70]');
    });
    test('Test case 3', () => {
        const obj1 = new ArrayWrapper([]);
        const obj2 = new ArrayWrapper([]);
        // @ts-ignore
        expect(obj1 + obj2).toBe(0);
    });
});