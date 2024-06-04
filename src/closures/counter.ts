/**
 * 给定一个整型参数 n，请你编写并返回一个 counter 函数。这个 counter 函数最初返回 n，每次调用它时会返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。
 * @link https://leetcode.cn/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param n 返回计数器的值
 */

export function createCounter(n: number): () => number {
    return function () {
        return n++
    }
}