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
var OperatorType;
(function (OperatorType) {
    OperatorType["None"] = "";
    OperatorType["Add"] = "Add";
    OperatorType["Subtract"] = "Subtract";
    OperatorType["Multiply"] = "Multiply";
    OperatorType["Divide"] = "Divide";
    OperatorType["Negate"] = "Negate";
    OperatorType["Equal"] = "Equal";
})(OperatorType || (OperatorType = {}));
class Dom {
}
class MainView {
    constructor() {
        this.clickEvent = "click";
        this.buttonContainer = ".btn-container";
        this.addButton = "btn-add";
        this.subtractButton = "btn-sub";
        this.multiplyButton = "btn-mul";
        this.divideButton = "btn-div";
        this.negateButton = "btn-negate";
        this.equalButton = "btn-equal";
        this.resultToPrint = "result";
        this.left = 0;
        this.right = 0;
        this.total = 0;
        this.opType = OperatorType.None;
        this.dom = new Dom();
        this.ops = new Ops_1.default();
        this.handleBtnContainerClick = (event) => {
            // had to do the event handler this way in order to pass along the correct 'this'
            //  context to it
            // see: https://stackoverflow.com/questions/18423410/typescript-retain-scope-in-event-listener
            let srcButton = event.srcElement;
            if (srcButton === null || srcButton === undefined) {
                console.error("Can't find the button that was clicked");
                return;
            }
            let srcButtonValue = srcButton.innerHTML;
            if (srcButtonValue >= "0" && srcButtonValue <= "9")
                this.handleNumberButtonPressed(srcButtonValue);
            else {
                // get the data that knows what operator button was pressed 
                this.handleOperatorButtonPressed(srcButton.getAttribute("data-opType"));
            }
            ;
        };
    }
    cacheDom() {
        this.dom.buttonContainer = document.querySelector(this.buttonContainer);
        this.dom.result = document.getElementById(this.resultToPrint);
    }
    bindEvents() {
        if (this.dom.buttonContainer !== null && this.dom.buttonContainer !== undefined) {
            this.dom.buttonContainer.addEventListener(this.clickEvent, this.handleBtnContainerClick);
        }
    }
    handleOperatorButtonPressed(opPressed) {
        if (opPressed === null) {
            console.error("Operation selected is null");
            return;
        }
        else if (this.opType === "") {
            this.opType = opPressed;
        }
        else {
            this.computeTotal();
            this.opType = opPressed;
        }
    }
    computeTotal() {
        switch (this.opType) {
            case (OperatorType.Add): {
                this.total = this.ops.add(this.left, this.right);
                break;
            }
            case (OperatorType.Subtract): {
                this.total = this.ops.subtract(this.left, this.right);
                break;
            }
            case (OperatorType.Multiply): {
                this.total = this.ops.multiply(this.left, this.right);
                break;
            }
            case (OperatorType.Divide): {
                this.total = this.ops.divide(this.left, this.right);
                break;
            }
            default: {
                console.log(`Operator ${this.opType} is not defined`);
            }
        }
        this.updateLeftAndRightValues();
        if (this.dom.result !== null && this.dom.result !== undefined)
            this.dom.result.textContent = `computing total for left:${this.left} right:${this.right}, op:${this.opType} TOTAL = ${this.total}`;
    }
    updateLeftAndRightValues() {
        this.left = this.total;
        this.right = 0;
    }
    handleNumberButtonPressed(pressedNumber) {
        let parsedValue = Number.parseInt(pressedNumber);
        if (this.left === 0) {
            this.left = parsedValue;
        }
        else {
            this.right = parsedValue;
        }
        console.log(pressedNumber);
    }
    init() {
        this.cacheDom();
        this.bindEvents();
    }
}
(function () {
    let main = new MainView();
    console.log(main);
    main.init();
}());
},{"./Ops":1}]},{},[2])

//# sourceMappingURL=app.js.map
