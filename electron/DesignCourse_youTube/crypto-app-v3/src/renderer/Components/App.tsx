import * as React from "react";
import "./App.css";
import "./CoinCurrencyCard"
import CoinCurrencyCard from "./CoinCurrencyCard";
import "./ICoinCurrencyDisplay";

export default class App extends React.Component<{}, ICoinCurrencyDisplay> {

    constructor(props) {
        super(props);
        this.state = {
            DISPLAY: {} // cheating here a bit to not initialize all the fields to default values
        };
    }

    getBtc = () => {
        fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,EUR,JPY")
            .then(res => {
                let resJson = res.json();
                return resJson;
            })
            .then(data => {
                console.log(data);
                this.setState({ DISPLAY: { ...data.DISPLAY } })
            })
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
                <CoinCurrencyCard DISPLAY={this.state.DISPLAY} />
            </div>
        );
    }

    public render() {
        return (this.printProperties2());
    }
}

