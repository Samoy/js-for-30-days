type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

/**
 * 请你编写一个函数 argumentsLength，返回传递给该函数的参数数量。
 * @link https://leetcode.cn/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param args 参数
 */
export function argumentsLength(...args: JSONValue[]): number {
    return args.length
}