/**
 * 创建一个名为 ArrayWrapper 的类，它在其构造函数中接受一个整数数组作为参数。该类应具有以下两个特性：
 *
 * 当使用 + 运算符将两个该类的实例相加时，结果值为两个数组中所有元素的总和。
 * 当在实例上调用 String() 函数时，它将返回一个由逗号分隔的括在方括号中的字符串。例如，[1,2,3] 。
 * @link https://leetcode.cn/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export class ArrayWrapper extends Number {
    private readonly nums: number[]

    constructor(nums: number[]) {
        super();
        this.nums = nums;
    }

    valueOf(): number {
        return this.nums.reduce((s, a) => s + a, 0)
    }

    toString(): string {
        return `[${this.nums}]`
    }
}