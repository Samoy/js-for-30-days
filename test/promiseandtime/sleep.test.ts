import {describe, expect, test} from "vitest";
import {sleep} from "@/promiseandtime/sleep";

describe('Test sleep', () => {
    test('Test case 1', () => {
        let t = Date.now();
        sleep(100)
            .then(() => {
                expect(Date.now() - t).toBe(100)
            })
    })
    test('Test case 2', async () => {
        let t = Date.now();
        sleep(200)
            .then(() => {
                expect(Date.now() - t).toBe(200)
            })
    })
})