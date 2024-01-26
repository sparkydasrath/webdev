// BASIC DECORATOR
export function time1(...args) {
    return function () {
        return "Hello decorator";
    };
}
// BETTER DECORATOR using context, etc
export function time(method, ctx) {
    const methodName = String(ctx.name);
    return function (...args) {
        const start = performance.now();
        console.log(`${methodName} started`);
        const result = method.call(this, ...args);
        const duration = (performance.now() - start).toFixed(2);
        console.log(`${methodName} ended ${duration} ms`);
        return result;
    };
}
