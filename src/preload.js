// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require("electron");
const { electronAPI } = require("@electron-toolkit/preload");

contextBridge.exposeInMainWorld("app", {
	appQuit: () => ipcRenderer.send("app-quit"),

	// SYSTEM INFORMATION
	cpuUsage: () => ipcRenderer.invoke("cpu/usage"),
	cpuSpeed: () => ipcRenderer.invoke("cpu/speed"),
	cpuInfo: () => ipcRenderer.invoke("cpu/info"),
});
