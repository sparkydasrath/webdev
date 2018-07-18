(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ops {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0)
            return 0;
        return x / y;
    }
    negate(x) {
        return (-1) * x;
    }
}
exports.default = Ops;
},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ops_1 = __importDefault(require("./Ops"));
class Dom {
}
class MainView {
    constructor() {
        this.clickEvent = "click";
        this.buttonContainer = ".btn-container";
        this.divisionButton = "#btn-div";
        this.dom = new Dom();
        this.ops = new Ops_1.default();
    }
    cacheDom() {
        this.dom.buttonContainer = document.querySelector(this.buttonContainer);
        this.dom.divisionButton = document.getElementById(this.divisionButton);
    }
    bindEvents() {
        if (this.dom.buttonContainer === null || this.dom.buttonContainer === undefined) {
            return;
        }
        this.dom.buttonContainer.addEventListener(this.clickEvent, this.handleBtnContainerClick);
        if (this.dom.divisionButton === null || this.dom.divisionButton === undefined) {
            return;
        }
        this.dom.divisionButton.addEventListener(this.clickEvent, this.handleDivisionButtonClicked);
    }
    handleBtnContainerClick(event) {
        let src = event.srcElement;
        if (src === null || src === undefined) {
            console.log("cant find button src");
        }
        console.log("container clicked");
    }
    handleDivisionButtonClicked(event) {
        console.log("division clicked");
        if ((event === null || event === undefined) ||
            (event.srcElement === null || event.srcElement === undefined))
            return;
        let res = this.ops.divide(4, 2);
        console.log(res);
    }
    init() {
        this.cacheDom();
        this.bindEvents();
    }
}
(function () {
    let main = new MainView();
    main.init();
}());
},{"./Ops":1}]},{},[2])

//# sourceMappingURL=app.js.map
