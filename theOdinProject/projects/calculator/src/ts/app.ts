import Ops from "./Ops";
import { StringUtility } from "./StringUtility";

enum OperatorType {
    None = "",
    Add = "Add",
    Subtract = "Subtract",
    Multiply = "Multiply",
    Divide = "Divide",
    PlusMinus = "PlusMinus",
    Equal = "Equal",
    ClearEntry = "ClearEntry",
    ClearAll = "ClearAll",
    Backspace = "Backspace"
}

class Dom {
    buttonContainer: HTMLElement | null | undefined;
    addButton: HTMLButtonElement | null | undefined;
    subtractButton: HTMLButtonElement | null | undefined;
    multiplyButton: HTMLButtonElement | null | undefined;
    divideButton: HTMLButtonElement | null | undefined;
    negateButton: HTMLButtonElement | null | undefined;
    equalButton: HTMLButtonElement | null | undefined;
    resultDisplay: HTMLElement | null | undefined;
    summaryDisplay: HTMLElement | null | undefined;
}

class MainView {

    clickEvent: string = "click";
    buttonContainerClassName: string = ".btn-container";
    resultDisplayClassName: string = ".result-display";
    summaryDisplayClassName: string = ".summary-display";

    leftAsString: string = "";
    left: number = 0;
    right: number = 0;
    rightAsString: string = "";
    total: number = 0;
    opType: OperatorType = OperatorType.None;
    opTypeHtml: string = "";
    useLeftForSummary: boolean = true;
    opPressedCount: number = 0;

    private dom: Dom = new Dom();
    private ops: Ops = new Ops();

    private cacheDom(): void {
        this.dom.buttonContainer = <HTMLElement>document.querySelector(this.buttonContainerClassName);
        this.dom.summaryDisplay = <HTMLElement>document.querySelector(this.summaryDisplayClassName);
        this.dom.resultDisplay = <HTMLElement>document.querySelector(this.resultDisplayClassName);
    }

    public bindEvents() {
        if (this.dom.buttonContainer !== null && this.dom.buttonContainer !== undefined) {
            this.dom.buttonContainer.addEventListener(this.clickEvent, this.handleBtnContainerClick);
        }
    }

    public handleBtnContainerClick = (event: Event): void => {
        // had to do the event handler this way in order to pass along the correct 'this'
        //  context to it
        // see: https://stackoverflow.com/questions/18423410/typescript-retain-scope-in-event-listener
        let srcButton = <HTMLButtonElement>event.srcElement;
        if (srcButton === null || srcButton === undefined) {
            console.error("Can't find the button that was clicked");
            return;
        }

        let srcButtonValue = srcButton.innerHTML;
        let clearData: string | null = srcButton.getAttribute("data-opClear");
        if (srcButtonValue >= "0" && srcButtonValue <= "9")
            this.handleNumberButtonPressed(srcButtonValue);
        else if (clearData !== null) {
            this.handleClear(clearData);
        }
        else {
            // get the data that knows what operator button was pressed 
            this.opTypeHtml = srcButtonValue;
            this.handleOperatorButtonPressed(srcButton.getAttribute("data-opType"), srcButtonValue);
        };
    }

    private handleOperatorButtonPressed(opPressed: string | null, htmlContentOfOp: string): void {

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
            this.opType = <OperatorType>opPressed;
            this.updateSummaryDisplay(htmlContentOfOp);
            return;
        }

        else {
            this.computeTotal();
            this.opType = <OperatorType>opPressed;
            this.updateViewPipeline(false, htmlContentOfOp);
            return;
        }
    }

    private updateViewPipeline(canClearSummaryDisplay: boolean, htmlContentOfOp: string) {
        if (canClearSummaryDisplay) {
            this.clearSummaryDisplay();
        }
        else {
            this.updateSummaryDisplay(htmlContentOfOp);
        }

        this.updateLeftAndRightValues();
        this.displayResult();
    }


    private computeTotal(): void {

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
                break;
            }

            default: {
                console.log(`Operator ${this.opType} is not defined`);
                break;
            }
        }
    }

    private displayResult(): void {
        if (this.dom.resultDisplay !== null && this.dom.resultDisplay !== undefined) {
            this.dom.resultDisplay.textContent = `${this.total}`;
        }
    }

    private displayLeft(): void {
        if (this.dom.resultDisplay !== null && this.dom.resultDisplay !== undefined) {
            this.dom.resultDisplay.textContent = this.leftAsString;
        }
    }

    private displayRight(): void {
        if (this.dom.resultDisplay !== null && this.dom.resultDisplay !== undefined) {
            this.dom.resultDisplay.textContent = this.rightAsString;
        }
    }

    private clearSummaryDisplay(): void {

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

    private updateSummaryDisplay(opPressedHtml: string): void {
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

    private fullLeftSummaryDisplayUpdate(): void {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("fullSummaryDisplayUpdate(): Unable to do a full summary display update");
            return;
        }
        this.dom.summaryDisplay.innerHTML += this.leftAsString + " " + this.opTypeHtml + " ";
    }

    private fullRightSummaryDisplayUpdate(): void {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("fullSummaryDisplayUpdate(): Unable to do a full summary display update");
            return;
        }
        this.dom.summaryDisplay.innerHTML += this.rightAsString + " " + this.opTypeHtml + " ";
    }

    private partialSummaryDisplayUpdate(opPressedHtml: string): void {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("partialSummaryDisplayUpdate(): Unable to do a partial summary display update");
            return;
        }
        let replaced = this.replaceLastDisplayedOperatorWithCurrentOne(this.dom.summaryDisplay.innerHTML, opPressedHtml);
        this.dom.summaryDisplay.innerHTML = replaced;
    }

    private replaceLastDisplayedOperatorWithCurrentOne(valueToModify: string, replacementValue: string): string {

        let currentDisplay = StringUtility.replaceAt(valueToModify, replacementValue, valueToModify.length - 2);
        return currentDisplay;
    }

    private updateLeftAndRightValues() {
        this.leftAsString = this.total.toString();
        this.left = this.total;
        this.rightAsString = "";
        this.right = 0;
    }

    private handleNumberButtonPressed(pressedNumber: string): void {

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

    public handleClear(clearData: string | null): void {
        if (clearData === <OperatorType>OperatorType.ClearAll) {
            this.clearSummaryAndResultDisplay();
            return;
        }
        if (clearData === <OperatorType>OperatorType.ClearEntry) {
            this.clearResultDisplay();
            return;
        }
        if (clearData === <OperatorType>OperatorType.Backspace) {
            this.performBackspaceOnCurrentEntry();
            return;
        }
    }

    private clearSummaryAndResultDisplay(): void {

        if (this.dom.summaryDisplay === null ||
            this.dom.summaryDisplay === undefined ||
            this.dom.resultDisplay === null ||
            this.dom.resultDisplay === undefined) {
            console.error("clearSummaryAndResultDisplay(): summaryDisplay or resultDisplay is null or undefined (bleh)")
            return;
        }
        this.dom.summaryDisplay.innerHTML = ""
        this.dom.resultDisplay.innerHTML = "0"

        this.leftAsString = "";
        this.left = 0;
        this.rightAsString = "";
        this.right = 0;
        this.useLeftForSummary = true;
        this.opPressedCount = 0;
    }

    private clearResultDisplay(): void {
        if (this.dom.resultDisplay === null ||
            this.dom.resultDisplay === undefined) {
            console.error("clearResultDisplay(): resultDisplay is null or undefined (bleh)")
            return;
        }
        this.dom.resultDisplay.innerHTML = "0"
        this.rightAsString = "";
        this.right = 0;
    }

    private performBackspaceOnCurrentEntry(): void {
        if (this.dom.resultDisplay === null ||
            this.dom.resultDisplay === undefined) {
            console.error("performBackspaceOnCurrentEntry(): resultDisplay is null or undefined (bleh)")
            return;
        }

        if (this.dom.resultDisplay.innerHTML.length === 1) {
            this.dom.resultDisplay.innerHTML = "0";
            if (this.useLeftForSummary) {
                this.leftAsString = "0";
            }
            else {
                this.rightAsString = "0";
            }
            return;
        }

        let currentResult = this.dom.resultDisplay.innerHTML;
        let backspacedResult = StringUtility.replaceAt(currentResult, "", currentResult.length - 1).trim();
        if (this.useLeftForSummary) {
            this.leftAsString = backspacedResult;
        }
        else {
            this.rightAsString = backspacedResult;
        }
        this.dom.resultDisplay.innerHTML = backspacedResult;
    }

    private initResultToZero(): void {
        if (this.dom.resultDisplay === null ||
            this.dom.resultDisplay === undefined) {
            console.error("initResultToZero(): resultDisplay is null or undefined (bleh)")
            return;
        }
        this.dom.resultDisplay.innerHTML = "0";
    }

    public init() {
        this.cacheDom();
        this.bindEvents();
        this.initResultToZero();
    }
}

(function () {
    let main = new MainView();
    main.init()
}());