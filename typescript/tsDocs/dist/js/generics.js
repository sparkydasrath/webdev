"use strict";
// ex1 hello world of generics
//sad 'generic'
function identity(arg) {
    return arg;
}
// real generic
function identity2(arg) {
    console.log(typeof arg);
    return arg;
}
identity2(1);
identity2("1");
function identity3(arg) {
    return arg;
}
let myIdentity3 = identity3;
// result of moving type param to interface def   
function identity4(arg) {
    return arg;
}
let myIdentity4 = identity4;
// generic classes
class GenericNumber {
}
let genNumber = new GenericNumber();
genNumber.zeroVal = 0;
genNumber.add = (x, y) => x + y;
