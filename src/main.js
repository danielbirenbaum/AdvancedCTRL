// Modules to control application life and create native browser window
const { app, shell, BrowserWindow, ipcMain, webContents } = require("electron");
const path = require("path");
const { electronApp, optimizer } = require("@electron-toolkit/utils");

const si = require("systeminformation");
const { PowerShell } = require("node-powershell");

function createWindow() {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 700,
		show: false,
		resizable: false,
		autoHideMenuBar: true,
		// titleBarStyle: "hidden",

		...(process.platform === "linux"
			? {
					icon: path.join(__dirname, "../resources/icon.png"),
			  }
			: {}),
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			sandbox: false,
		},
	});
	mainWindow.webContents.openDevTools();
	// mainWindow.setMenu(null);

	mainWindow.on("ready-to-show", () => {
		mainWindow.show();
	});

	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url);
		return { action: "deny" };
	});

	// and load the index.html of the app.
	mainWindow.loadFile(path.join(__dirname, "index.html"));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	// Set app user model id for windows
	electronApp.setAppUserModelId("com.electron");

	// Default open or close DevTools by F12 in development
	// and ignore CommandOrControl + R in production.
	// see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
	app.on("browser-window-created", (_, window) => {
		optimizer.watchWindowShortcuts(window);
	});

	createWindow();

	app.on("activate", function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit app
ipcMain.on("app-quit", function () {
	app.quit();
});

// SYSTEM INFORMATION

// Get CPU usage (in %)
ipcMain.handle("cpu/usage", async (_) => {
	return (await si.currentLoad()).currentLoad;
});

// Get CPU speed (in GHz)
ipcMain.handle("cpu/speed", async (_) => {
	return (await si.cpuCurrentSpeed()).avg;
});

// Get number of processes
ipcMain.handle("cpu/processes", async (_) => {
	return (await si.processes()).all;
});

// Get CPU information (model, cores, etc.)
ipcMain.handle("cpu/info", async (_) => {
	return await si.cpu();
});

// Get GPU usage (in %)
ipcMain.handle("gpu/usage", async (_) => {
	const ps = new PowerShell({
		executionPolicy: "Bypass",
		noProfile: true,
	});

	const command = PowerShell.command`Write-Output (((Get-Counter "\\GPU Engine(*engtype_3D)\\Utilization Percentage").CounterSamples | where CookedValue).CookedValue | measure -sum).sum`;
	const output = await ps.invoke(command);

	ps.dispose();
	return parseFloat(output.raw);
});

// Get GPU information (model, vendor, etc.)
ipcMain.handle("gpu/info", async (_) => {
	return (await si.graphics()).controllers[0];
});

// Get RAM usage (in %)
ipcMain.handle("ram/usage", async (_) => {
	const mem = await si.mem();
	return (mem.used * 100) / mem.total;
});

// Get RAM information (size, type, etc.)
ipcMain.handle("ram/info", async (_) => {
	return (await si.memLayout())[0];
});

// Get disk usage
ipcMain.handle("disk/usage", async (_) => {
	return (await si.fsSize())[0].use;
});

// Get disk information (type, name, etc.)
ipcMain.handle("disk/info", async (_) => {
	return (await si.diskLayout())[0];
});
