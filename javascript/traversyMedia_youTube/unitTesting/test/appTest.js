const assert = require("chai").assert;
const app = require("../app");
//const app = require("../app");

describe("App", function () {
    it("app should return hello", function () {
        assert.equal(app.sayHello(), "hello");
    });


    it("return type should be string", function () {
        let res = app.sayHello();
        assert.typeOf(res, "string")
    });

    it("addNUmbers should be greater than 5", function () {
        let res = app.addNumbers(1, 5);
        assert.isAbove(res, 5);
    });

});