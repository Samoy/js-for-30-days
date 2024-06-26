interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}

/**
 * 请你编写一段可应用于所有数组的代码，使任何数组调用 array. groupBy(fn) 方法时，它返回对该数组 分组后 的结果。
 *
 * 数组 分组 是一个对象，其中的每个键都是 fn(arr[i]) 的输出的一个数组，该数组中含有原数组中具有该键的所有项。
 *
 * 提供的回调函数 fn 将接受数组中的项并返回一个字符串类型的键。
 *
 * 每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。
 *
 * 请在不使用 lodash 的 _.groupBy 函数的前提下解决这个问题。
 * @link https://leetcode.cn/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param fn 分组函数
 */
Array.prototype.groupBy = function <T>(fn: (item: T) => string): Record<string, T[]> {
    return this.reduce((acc: Record<string, T[]>, item: T) => {
        const key = fn.call(fn, item)
        if (!Reflect.has(acc, key)) {
            acc[key] = []
        }
        acc[key].push(item)
        return acc;
    }, {})
}