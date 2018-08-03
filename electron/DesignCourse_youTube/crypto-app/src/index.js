"use strict";
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const axios = require("axios");
const ipc = electron.ipcRenderer;
import {
    app,
    Notification
} from "electron";



let price = document.querySelector("h1");
let targetPrice = document.getElementById("targetPrice");
const notifyBtn = document.getElementById("notifyBtn");
notifyBtn.addEventListener("click", handleNotifyBtnClicked);
let tvp = 0;
const notification = {
    title: "BTC Alert",
    body: "BTC just beat your target px"
}

function getBTC() {
    axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD")
        .then(res => {
            const cryptos = res.data.BTC.USD;
            price.innerHTML = "$" + cryptos.toLocaleString("en");

            app.setAppUserModelId("appid");
            let nt = new Notification(notification.title, notification);
            nt.show();
            // myNotification.show();
            // if (tvp.innerHTML != "" && tvp < res.data.BTC.USD) {
            //     const myNotification = new Notification(notification.title, notification);
            // }
        })
}

getBTC();
//setInterval(getBTC, 10000);

function handleNotifyBtnClicked(e) {
    let win = new BrowserWindow({
        width: 400,
        height: 200,
        frame: false,
        transparent: true,
        alwaysOnTop: true
    });



    // win.setMenu(null);
    // win.setTitle("");

    win.on("close", () => {
        console.log("disposing modal window");
        win = null;
    });
    win.loadFile('src/add.html');
    win.show();
}

ipc.on("targetPriceVal", (event, arg) => {
    tpv = Number(arg);
    targetPrice.innerHTML = "$" + tpv.toLocaleString("en");
})