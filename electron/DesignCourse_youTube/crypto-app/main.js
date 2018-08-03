const {
    app,
    BrowserWindow,
    Menu,
    ipcMain,
} = require('electron')
const shell = require("electron").shell;
const ipc = ipcMain;
// const {
//     Notification
// } = require("electron");
const {
    ToastNotification
} = require("electron-windows-notifications")
const appId = "electron-windows-notifications";
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600
    })

    // and load the index.html of the app.
    win.loadFile('src/index.html')

    // app.setAppUserModelId("com.companyName.softwareName");
    // app.setAsDefaultProtocolClient('xxxxx');
    // let nt = new Notification({
    //     title: "sample",
    //     body: "test"
    // });
    // nt.show();

    let notification = new ToastNotification({
        appId: appId,
        template: `<toast><visual><binding template="ToastText01"><text id="1">%s</text></binding></visual></toast>`,
        strings: ['Hi!']
    });
    notification.show();

    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

let menu = Menu.buildFromTemplate([{
        label: "Menu",
        submenu: [{
                label: "Adjust notification value"
            },
            {
                label: "CoinMarketCap",
                click() {
                    shell.openExternal("http://coinmarketcap.com")
                }
            },
            {
                type: "separator"
            },
            {
                label: "Exit",
                click: () => app.quit()
            },
        ]
    },
    {
        label: "Edit",
        submenu: [{
                role: "copy",
            },
            {
                role: "cut"
            }
        ]
    }

]);

Menu.setApplicationMenu(menu);



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});

ipc.on("update-notify-value", (event, arg) => {
    win.webContents.send("targetPriceVal", arg);
});