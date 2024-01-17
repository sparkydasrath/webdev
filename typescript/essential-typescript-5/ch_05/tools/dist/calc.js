export function sum(...vals) {
    return vals.reduce((sum, val) => sum + val, 0);
}
