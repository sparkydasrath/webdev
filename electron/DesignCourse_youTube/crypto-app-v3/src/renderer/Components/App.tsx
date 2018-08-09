import * as React from "react";
import "./App.css";
import axios from "axios";


interface IAppState {
    price: number,
    fullObj: {}
}


export default class App extends React.Component<{}, IAppState> {

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            fullObj: {
            }
        };
    }

    getBtc = () => {
        axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD")
            .then(res => {
                const cryptos = (res.data.BTC.USD).toLocaleString("en");
                this.setState({ price: cryptos });
            })

        fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD")
            .then(res => {
                let resJson = res.json();
                return resJson;
            })
            .then(data => {
                console.log("data = ", data);
                this.setState({ fullObj: { ...data.DISPLAY.BTC.USD } })
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
                        <div >
                            <span>{coin[0]}</span>
                            <span>{coin[1]}</span>
                        </div>);
                })}
            </div>

        );
    }

    public render() {
        return (this.printProperties(this.state.fullObj));
    }
}