"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const app_1 = require("../../src/ts/app");
describe("Initial setup tests", () => {
    it("should return string", () => {
        let res = new app_1.Sample().doSomething();
        chai_1.default.assert.equal(res, "hello");
    });
});
