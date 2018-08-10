import * as React from "react";
import "./CoinCurrencyCard.css";
import "./ICoinCurrencyDisplay";

export default class CoinCurrencyCard extends React.Component<ICoinCurrencyDisplay, {}> {
    constructor(props: ICoinCurrencyDisplay) {
        super(props);
    }

    public render() {
        return (
            <div className="currencyCardRoot">
                <div>{this.props.Coin}</div>
                <div>{this.props.Currency}</div>
                <div>{this.props.children}</div>
            </div>

        );
    };


}