// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require("electron");
const { electronAPI } = require("@electron-toolkit/preload");

contextBridge.exposeInMainWorld("app", {
	appQuit: () => ipcRenderer.send("app-quit"),

	cpuUsage: () => ipcRenderer.invoke("cpu/usage"),
	cpuSpeed: () => ipcRenderer.invoke("cpu/speed"),
	cpuProcesses: () => ipcRenderer.invoke("cpu/processes"),
	cpuInfo: () => ipcRenderer.invoke("cpu/info"),

	gpuUsage: () => ipcRenderer.invoke("gpu/usage"),
	gpuInfo: () => ipcRenderer.invoke("gpu/info"),

	ramUsage: () => ipcRenderer.invoke("ram/usage"),
	ramInfo: () => ipcRenderer.invoke("ram/info"),

	diskUsage: () => ipcRenderer.invoke("disk/usage"),
	diskInfo: () => ipcRenderer.invoke("disk/info"),
});
