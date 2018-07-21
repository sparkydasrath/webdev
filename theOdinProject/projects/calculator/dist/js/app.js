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
    plusMinus(x) {
        return (-1) * x;
    }
}
exports.default = Ops;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringUtility {
    static replaceAt(oringalString, replacementString, position) {
        let origAsArray = oringalString.split("");
        origAsArray[position] = replacementString;
        let finalString = origAsArray.join("");
        return finalString;
    }
}
exports.StringUtility = StringUtility;
},{}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ops_1 = __importDefault(require("./Ops"));
const StringUtility_1 = require("./StringUtility");
var OperatorType;
(function (OperatorType) {
    OperatorType["None"] = "";
    OperatorType["Add"] = "Add";
    OperatorType["Subtract"] = "Subtract";
    OperatorType["Multiply"] = "Multiply";
    OperatorType["Divide"] = "Divide";
    OperatorType["PlusMinus"] = "PlusMinus";
    OperatorType["Equal"] = "Equal";
    OperatorType["ClearEntry"] = "ClearEntry";
    OperatorType["ClearAll"] = "ClearAll";
})(OperatorType || (OperatorType = {}));
class Dom {
}
class MainView {
    constructor() {
        this.clickEvent = "click";
        this.buttonContainerClassName = ".btn-container";
        this.resultDisplayClassName = ".result-display";
        this.summaryDisplayClassName = ".summary-display";
        this.leftAsString = "";
        this.left = 0;
        this.right = 0;
        this.rightAsString = "";
        this.total = 0;
        this.opType = OperatorType.None;
        this.opTypeHtml = "";
        this.useLeftForSummary = true;
        this.opPressedCount = 0;
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
            let clearData = srcButton.getAttribute("data-opClear");
            if (srcButtonValue >= "0" && srcButtonValue <= "9")
                this.handleNumberButtonPressed(srcButtonValue);
            else if (clearData !== null) {
                this.handleClear(clearData);
            }
            else {
                // get the data that knows what operator button was pressed 
                this.opTypeHtml = srcButtonValue;
                this.handleOperatorButtonPressed(srcButton.getAttribute("data-opType"), srcButtonValue);
            }
            ;
        };
    }
    cacheDom() {
        this.dom.buttonContainer = document.querySelector(this.buttonContainerClassName);
        this.dom.summaryDisplay = document.querySelector(this.summaryDisplayClassName);
        this.dom.resultDisplay = document.querySelector(this.resultDisplayClassName);
    }
    bindEvents() {
        if (this.dom.buttonContainer !== null && this.dom.buttonContainer !== undefined) {
            this.dom.buttonContainer.addEventListener(this.clickEvent, this.handleBtnContainerClick);
        }
    }
    handleOperatorButtonPressed(opPressed, htmlContentOfOp) {
        this.opPressedCount++;
        if (opPressed === null) {
            console.error("Operation selected is null");
            return;
        }
        else if (opPressed === OperatorType.Equal) {
            this.computeTotal();
            this.updateViewPipeline(true, htmlContentOfOp);
            return;
        }
        else if (this.opType === OperatorType.None) {
            this.opType = opPressed;
            this.updateSummaryDisplay(htmlContentOfOp);
            return;
        }
        else {
            this.computeTotal();
            this.opType = opPressed;
            this.updateViewPipeline(false, htmlContentOfOp);
            return;
        }
    }
    updateViewPipeline(canClearSummaryDisplay, htmlContentOfOp) {
        if (canClearSummaryDisplay) {
            this.clearSummaryDisplay();
        }
        else {
            this.updateSummaryDisplay(htmlContentOfOp);
        }
        this.updateLeftAndRightValues();
        this.displayResult();
    }
    computeTotal() {
        this.left = Number(this.leftAsString);
        this.right = Number(this.rightAsString);
        switch (this.opType) {
            case (OperatorType.None): {
                break;
            }
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
            case (OperatorType.PlusMinus): {
                //  need to display negative number
                break;
            }
            default: {
                console.log(`Operator ${this.opType} is not defined`);
                break;
            }
        }
        // this.updateLeftAndRightValues();
        // this.displayResult();
    }
    displayResult() {
        if (this.dom.resultDisplay !== null && this.dom.resultDisplay !== undefined) {
            this.dom.resultDisplay.textContent = `${this.total}`;
        }
    }
    displayLeft() {
        if (this.dom.resultDisplay !== null && this.dom.resultDisplay !== undefined) {
            this.dom.resultDisplay.textContent = this.leftAsString;
        }
    }
    displayRight() {
        if (this.dom.resultDisplay !== null && this.dom.resultDisplay !== undefined) {
            this.dom.resultDisplay.textContent = this.rightAsString;
        }
    }
    clearSummaryDisplay() {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.log("checkSummaryDisplayForNullOrUndefined(): Summary display is null or undefined");
            return;
        }
        else {
            this.dom.summaryDisplay.innerHTML = "";
            this.useLeftForSummary = true;
            this.opPressedCount = 0;
        }
    }
    updateSummaryDisplay(opPressedHtml) {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("Unable to populate summary value");
            return;
        }
        if (this.opPressedCount > 1) {
            this.partialSummaryDisplayUpdate(opPressedHtml);
            return;
        }
        if (this.useLeftForSummary) {
            this.fullLeftSummaryDisplayUpdate();
            this.useLeftForSummary = false;
        }
        else {
            this.fullRightSummaryDisplayUpdate();
        }
    }
    fullLeftSummaryDisplayUpdate() {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("fullSummaryDisplayUpdate(): Unable to do a full summary display update");
            return;
        }
        this.dom.summaryDisplay.innerHTML += this.leftAsString + " " + this.opTypeHtml + " ";
    }
    fullRightSummaryDisplayUpdate() {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("fullSummaryDisplayUpdate(): Unable to do a full summary display update");
            return;
        }
        this.dom.summaryDisplay.innerHTML += this.rightAsString + " " + this.opTypeHtml + " ";
    }
    partialSummaryDisplayUpdate(opPressedHtml) {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("partialSummaryDisplayUpdate(): Unable to do a partial summary display update");
            return;
        }
        let replaced = this.replaceLastDisplayedOperatorWithCurrentOne(this.dom.summaryDisplay.innerHTML, opPressedHtml);
        this.dom.summaryDisplay.innerHTML = replaced;
    }
    replaceLastDisplayedOperatorWithCurrentOne(valueToModify, replacementValue) {
        let currentDisplay = StringUtility_1.StringUtility.replaceAt(valueToModify, replacementValue, valueToModify.length - 2);
        return currentDisplay;
    }
    updateLeftAndRightValues() {
        this.leftAsString = this.total.toString();
        this.left = this.total;
        this.rightAsString = "";
        this.right = 0;
    }
    handleNumberButtonPressed(pressedNumber) {
        this.opPressedCount = 0;
        if (this.leftAsString === "" || this.opType === OperatorType.None) {
            this.leftAsString += pressedNumber;
            this.displayLeft();
        }
        else {
            this.rightAsString += pressedNumber;
            this.displayRight();
        }
    }
    handleClear(clearData) {
        if (clearData === OperatorType.ClearAll) {
            this.clearSummaryAndResultDisplay();
            return;
        }
        if (clearData === OperatorType.ClearEntry) {
            this.clearResultDisplay();
        }
    }
    clearSummaryAndResultDisplay() {
        if (this.dom.summaryDisplay === null ||
            this.dom.summaryDisplay === undefined ||
            this.dom.resultDisplay === null ||
            this.dom.resultDisplay === undefined) {
            console.error("clearSummaryAndResultDisplay(): summaryDisplay or resultDisplay is null or undefined (bleh)");
            return;
        }
        this.dom.summaryDisplay.innerHTML = "";
        this.dom.resultDisplay.innerHTML = "0";
        this.leftAsString = "";
        this.left = 0;
        this.rightAsString = "";
        this.right = 0;
        this.useLeftForSummary = true;
        this.opPressedCount = 0;
    }
    clearResultDisplay() {
        if (this.dom.resultDisplay === null ||
            this.dom.resultDisplay === undefined) {
            console.error("clearResultDisplay(): resultDisplay is null or undefined (bleh)");
            return;
        }
        this.dom.resultDisplay.innerHTML = "0";
        this.rightAsString = "";
        this.right = 0;
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
},{"./Ops":1,"./StringUtility":2}]},{},[3])

//# sourceMappingURL=app.js.map
