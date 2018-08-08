import * as React from "react";
import "./App.css";
import * as electron from "electron";
import * as path from 'path';
import * as url from 'url';


export default class App extends React.PureComponent {

    private addWindow: electron.BrowserWindow | null = null;

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