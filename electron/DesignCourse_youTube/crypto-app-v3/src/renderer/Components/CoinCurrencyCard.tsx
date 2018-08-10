import * as React from "react";
import "./CoinCurrencyCard.css";
import "./ICoinCurrencyDisplay";

interface IPriceCoinCurrencyComponent {
    price: string,
    coinCurrency: string
}

class PriceCoinCurrencyComponent extends React.Component<IPriceCoinCurrencyComponent, {}> {
    constructor(props: IPriceCoinCurrencyComponent) {
        super(props);
    }

    render() {
        return (
            <div className="priceCoinCurrencyContainer">
                <div>{this.props.price}</div>
                <div>{this.props.coinCurrency}</div>
            </div>
        );
    }
}


class VolumesComponent extends React.Component<ICommonProperties, {}>{
    constructor(props: ICommonProperties) {
        super(props);
    }
    render() {
        return (
            <div className="volumesContainer">
                <div className="leftAlignedContainer">
                    <div>Direct Vol. 24H</div>
                    <div>{this.props.VOLUME24HOUR}</div>
                </div>
                <div className="leftAlignedContainer">
                    <div>Total Vol. 24H</div>
                    <div>{this.props.TOTALVOLUME24H}</div>
                </div>
                <div className="leftAlignedContainer">
                    <div>Market Cap</div>
                    <div>{this.props.MKTCAP}</div>
                </div>
            </div>
        );
    }
}

export default class CoinCurrencyCard extends React.Component<ICoinCurrencyDisplay, {}> {

    public coinCurency: string = "";

    constructor(props: ICoinCurrencyDisplay) {
        super(props);
        this.coinCurency = props.Coin + " - " + props.Currency
    }

    public render() {
        return (
            <div className="currencyCardRoot">
                <PriceCoinCurrencyComponent price={this.props.Fields!.PRICE} coinCurrency={this.coinCurency} />
                <VolumesComponent {...this.props.Fields!} />
            </div>

        );
    };
}