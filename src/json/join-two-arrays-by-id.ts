type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

/**
 * 现给定两个数组 arr1 和 arr2 ，返回一个新的数组 joinedArray 。两个输入数组中的每个对象都包含一个 id 字段。
 *
 * joinedArray 是一个通过 id 将 arr1 和 arr2 连接而成的数组。joinedArray 的长度应为唯一值 id 的长度。返回的数组应按 id 升序 排序。
 *
 * 如果一个 id 存在于一个数组中但不存在于另一个数组中，则该对象应包含在结果数组中且不进行修改。
 *
 * 如果两个对象共享一个 id ，则它们的属性应进行合并：
 *
 * 如果一个键只存在于一个对象中，则该键值对应该包含在对象中。
 * 如果一个键在两个对象中都包含，则 arr2 中的值应覆盖 arr1 中的值。
 * @link https://leetcode.cn/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param arr1
 * @param arr2
 */
export function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const map: Map<number, ArrayType> = new Map<number, ArrayType>();
    for (const ele of arr1) {
        map.set(ele.id, ele)
    }
    for (const ele of arr2) {
        if (map.has(ele.id)) {
            map.set(ele.id, {...map.get(ele.id), ...ele})
        } else {
            map.set(ele.id, ele)
        }
    }
    return Array.from(map.values()).sort((a, b) => a.id - b.id)
}