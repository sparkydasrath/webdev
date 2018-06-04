/**
 * In JavaScript, there are several options for implementing modules. These include:

The Module pattern
Object literal notation
AMD modules
CommonJS modules
ECMAScript Harmony modules
 */

var testModule = (function () {

    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };
})();

testModule.incrementCounter();
testModule.incrementCounter();

console.log(testModule.counter);

testModule.resetCounter();