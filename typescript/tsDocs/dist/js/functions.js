"use strict";
// ex1
function add(x, y) { return x + y; }
;
let myAdd1 = function (x, y) { return x + y; };
let myadd2 = (x, y) => x + y;
let r1 = myadd2(1, 2);
console.log(r1);
let myAdd3 = function (x, y) { return x + y; };
let r2 = myAdd3(1, 3);
console.log(r2);
// explicit return type
let noReturn = function (x) {
    console.log(x);
};
// inferred return type
let noReturn2 = function (x) {
    console.log(x);
};
noReturn(1000);
//ex2: optional and default params
function thingsToConcat(x, ...rest) {
    let r = x + rest.join("");
    ;
    console.log("type = ", typeof r);
    return r;
}
console.log(thingsToConcat(1, [2, "hello"]));
