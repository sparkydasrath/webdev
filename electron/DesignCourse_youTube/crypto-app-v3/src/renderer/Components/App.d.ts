import * as React from "react";
import "./App.css";
interface IAppState {
    price: number;
    fullObj: {};
}
export default class App extends React.Component<{}, IAppState> {
    constructor(props: any);
    getBtc: () => void;
    componentDidMount(): void;
    printProperties(objectToPrint: object): JSX.Element | null;
    printTest(): JSX.Element;
    render(): JSX.Element | null;
}
export {};
//# sourceMappingURL=App.d.ts.map