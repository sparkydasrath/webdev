var fibonacci = function (val) {

    if (val < 0) {
        return "OOPS";
    }

    if (val === 0) {
        return 0;
    }
    if (val === 1) {
        return 1;
    } else {
        return fibonacci(val - 1) + fibonacci(val - 2);
    }
}

let f1 = fibonacci(0);
console.log("0: ", f1);

let f2 = fibonacci(1);
console.log("1: ", f2);

let f3 = fibonacci(2);
console.log("2: ", f3);

let f4 = fibonacci(3);
console.log("3: ", f4);

let f5 = fibonacci(4);
console.log("4: ", f5);

module.exports = fibonacci