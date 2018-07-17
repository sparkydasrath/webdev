import ca from "chai";
import { Sample } from "../../src/ts/app";

describe("Initial setup tests", () => {
    it("should return string", () => {
        let res = new Sample().doSomething();
        ca.assert.equal(res, "hello");
    })
});