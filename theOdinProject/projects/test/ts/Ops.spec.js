"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Ops_1 = __importDefault(require("../../src/ts/Ops"));
describe("Ops tests", () => {
    it("Should return the correct value when two numbers are added", () => {
        let addResult = new Ops_1.default().add(1, 2);
        chai_1.assert.equal(addResult, 3);
    });
});
