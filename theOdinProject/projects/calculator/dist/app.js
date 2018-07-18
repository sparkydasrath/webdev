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
