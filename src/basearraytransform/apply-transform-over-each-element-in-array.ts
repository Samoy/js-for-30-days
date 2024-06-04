/**
 * 编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。
 *
 * 返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。
 *
 * 请你在不使用内置方法 Array.map 的前提下解决这个问题。
 * @link https://leetcode.cn/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param arr 原数组
 * @param fn 转换器
 */
export function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let newArray = new Array(arr.length);
    for (const i in arr) {
        newArray[i] = fn(arr[i], Number(i));
    }
    return newArray;
}