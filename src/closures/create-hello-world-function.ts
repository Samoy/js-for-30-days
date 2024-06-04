/**
 * 请你编写一个名为 createHelloWorld 的函数。它应该返回一个新的函数，该函数总是返回 "Hello World" 。
 * @link https://leetcode.cn/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @returns  Hello World
 */
export function createHelloWorld() {

    return function (...args): string {
        return "Hello World";
    };
}