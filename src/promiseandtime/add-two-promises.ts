type P = Promise<number>

/**
 * 给定两个 promise 对象 promise1 和 promise2，返回一个新的 promise。promise1 和 promise2 都会被解析为一个数字。返回的 Promise 应该解析为这两个数字的和。
 * @link https://leetcode.cn/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param promise1
 * @param promise2
 */
export async function addTwoPromises(promise1: P, promise2: P): P {
    return await promise1 + await promise2;
}