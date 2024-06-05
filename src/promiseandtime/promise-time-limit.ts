type Fn = (...params: any[]) => Promise<any>;

/**
 * 请你编写一个函数，它接受一个异步函数 fn 和一个以毫秒为单位的时间 t。它应根据限时函数返回一个有 限时 效果的函数。函数 fn 接受提供给 限时 函数的参数。
 *
 * 限时 函数应遵循以下规则：
 *
 * 如果 fn 在 t 毫秒的时间限制内完成，限时 函数应返回结果。
 * 如果 fn 的执行超过时间限制，限时 函数应拒绝并返回字符串 "Time Limit Exceeded" 。
 *
 * @link https://leetcode.cn/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param fn 执行函数
 * @param t 超时时间
 */

export function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args) {
        let timer: NodeJS.Timeout;
        const timeoutPromise = new Promise((res, rej) => {
            timer = setTimeout(() => rej('Time Limit Exceeded'), t)
        });

        return Promise.race([fn(...args), timeoutPromise]).then(res => {
            clearTimeout(timer);
            return res;
        });
    }
}