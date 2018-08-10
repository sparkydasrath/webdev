import * as React from "react";
import "./App.css";
import "./CoinCurrencyCard";
import "./ICoinCurrencyDisplay";
interface IAppState {
    coinCurrs: ICoinCurrencyDisplay[];
}
export default class App extends React.Component<{}, IAppState> {
    constructor(props: any);
    getBtc: () => void;
    updateState(data: ICoinCurrencyDisplay[]): void;
    flattenReturnedData(data: object): ICoinCurrencyDisplay[];
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=App.d.ts.map