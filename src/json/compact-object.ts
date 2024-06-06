type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

/**
 * 现给定一个对象或数组 obj，返回一个 精简对象 。
 *
 * 精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为 假 值。
 *
 * 你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。
 * @link https://leetcode.cn/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param obj
 */

export function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        return obj
            .filter(Boolean)
            .map(item => compactObject(item as Obj)); // 递归处理数组中的每个元素
    } else if (typeof obj === 'object' && obj !== null) {
        // 创建一个新的对象以避免修改输入的引用
        const newObj: Obj = {};
        for (const key in obj) {
            const value = obj[key];
            if (Boolean(value)) {
                newObj[key] = compactObject(value as Obj); // 递归处理嵌套对象或数组
            }
        }
        return newObj;
    }
    return obj; // 基本类型直接返回
}
