import Ops from "./Ops";

enum OperatorType {
    None = "",
    Add = "Add",
    Subtract = "Subtract",
    Multiply = "Multiply",
    Divide = "Divide",
    PlusMinus = "PlusMinus",
    Equal = "Equal"
}

// enum OperatorType {
//     None = 0,
//     Add = 43, // ascii code for add
//     Subtract = 45, // ascii code for subtract
//     Multiply = 215, // ascii code for multiply
//     Divide = 247, // ascii code for divide
//     PlusMinus = 177, // ascii code for plus_minus 
//     Equal = 61 // ascii code for equals
// }


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

    left: number = 0;
    right: number = 0;
    total: number = 0;
    opType: OperatorType = OperatorType.None;

    private dom: Dom = new Dom();
    private ops: Ops = new Ops();

    private cacheDom(): void {
        this.dom.buttonContainer = <HTMLElement>document.querySelector(this.buttonContainerClassName);
        // this.dom.summaryDisplay = <HTMLElement>document.getElementById(this.summaryDisplayClassName);
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
        if (srcButtonValue >= "0" && srcButtonValue <= "9")
            this.handleNumberButtonPressed(srcButtonValue);
        else {
            // get the data that knows what operator button was pressed 
            this.handleOperatorButtonPressed(srcButton.getAttribute("data-opType"));
        };
    }

    private handleOperatorButtonPressed(opPressed: string | null): void {
        if (opPressed === null) {
            console.error("Operation selected is null");
            return;
        }
        else if (opPressed === OperatorType.Equal) {
            this.computeTotal();
            return;
        }
        else if (this.opType === OperatorType.None) {
            this.opType = <OperatorType>opPressed;
            console.log(this.opType);
            return;
        }
        else {
            this.computeTotal();
            this.opType = <OperatorType>opPressed;
            console.log(this.opType);
            return;
        }
    }

    private computeTotal(): void {

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
            case (OperatorType.PlusMinus): {
                //  need to display negative number
                break;
            }

            default: {
                console.log(`Operator ${this.opType} is not defined`);
                break;
            }
        }

        this.displayResult();
        this.updateLeftAndRightValues();
    }

    private displayResult(): void {
        if (this.dom.resultDisplay !== null && this.dom.resultDisplay !== undefined) {
            // this.dom.resultDisplay.te5xtContent = `computing total for left:${this.left} right:${this.right}, op:${this.opType} TOTAL = ${this.total}`;
            this.dom.resultDisplay.textContent = `${this.total}`;
        }
    }


    // private clearSummaryDisplay(): void {
    //     if (this.dom.summaryDisplay !== null && this.dom.summaryDisplay !== undefined) { this.dom.summaryDisplay.innerHTML = "" };
    // }

    private updateLeftAndRightValues() {
        this.left = this.total;
        this.right = 0;
    }

    private handleNumberButtonPressed(pressedNumber: string): void {

        let parsedValue = Number.parseInt(pressedNumber);
        if (this.left === 0) {
            this.left = parsedValue;
        }
        else {
            this.right = parsedValue;
        }
        console.log(pressedNumber);
    }

    public init() {
        this.cacheDom();
        this.bindEvents();
    }
}

(function () {
    let main = new MainView();
    main.init()
}());