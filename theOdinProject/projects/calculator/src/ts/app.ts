import Ops from "./Ops";


class Dom {
    buttonContainer: HTMLElement | null | undefined;
    divisionButton: HTMLButtonElement | null | undefined;
}

class MainView {
    clickEvent: string = "click";
    buttonContainer: string = ".btn-container";
    divisionButton: string = "#btn-div";

    private dom: Dom = new Dom();
    private ops: Ops = new Ops();

    private cacheDom(): void {
        this.dom.buttonContainer = <HTMLElement>document.querySelector(this.buttonContainer);
        this.dom.divisionButton = <HTMLButtonElement>document.getElementById(this.divisionButton);
    }

    public bindEvents() {
        if (this.dom.buttonContainer === null || this.dom.buttonContainer === undefined) {
            return;
        }
        this.dom.buttonContainer.addEventListener(this.clickEvent, this.handleBtnContainerClick);

        if (this.dom.divisionButton === null || this.dom.divisionButton === undefined) {
            return;
        }
        this.dom.divisionButton.addEventListener(this.clickEvent, this.handleDivisionButtonClicked);
    }

    public handleBtnContainerClick(event: Event) {
        let src = <HTMLButtonElement>event.srcElement;
        if (src === null || src === undefined) {
            console.log("cant find button src");
        }
        console.log("container clicked");
    }

    handleDivisionButtonClicked(event: Event): void {

        console.log("division clicked");

        if ((event === null || event === undefined) ||
            (event.srcElement === null || event.srcElement === undefined)) return;

        let res = this.ops.divide(4, 2);
        console.log(res);
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