import {createHelloWorld} from "@/closures/create-hello-world-function";
import {expect, test} from 'vitest'

test('Test createHelloWorld', () => {
    expect(createHelloWorld()()).toBe("Hello World")
    expect(createHelloWorld()({}, null, 42)).toBe("Hello World")
})