type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

/**
 * 请你编写一个名为 expect 的函数，用于帮助开发人员测试他们的代码。它应该接受任何值 val 并返回一个包含以下两个函数的对象。
 *
 * <p>toBe(val) 接受另一个值并在两个值相等（ === ）时返回 true 。如果它们不相等，则应抛出错误 "Not Equal" 。</p>
 * <p>notToBe(val) 接受另一个值并在两个值不相等（ !== ）时返回 true 。如果它们相等，则应抛出错误 "Equal" 。</p>
 * @link https://leetcode.cn/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param val 待测试的值
 */
export function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (actual): boolean => {
            if (val !== actual) {
                throw new Error('Not Equal')
            }
            return val === actual
        },
        notToBe: (actual): boolean => {
            if (val === actual) {
                throw new Error('Equal')
            }
            return val !== actual
        }
    }
}