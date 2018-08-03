"use strict";
const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const axios = require("axios");
const ipc = electron.ipcRenderer;
const Notification = electron.Notification;
const app = electron.app;



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
    let tpv = Number(arg);
    console.log("received targetPriceVal IPC", tpv);

    new window.Notification("sample", {
        body: "test bid"
    });

    let n = new electron.Notification();
    console.log(n);


    targetPrice.innerHTML = "$" + tpv.toLocaleString("en");
})