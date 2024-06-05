type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

/**
 * 给定一个对象或数组，判断它是否为空。
 *
 * 一个空对象不包含任何键值对。
 * 一个空数组不包含任何元素。
 * 你可以假设对象或数组是通过 JSON.parse 解析得到的。
 * @link https://leetcode.cn/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param obj
 */
export function isEmpty(obj: Obj): boolean {
    for (const _ in obj) {
        return false;
    }
    return true;
}