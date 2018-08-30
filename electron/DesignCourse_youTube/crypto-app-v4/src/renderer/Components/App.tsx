import * as React from "react";
import "./App.css";
import "./CoinCurrencyCard"
import CoinCurrencyCard from "./CoinCurrencyCard";
import { ICoinCurrencyDisplay } from "./ICoinCurrencyDisplay";
import { Direction } from "./Direction";
import { ICoinDisplay } from "./ICoinDisplay";

interface IAppState {
    coinCurrs: ICoinCurrencyDisplay[];
    coins: ICoinDisplay[];
}

export default class App extends React.Component<{}, IAppState> {

    constructor(props) {
        super(props);
        this.state = { coinCurrs: [], coins: [] }
    }

    getBtc = () => {
        fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,EOS,BCH,LTC&tsyms=USD,EUR,GBP,JPY")
            .then(res => {
                let resJson = res.json();
                return resJson;
            })
            .then(data => {
                let flattened = this.flattenReturnedData(data.DISPLAY, data.RAW);
                let coinCollection = this.buildCoins(data.DISPLAY, data.RAW);
                this.updateState(flattened);
                this.updateState2(coinCollection);
            })
    }

    updateState(data: ICoinCurrencyDisplay[]): void {
        // console.log("Price before set state = ", data[0].Fields!.PRICE);
        this.setState({ coinCurrs: data });
        // console.log("Price after set state = ", this.state.coinCurrs[0].Fields!.PRICE);
    }

    updateState2(data: ICoinDisplay[]): void {
        // console.log("Price before set state = ", data[0].Fields!.PRICE);
        this.setState({ coins: data });
        // console.log("Price after set state = ", this.state.coinCurrs[0].Fields!.PRICE);
    }


    flattenReturnedData(displayData: object, rawData: object): ICoinCurrencyDisplay[] {
        let coinKeys = Object.keys(displayData); // will return BTC, ETH
        if (coinKeys.length === 0) return [];

        let flattenedObjects: ICoinCurrencyDisplay[] = [];


        let otherCoins = this.buildCoins(displayData, rawData);
        console.log(otherCoins);

        for (let i = 0; i < coinKeys.length; i++) {
            const coin = coinKeys[i];

            let currencyKeys = Object.keys(displayData[coin.toString()]); // will return USD, JPY
            for (let j = 0; j < currencyKeys.length; j++) {
                const currency = currencyKeys[j];
                let key = coin.toString() + currency.toString();
                let rawPrice = ((rawData[coin.toString()])[currency])["PRICE"];
                let flattenedObj = {
                    Key: key,
                    Coin: coin.toString(),
                    Currency: currency.toString(),
                    RawPrice: rawPrice,
                    PriceDirection: this.getPriceDirection(rawPrice, key),
                    Fields: (displayData[coin.toString()])[currency]
                };
                //console.log(`Key = ${key}  direction=${flattenedObj["PriceDirection"]}`);
                flattenedObjects.push(flattenedObj as ICoinCurrencyDisplay);
            }
        }

        return flattenedObjects;
    }

    buildCoins(displayData: object, rawData: object): ICoinDisplay[] {
        let coinKeys = Object.keys(displayData); // will return BTC, ETH
        if (coinKeys.length === 0) return [];

        let coins: ICoinDisplay[] = [];

        for (let i = 0; i < coinKeys.length; i++) {
            const coin = coinKeys[i];
            let currencyKeys = Object.keys(displayData[coin.toString()]); // will return USD, JPY
            let currenciesForCoin = this.buildCurrenciesForCoin(coin, displayData, rawData, currencyKeys);
            let coinToShow = {
                Key: coin + "-" + currencyKeys.join("-"),
                Coin: coin,
                Currencies: currenciesForCoin
            };

            console.log(`coinkey = ${coinToShow.Key}`);
            coins.push(coinToShow);
        }

        return coins;
    }

    buildCurrenciesForCoin(coin: string, displayData: object, rawData: object, currencies: string[]): Array<ICoinCurrencyDisplay> {
        let populatedCurencies: ICoinCurrencyDisplay[] = [];
        for (let i = 0; i < currencies.length; i++) {
            const c = currencies[i];
            let key = coin.toString() + "-" + c.toString();
            let rawPrice = ((rawData[coin.toString()])[c])["PRICE"];
            let populatedCurrency = {
                Key: key,
                Coin: coin.toString(),
                Currency: c.toString(),
                RawPrice: rawPrice,
                PriceDirection: this.getPriceDirection(rawPrice, key),
                Fields: (displayData[coin.toString()])[c]
            };

            console.log(`populated currency = ${populatedCurrency.Currency}`);
            populatedCurencies.push(populatedCurrency);

        }

        return populatedCurencies;
    }


    getPriceDirection(rawPrice: number, key: string): Direction {
        // need to revisit how this component's state is stored - needs to be associateive array
        // as I keep iterating this array to find the one i need to compare with

        let itemToCompareTo: ICoinCurrencyDisplay = {
            Key: "",
            Coin: "",
            Currency: "",
            RawPrice: 0,
            PriceDirection: Direction.None
        };
        let pxDir: Direction = Direction.None;

        for (let i = 0; i < this.state.coinCurrs.length; i++) {
            const element = this.state.coinCurrs[i];
            if (element.Key !== key) continue;
            itemToCompareTo = element;
        }

        if (itemToCompareTo === undefined) return Direction.None;

        if (rawPrice > itemToCompareTo.RawPrice) pxDir = Direction.Up;
        else if (rawPrice < itemToCompareTo.RawPrice) pxDir = Direction.Down;
        else pxDir = Direction.None;
        return pxDir;
    }

    componentDidMount() {
        this.getBtc();
        setInterval(this.getBtc, 1000);
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

