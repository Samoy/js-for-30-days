import {describe, test, expect} from "vitest";
import {EventEmitter} from "@/class/event-emitter";

describe('Test EventEmitter', () => {
    test('Test case 1', () => {
        const emitter = new EventEmitter();
        expect(emitter.emit('firstEvent')).toEqual([]);
        emitter.subscribe('firstEvent', () => 5);
        emitter.subscribe('firstEvent', () => 6)
        expect(emitter.emit('firstEvent')).toEqual([5, 6]);
    })
    test('Test case 2', () => {
        const emitter = new EventEmitter();
        emitter.subscribe("firstEvent", function cb1(...args) {
            return args.join(',');
        });
        expect(emitter.emit('firstEvent', [1, 2, 3])).toEqual(["1,2,3"]);
        expect(emitter.emit('firstEvent', [3, 4, 6])).toEqual(["3,4,6"])
    })
    test('Test case 3', () => {
        const emitter = new EventEmitter();
        const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
        expect(emitter.emit("firstEvent", [1, 2, 3])).toEqual(["1,2,3"]);
        sub.unsubscribe();
        expect(emitter.emit("firstEvent", [4, 5, 6])).toEqual([]);
    })
    test('Test case 4', () => {
        const emitter = new EventEmitter();
        const sub1 = emitter.subscribe("firstEvent", x => x + 1);
        emitter.subscribe("firstEvent", x => x + 2);
        sub1.unsubscribe();
        expect(emitter.emit("firstEvent", [5])).toEqual([7])
    })
    test('Test case 5', () => {
        const emitter = new EventEmitter();
        emitter.subscribe("firstEvent", x => x + 1);
        const sub1 = emitter.subscribe("firstEvent", x => x + 2);
        const sub2 = emitter.subscribe("firstEvent", x => x + 3);
        sub1.unsubscribe();
        sub2.unsubscribe();
        expect(emitter.emit("firstEvent", [5])).toEqual([6])
    })
});