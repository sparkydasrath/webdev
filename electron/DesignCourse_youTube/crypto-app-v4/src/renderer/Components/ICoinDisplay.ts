import { ICoinCurrencyDisplay } from "./ICoinCurrencyDisplay";

export interface ICoinDisplay {
    Key: string,
    Coin: string,
    Currencies: Array<ICoinCurrencyDisplay>
}