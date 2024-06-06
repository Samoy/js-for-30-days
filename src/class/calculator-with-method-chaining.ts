/**
 * 设计一个类 Calculator 。该类应提供加法、减法、乘法、除法和乘方等数学运算功能。同时，它还应支持连续操作的方法链式调用。Calculator 类的构造函数应接受一个数字作为 result 的初始值。
 *
 * 你的 Calculator 类应包含以下方法：
 *
 * add - 将给定的数字 value 与 result 相加，并返回更新后的 Calculator 对象。
 * subtract - 从 result 中减去给定的数字 value ，并返回更新后的 Calculator 对象。
 * multiply - 将 result 乘以给定的数字 value ，并返回更新后的 Calculator 对象。
 * divide - 将 result 除以给定的数字 value ，并返回更新后的 Calculator 对象。如果传入的值为 0 ，则抛出错误 "Division by zero is not allowed" 。
 * power - 计算 result 的幂，指数为给定的数字 value ，并返回更新后的 Calculator 对象。（result = result ^ value ）
 * getResult - 返回 result 的值。
 * 结果与实际结果相差在 10-5 范围内的解被认为是正确的。
 * @link https://leetcode.cn/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export class Calculator {
    private result: number

    constructor(value: number) {
        this.result = value;
    }

    add(value: number): Calculator {
        this.result += value;
        return this;
    }

    subtract(value: number): Calculator {
        this.result -= value;
        return this;
    }

    multiply(value: number): Calculator {
        this.result *= value;
        return this;
    }

    divide(value: number): Calculator {
        if (value == 0) throw new Error("Division by zero is not allowed")
        this.result /= value;
        return this;
    }

    power(value: number): Calculator {
        this.result = Math.pow(this.result, value);
        return this;
    }

    getResult(): number {
        return this.result;
    }
}