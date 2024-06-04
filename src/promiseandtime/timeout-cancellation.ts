type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

/**
 * 给定一个函数 fn ，一个参数数组 args 和一个以毫秒为单位的超时时间 t ，返回一个取消函数 cancelFn 。
 *
 * 在 cancelTimeMs 的延迟后，返回的取消函数 cancelFn 将被调用。
 *
 * setTimeout(cancelFn, cancelTimeMs)
 * 最初，函数 fn 的执行应该延迟 t 毫秒。
 *
 * 如果在 t 毫秒的延迟之前调用了函数 cancelFn，它应该取消 fn 的延迟执行。否则，如果在指定的延迟 t 内没有调用 cancelFn，则应执行 fn，并使用提供的 args 作为参数。
 *
 * @link https://leetcode.cn/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param fn 给定函数
 * @param args 参数
 * @param t 超时时间
 * @returns 取消函数
 */
export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    const timer = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timer);
}