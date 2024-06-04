type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

/**
 * 给定一个函数 fn ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 fn 最多被调用一次。
 *
 * 第一次调用返回的函数时，它应该返回与 fn 相同的结果。
 * 第一次后的每次调用，它应该返回 undefined 。
 * @link https://leetcode.cn/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param fn 一次函数
 */
export function once(fn: Function): OnceFn {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn.apply(this,args);
        }
    };
}