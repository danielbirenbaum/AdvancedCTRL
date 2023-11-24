const interval = 1000; // in ms
const maxPoints = 50; // for charts

const dataInfoFunc = {
	// Functions for data
	"cpu-usage": window.app.cpuUsage,
	"cpu-speed": window.app.cpuSpeed,
	"cpu-processes": window.app.cpuProcesses,
	"gpu-usage": window.app.gpuUsage,
	"ram-usage": window.app.ramUsage,
	"disk-layout": window.app.diskLayout,
	"disk-usage": window.app.diskUsage,
	"disk-read": window.app.diskRead,
	"disk-write": window.app.diskWrite,
};
const dataInfoTitleFunc = {
	// Functions for bar titles
	"cpu-usage": async () => (await window.app.cpuInfo()).brand,
	"gpu-usage": async () => (await window.app.gpuInfo()).model,
	"ram-usage": async () =>
		Math.floor((await window.app.ramInfo()).size / 1e9) + "GB",
	"disk-usage": async () => (await window.app.diskInfo()).name,
};
