export function sum(...vals: number[]) {
    return vals.reduce((sum, val) => sum + val, 0)
}