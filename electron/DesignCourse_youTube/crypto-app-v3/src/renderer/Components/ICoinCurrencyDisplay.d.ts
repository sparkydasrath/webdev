interface ICommonProperties {
    FROMSYMBOL: string;
    TOSYMBOL: string;
    MARKET: string;
    PRICE: string;
}
interface ICoinCurrencyDisplay {
    DISPLAY: {
        BTC?: {
            USD: ICommonProperties;
            EUR: ICommonProperties;
            JPY: ICommonProperties;
        };
        ETH?: {
            USD: ICommonProperties;
        };
    };
}
//# sourceMappingURL=ICoinCurrencyDisplay.d.ts.map