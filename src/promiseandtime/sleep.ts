/**
 * 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。
 * @link https://leetcode.cn/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param millis 睡眠时间
 */
export async function sleep(millis: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, millis)
    })
}