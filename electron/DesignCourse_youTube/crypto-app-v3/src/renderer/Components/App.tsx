import * as React from "react";
import "./App.css";
import "./CoinCurrencyCard"
import CoinCurrencyCard from "./CoinCurrencyCard";
import "./ICoinCurrencyDisplay";

interface IAppState {
    coinCurrs: ICoinCurrencyDisplay[];
}

export default class App extends React.Component<{}, IAppState> {

    constructor(props) {
        super(props);
        this.state = { coinCurrs: [] }
    }

    getBtc = () => {
        fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,EUR,JPY")
            .then(res => {
                let resJson = res.json();
                return resJson;
            })
            .then(data => {
                let flattened = this.flattenReturnedData(data.DISPLAY);
                this.updateState(flattened);
            })
    }

    updateState(data: ICoinCurrencyDisplay[]): void {
        this.setState({ coinCurrs: data });

    }

    flattenReturnedData(data: object): ICoinCurrencyDisplay[] {
        let coinKeys = Object.keys(data); // will return BTC, ETH
        if (coinKeys.length === 0) return [];

        let flattenedObjects: ICoinCurrencyDisplay[] = [];

        for (let i = 0; i < coinKeys.length; i++) {
            const coin = coinKeys[i];

            let currencyKeys = Object.keys(data[coin.toString()]); // will return USD, JPY

            for (let j = 0; j < currencyKeys.length; j++) {
                const currency = currencyKeys[j];
                let flattenedObj = {
                    Key: coin.toString() + currency.toString(),
                    Coin: coin.toString(),
                    Currency: currency.toString(),
                    Fields: (data[coin.toString()])[currency]
                };
                flattenedObjects.push(flattenedObj as ICoinCurrencyDisplay);
            }
        }

        return flattenedObjects;
    }

    componentDidMount() {
        this.getBtc();
        setInterval(this.getBtc, 5000);
    }

    printProperties(objectToPrint: object) {
        if (Object.keys(objectToPrint).length === 0) return null;
        let entries = Object.entries(objectToPrint);
        return (
            <div className="appRoot">
                {entries.map(coin => {
                    return (
                        <div key={coin[0]}>
                            <span>{coin[0]}</span>
                            <span>{coin[1]}</span>
                        </div>);
                })}
            </div>
        );
    }

    printProperties2() {
        return (
            <div className="appRoot">
                {this.state.coinCurrs.map(s => {
                    return (<CoinCurrencyCard {...s} />);
                }
                )}
            </div>
        );
    }

    public render() {
        return (this.printProperties2());
    }
}

