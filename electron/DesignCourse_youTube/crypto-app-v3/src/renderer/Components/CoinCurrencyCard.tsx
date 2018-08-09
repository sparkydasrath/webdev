import * as React from "react";
import "./CoinCurrencyCard.css";
import "./ICoinCurrencyDisplay";

export default class CoinCurrencyCard extends React.Component<ICoinCurrencyDisplay, {}> {
    constructor(props: ICoinCurrencyDisplay) {
        super(props);
    }

    public render() {
        console.log("rendering props display", this.props.DISPLAY);
        if (this.props.DISPLAY === undefined) return null;
        if (this.props.DISPLAY.BTC === undefined) return null;
        if (this.props.DISPLAY.BTC.USD === undefined) return null;
        return (
            <React.Fragment>
                <div> {this.props.DISPLAY.BTC!.USD.PRICE}</div>
                <div> {this.props.DISPLAY.BTC.USD.TOSYMBOL}</div>

                <div> {this.props.DISPLAY.BTC!.EUR.PRICE}</div>
                <div> {this.props.DISPLAY.BTC.EUR.TOSYMBOL}</div>

                <div> {this.props.DISPLAY.BTC!.JPY.PRICE}</div>
                <div> {this.props.DISPLAY.BTC.JPY.TOSYMBOL}</div>

            </React.Fragment>

        );
    };

}