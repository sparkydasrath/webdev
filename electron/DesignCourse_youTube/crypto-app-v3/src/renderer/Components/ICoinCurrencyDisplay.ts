interface ICommonProperties {
    CHANGE24HOUR: string,
    CHANGEDAY: string,
    CHANGEPCT24HOUR: string,
    CHANGEPCTDAY: string,
    FROMSYMBOL: string,
    HIGH24HOUR: string,
    HIGHDAY: string,
    LASTMARKET: string,
    LASTTRADEID: string,
    LASTUPDATE: string,
    LASTVOLUME: string,
    LASTVOLUMETO: string,
    LOW24HOUR: string,
    LOWDAY: string,
    MARKET: string,
    MKTCAP: string,
    OPEN24HOUR: string,
    OPENDAY: string,
    PRICE: string,
    SUPPLY: string,
    TOSYMBOL: string,
    TOTALVOLUME24H: string,
    TOTALVOLUME24HTO: string,
    VOLUME24HOUR: string,
    VOLUME24HOURTO: string,
    VOLUMEDAY: string,
    VOLUMEDAYTO: string,

}

interface ICoinCurrencyDisplay {
    DISPLAY: {
        BTC?: {
            USD: ICommonProperties,
            EUR: ICommonProperties,
            JPY: ICommonProperties
        },
        ETH?: {
            USD: ICommonProperties,
            EUR: ICommonProperties,
            JPY: ICommonProperties
        }
    }
}

