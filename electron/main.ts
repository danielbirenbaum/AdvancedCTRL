import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";

const si = require("systeminformation");

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
	? process.env.DIST
	: path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
	win = new BrowserWindow({
		icon: path.join(process.env.VITE_PUBLIC, "assets\\icons\\icon.ico"),
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},

		width: 1400,
		height: 800,
		resizable: false,
		autoHideMenuBar: true,
		titleBarStyle: "hidden",
	});
	win.setMenu(null);

	// Test active push message to Renderer-process.
	win.webContents.on("did-finish-load", () => {
		win?.webContents.send(
			"main-process-message",
			new Date().toLocaleString()
		);
	});

	if (VITE_DEV_SERVER_URL) {
		win.loadURL(VITE_DEV_SERVER_URL);
	} else {
		// win.loadFile('dist/index.html')
		win.loadFile(path.join(process.env.DIST, "index.html"));
	}
	win.webContents.openDevTools();

	ipcMain.on("quit-app", () => {
		app.quit();
	});
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
		win = null;
	}
});

app.on("activate", () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// SYSTEM INFORMATION
ipcMain.on("get-cpu-info", async (event) => {
	try {
		event.sender.send("cpu-info", await si.cpu());
	} catch (e) {
		console.log(e);
	}
});
ipcMain.on("get-cpu-usage", async (event) => {
	try {
		event.sender.send("cpu-usage", (await si.currentLoad()).currentLoad);
	} catch (e) {
		console.log(e);
	}
});

// TODO: Alterar a biblioteca para pegar corretamente o uso da cpu
ipcMain.on("get-gpu-usage", async (event) => {
	try {
		event.sender.send("gpu-usage", await si.graphics());
	} catch (e) {
		console.log(e);
	}
});

ipcMain.on("get-ram-usage", async (event) => {
	try {
		event.sender.send("ram-usage", await si.mem());
	} catch (e) {
		console.log(e);
	}
});

app.whenReady().then(createWindow);
