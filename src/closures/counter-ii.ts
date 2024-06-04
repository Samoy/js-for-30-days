type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

/**
 * 请你写一个函数 createCounter。这个函数接收一个初始的整数值 init。并返回一个包含三个函数的对象。
 *
 * 这三个函数是：
 *
 * increment() 将当前值加 1 并返回。
 * decrement() 将当前值减 1 并返回。
 * reset() 将当前值设置为 init 并返回。
 * @link https://leetcode.cn/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param init
 */
export function createCounter(init: number): Counter {
    let plus = 0, minus = 0;
    return {
        increment: () => {
            plus++;
            return ++init;
        },
        decrement: () => {
            minus++;
            return --init;
        },
        reset: () => {
            init = init - plus + minus;
            plus = 0;
            minus = 0;
            return init;
        }
    }
}
