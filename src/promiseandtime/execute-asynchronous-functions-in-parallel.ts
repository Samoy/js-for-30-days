type Fn<T> = () => Promise<T>

/**
 * 给定一个异步函数数组 functions，返回一个新的 promise 对象 promise。数组中的每个函数都不接受参数并返回一个 promise。所有的 promise 都应该并行执行。
 *
 * promise resolve 条件：
 *
 * 当所有从 functions 返回的 promise 都成功的并行解析时。promise 的解析值应该是一个按照它们在 functions 中的顺序排列的 promise 的解析值数组。promise 应该在数组中的所有异步函数并行执行完成时解析。
 * promise reject 条件：
 *
 * 当任何从 functions 返回的 promise 被拒绝时。promise 也会被拒绝，并返回第一个拒绝的原因。
 * 请在不使用内置的 Promise.all 函数的情况下解决。
 * @link https://leetcode.cn/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param functions 所执行的函数数组
 */
export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
        let result: T[] = new Array(functions.length), count = 0
        functions.forEach((fun, i) => {
            Promise.resolve(fun).then(async fn => {
                result[i] = await fn()
                count++
                if (count == functions.length) {
                    resolve(result)
                }
            }).catch(reject)
        })
    })
}