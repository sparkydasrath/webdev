import * as React from "react";
import "./App.css";
import "./CoinCurrencyCard";
import { ICoinCurrencyDisplay } from "./ICoinCurrencyDisplay";
import { Direction } from "./Direction";
import { ICoinDisplay } from "./ICoinDisplay";
interface IAppState {
    coinCurrs: ICoinCurrencyDisplay[];
}
export default class App extends React.Component<{}, IAppState> {
    constructor(props: any);
    getBtc: () => void;
    updateState(data: ICoinCurrencyDisplay[]): void;
    flattenReturnedData(displayData: object, rawData: object): ICoinCurrencyDisplay[];
    buildCoins(displayData: object, rawData: object): ICoinDisplay[];
    buildCurrenciesForCoin(coin: string, displayData: object, rawData: object, currencies: string[]): Array<ICoinCurrencyDisplay>;
    getPriceDirection(rawPrice: number, key: string): Direction;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=App.d.ts.map