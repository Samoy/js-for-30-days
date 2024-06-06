type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

export function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    return arr.sort((a, b) => {
        return fn(a) - fn(b);
    })
}