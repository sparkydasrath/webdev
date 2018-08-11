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
                <div className="coinCurrencyWrapper">
                    <div className="coinCurrency" >{this.props.coinCurrency}</div>
                </div>
                <div className="price">{this.props.price}</div>
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
            <div className="volumesContainer ">
                <div>
                    <div className="volContainerHeaderText">Direct Vol. 24H</div>
                    <div className="volContainerValueText" >{this.props.VOLUME24HOUR}</div>
                </div>
                <div>
                    <div className="volContainerHeaderText">Total Vol. 24H</div>
                    <div className="volContainerValueText" >{this.props.TOTALVOLUME24H}</div>
                </div>
                <div>
                    <div className="volContainerHeaderText">Market Cap</div>
                    <div className="volContainerValueText" >{this.props.MKTCAP}</div>
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