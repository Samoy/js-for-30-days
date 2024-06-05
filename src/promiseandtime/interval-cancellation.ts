type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

/**
 * 现给定一个函数 fn，一个参数数组 args 和一个时间间隔 t，返回一个取消函数 cancelFn。
 *
 * 在经过 cancelTimeMs 毫秒的延迟后，将调用返回的取消函数 cancelFn。
 *
 * setTimeout(cancelFn, cancelTimeMs)
 * 函数 fn 应立即使用参数 args 调用，然后每隔 t 毫秒调用一次，直到在 cancelTimeMs 毫秒时调用 cancelFn。
 * @link https://leetcode.cn/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param fn 执行函数
 * @param args 参数
 * @param t 间隔时间
 * @returns 取消函数
 */
export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    fn(...args);
    const interval = setInterval(() => fn(...args), t)
    return () => clearInterval(interval);
}