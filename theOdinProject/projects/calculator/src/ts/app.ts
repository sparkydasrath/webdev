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
        if (srcButtonValue >= "0" && srcButtonValue <= "9")
            this.handleNumberButtonPressed(srcButtonValue);
        else {
            // get the data that knows what operator button was pressed 
            this.opTypeHtml = srcButtonValue;
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
            this.clearSummaryDisplay();
            return;
        }

        else {
            this.opType = <OperatorType>opPressed;
            this.updateSummaryDisplay();
            this.computeTotal();
            console.log(this.opType);
            return;
        }
    }

    private computeTotal(): void {

        this.left = Number(this.leftAsString);
        this.right = Number(this.rightAsString);

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
        this.updateLeftAndRightValues();
        this.displayResult();
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
        if (this.dom.summaryDisplay !== null && this.dom.summaryDisplay !== undefined) {
            this.dom.summaryDisplay.innerHTML = "";
            this.useLeftForSummary = true;
        };
    }

    private updateSummaryDisplay(): void {
        if (this.dom.summaryDisplay === null || this.dom.summaryDisplay === undefined) {
            console.error("Unable to populate summary value");
            return;
        }

        if (this.useLeftForSummary) {
            this.dom.summaryDisplay.innerHTML += this.leftAsString + " " + this.opTypeHtml + " ";
            this.useLeftForSummary = false;
        }
        else {
            this.dom.summaryDisplay.innerHTML += this.rightAsString + " " + this.opTypeHtml + " ";
        }
    }

    private updateLeftAndRightValues() {
        this.leftAsString = this.total.toString();
        this.left = this.total;
        this.rightAsString = "";
        this.right = 0;
    }

    private handleNumberButtonPressed(pressedNumber: string): void {

        if (this.leftAsString === "" || this.opType === OperatorType.None) {
            this.leftAsString += pressedNumber;
            this.displayLeft();
        }
        else {
            this.rightAsString += pressedNumber;
            this.displayRight();
        }
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