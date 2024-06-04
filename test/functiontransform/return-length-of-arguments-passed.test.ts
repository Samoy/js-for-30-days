import {expect, test} from "vitest";
import {argumentsLength} from "@/functiontransform/return-length-of-arguments-passed";

test('Test arguments length', () => {
    expect(argumentsLength(5)).toBe(1)
    expect(argumentsLength({}, null, "3")).toBe(3)
})