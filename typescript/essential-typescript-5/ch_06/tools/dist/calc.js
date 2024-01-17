"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
function sum(...vals) {
    return vals.reduce((sum, val) => sum + val, 0);
}
exports.sum = sum;
//# sourceMappingURL=calc.js.map