// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require("electron");
const { electronAPI } = require("@electron-toolkit/preload");

contextBridge.exposeInMainWorld("electron", {
	appQuit: () => ipcRenderer.send("app-quit"),
});
