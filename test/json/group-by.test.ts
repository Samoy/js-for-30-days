import {describe, expect, test} from "vitest";
import '@/json/group-by'

describe('Test array group by', () => {
    test('Test case 1', () => {
        expect([
            {"id": "1"},
            {"id": "1"},
            {"id": "2"}
        ].groupBy(item => item.id)).toEqual({
            "1": [{"id": "1"}, {"id": "1"}],
            "2": [{"id": "2"}]
        })
    })
    test('Test case 2', () => {
        expect([
            [1, 2, 3],
            [1, 3, 5],
            [1, 5, 9]
        ].groupBy(list => String(list[0]))).toEqual({
            "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
        })
    })
    test('Test case 3', () => {
        expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(n => String(n > 5))).toEqual({
            "true": [6, 7, 8, 9, 10],
            "false": [1, 2, 3, 4, 5]
        })
    })
});