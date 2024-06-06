type MultiDimensionalArray = (number | MultiDimensionalArray)[];
/**
 * 请你编写一个函数，它接收一个 多维数组 arr 和它的深度 n ，并返回该数组的 扁平化 后的结果。
 *
 * 多维数组 是一种包含整数或其他 多维数组 的递归数据结构。
 *
 * 数组 扁平化 是对数组的一种操作，定义是将原数组部分或全部子数组删除，并替换为该子数组中的实际元素。只有当嵌套的数组深度大于 n 时，才应该执行扁平化操作。第一层数组中元素的深度被认为是 0。
 *
 * 请在没有使用内置方法 Array.flat 的前提下解决这个问题。
 * @link https://leetcode.cn/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param arr
 * @param n
 */
export const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) return arr;
    const res: MultiDimensionalArray = [];
    for (const item of arr) {
        // 如果是数组，则递归调用
        if (Array.isArray(item)) {
            res.push(...flat(item, n - 1));
        }
        // 如果不是数组，则直接添加到结果数组中
        else {
            res.push(item);
        }
    }
    return res;
};