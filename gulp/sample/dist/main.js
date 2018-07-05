"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypeScript");
console.log(greet_1.sayHello("TS and things"));
