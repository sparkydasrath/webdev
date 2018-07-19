import Ops from "./Ops";

enum OperatorType {
    None = "",
    Add = "Add",
    Subtract = "Subtract",
    Multiply = "Multiply",
    Divide = "Divide",
    Negate = "Negate",
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
    result: HTMLElement | null | undefined;
}

class MainView {

    clickEvent: string = "click";
    buttonContainer: string = ".btn-container";
    addButton: string = "btn-add";
    subtractButton: string = "btn-sub";
    multiplyButton: string = "btn-mul";
    divideButton: string = "btn-div";
    negateButton: string = "btn-negate";
    equalButton: string = "btn-equal";
    resultToPrint: string = "result";

    left: number = 0;
    right: number = 0;
    total: number = 0;
    opType: OperatorType = OperatorType.None;

    private dom: Dom = new Dom();
    private ops: Ops = new Ops();

    private cacheDom(): void {
        this.dom.buttonContainer = <HTMLElement>document.querySelector(this.buttonContainer);
        this.dom.result = <HTMLElement>document.getElementById(this.resultToPrint);
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

        else if (this.opType === "") {
            this.opType = <OperatorType>opPressed;
        }
        else {
            this.computeTotal();
            this.opType = <OperatorType>opPressed;
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
            default: {
                console.log(`Operator ${this.opType} is not defined`);
            }
        }

        this.updateLeftAndRightValues();

        if (this.dom.result !== null && this.dom.result !== undefined)
            this.dom.result.textContent = `computing total for left:${this.left} right:${this.right}, op:${this.opType} TOTAL = ${this.total}`;
    }

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
    console.log(main);
    main.init()
}());