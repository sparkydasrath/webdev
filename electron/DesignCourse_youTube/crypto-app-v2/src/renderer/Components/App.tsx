import * as React from "react";
import "./App.css";
import * as electron from "electron";
const { BrowserWindow } = require('electron').remote


export default class App extends React.PureComponent {

    private addWindow: electron.BrowserWindow | null = null;

    private createWindow(): electron.BrowserWindow {
        console.log("creating add window");

        let bw = new BrowserWindow({
            width: 400,
            height: 200,
            frame: true,
            transparent: true,
            alwaysOnTop: true
        });

        console.log("value of addWindow", bw);

        return bw;
    }

    handleNotifyBtnClicked = (): void => {
        console.log("notify button clicked.....");

        this.addWindow = this.createWindow();


        this.addWindow.on("close", () => {
            console.log("disposing modal window");
            this.addWindow = null;
        });

        this.addWindow.loadFile("./Add.tsx");
        this.addWindow.show();
    };




    public render() {
        return (

            <div className="row">
                <div id="price-container">
                    <p className="subtext">Current BTC Px</p>
                    <h1 id="price">Loading....</h1>
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