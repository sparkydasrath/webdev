import * as React from "react";
import "./App.css";
import * as electron from "electron";
import * as path from 'path';
import * as url from 'url';
import axios from "axios";


export default class App extends React.Component<{}, { price: any }> {

    private addWindow: electron.BrowserWindow | null = null;

    constructor(props) {
        super(props);
        this.state = {
            price: "Loading...."
        };
    }

    private createWindow(): electron.BrowserWindow {

        let bw = new electron.remote.BrowserWindow({
            width: 400,
            height: 200,
            frame: true,
            transparent: false,
            alwaysOnTop: true
        });

        return bw;
    }

    handleNotifyBtnClicked = (): void => {
        this.addWindow = this.createWindow();
        // this.addWindow.webContents.openDevTools();

        this.addWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, './add.html'),
                protocol: 'file:',
                slashes: true,
            })
        );

        this.addWindow.on("close", () => {
            this.addWindow = null;
        });


        this.addWindow.show();
    };

    getBtc = () => {
        axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD")
            .then(res => {
                const cryptos = (res.data.BTC.USD).toLocaleString("en");
                this.setState({ price: cryptos });
            })
    }

    componentDidMount() {
        this.getBtc();
        setInterval(this.getBtc, 10000);
    }

    public render() {
        return (

            <div className="row">
                <div id="price-container">
                    <p className="subtext">Current BTC Px</p>
                    <h1 id="price">{this.state.price}</h1>
                </div>

                <div id="goal-container">
                    <p>
                        {/* <img src="../assets/images/up.svg" alt="up " /> */}
                        <span id="targetPrice">Choose a target Price</span>
                    </p>
                </div>

                <div id="right-container">
                    <button id="notifyBtn" onClick={this.handleNotifyBtnClicked}>Notify me when...</button>
                </div>

            </div>
        );
    }
}