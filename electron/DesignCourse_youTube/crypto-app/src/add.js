"use strict";
const electron = require('electron');
const remote = electron.remote;
const ipc = electron.ipcRenderer;

const closeBtn = document.getElementById("closeBtn");
const updateBtn = document.getElementById("updateBtn");
closeBtn.addEventListener("click", handleCloseBtnClicked);

function handleCloseBtnClicked(e) {
    let win = remote.getCurrentWindow();
    win.close();
}

updateBtn.addEventListener("click", () => {
    let valueToSend = document.getElementById("notifyVal").value;
    ipc.send("update-notify-value", valueToSend);
    let win = remote.getCurrentWindow();
    win.close();
});