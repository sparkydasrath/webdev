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
        fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,EOS,BCH,LTC&tsyms=USD,EUR,GBP,JPY")
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
        // console.log("Price before set state = ", data[0].Fields!.PRICE);
        this.setState({ coinCurrs: data });
        // console.log("Price after set state = ", this.state.coinCurrs[0].Fields!.PRICE);
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
        setInterval(this.getBtc, 1500);
    }

    public render() {
        return (
            <div className="appRoot">
                {this.state.coinCurrs.map(s => {
                    return (<CoinCurrencyCard key={s.Key} {...s} />);
                }
                )}
            </div>
        );
    }
}

