type Fn = (...params: number[]) => number

/**
 * 请你编写一个函数 fn，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。
 *
 * 记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。
 *
 * 你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。
 *
 *  sum 接收两个整型参数 a 和 b ，并返回 a + b 。假设如果参数 (b, a) 已经缓存了值，其中 a != b，它不能用于参数 (a, b)。例如，如果参数是 (3, 2) 和 (2, 3)，则应进行两个单独的调用。
 *  fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
 *  factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。
 * @link https://leetcode.cn/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param fn
 */

let callCount = 0;

function memoize(fn: Fn): Fn {
    const cache = new Map<string, number>()
    return function (...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }
        callCount++
        const ans = fn(...args)
        cache.set(key, ans)
        return ans
    }
}

function reset() {
    callCount = 0
}

export {memoize, callCount, reset}