document.getElementById("navbar-close").addEventListener("click", () => {
	window.electron.appQuit();
});

async function getCpuUsage() {
	const usage = await window.electron.cpuUsage();
	return usage;
}

setInterval(async () => {
	console.log(await getCpuUsage())
}, 1000)

