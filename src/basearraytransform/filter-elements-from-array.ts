type Fn = (n: number, i: number) => any

/**
 * 给定一个整数数组 arr 和一个过滤函数 fn，并返回一个过滤后的数组 filteredArr 。
 *
 * fn 函数接受一个或两个参数：
 *
 * arr[i] - arr 中的数字
 * i - arr[i] 的索引
 * filteredArr 应该只包含使表达式 fn(arr[i], i) 的值为 真值 的 arr 中的元素。真值 是指 Boolean(value) 返回参数为 true 的值。
 *
 * 请在不使用内置的 Array.filter 方法的情况下解决该问题。
 * @link https://leetcode.cn/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param arr 原数组
 * @param fn 过滤函数
 */
export function filter(arr: number[], fn: Fn): number[] {
    const resultArray: number[] = [];
    for (const i in arr) {
        if (fn(arr[i], Number(i))) {
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
}