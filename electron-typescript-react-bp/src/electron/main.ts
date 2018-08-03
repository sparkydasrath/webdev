import { app, BrowserWindow } from 'electron'
import { request } from 'http'

const url = `http://localhost:8080`
let win: BrowserWindow | null

// Wait for the webpack server to be up and running
function waitForResponse(): Promise<void> {
	return new Promise<void>(async (resolve) => {
		request({
			hostname: 'localhost',
			port: 8080,
			path: '/',
			method: 'GET',
		}, () => resolve())
			.on('error', () => waitForResponse().then(resolve))
			.end()
	})
}

function createWindow() {

	win = new BrowserWindow({})

	waitForResponse().then(() => {
		win.loadURL(url)
	})

	// Show dev tools
	win.webContents.openDevTools()
	win.on('closed', (): void => win = null)
}


app.on('ready', createWindow)

app.on('activate', (): void => {
	if (win === null) createWindow()
})

app.on('window-all-closed', (): void => {
	if (process.platform != 'darwin') app.quit()
})