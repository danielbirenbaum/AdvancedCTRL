const interval = 1000; // in ms

const dataInfoFunc = {
	// Functions for bar data
	"cpu-usage": window.app.cpuUsage,
	"gpu-usage": () => 0,
	"ram-usage": window.app.ramUsage,
	"disk-usage": window.app.diskUsage,
};
const dataInfoTitleFunc = {
	// Functions for bar title
	"cpu-usage": async () => (await window.app.cpuInfo()).brand,
	"gpu-usage": async () => (await window.app.gpuInfo()).model,
	"ram-usage": async () => (await window.app.ramInfo()).type,
	"disk-usage": async () => (await window.app.diskInfo()).name,
};

// Get all bars
const bars = document.getElementsByClassName("homepage-bar");

// Set bar titles
for (let i = 0; i < bars.length; i++) {
	(async () => {
		const val =
			await dataInfoTitleFunc[bars[i].getAttribute("data-info")]();
		bars[i].getElementsByClassName("homepage-bar-title")[0].innerHTML = val;
	})();
}

// Update bar titles
setInterval(() => {
	for (let i = 0; i < bars.length; i++) {
		(async () => {
			const val =
				Math.round(
					(await dataInfoFunc[bars[i].getAttribute("data-info")]()) *
						100,
				) /
					100 +
				"%";

			bars[i].getElementsByClassName("homepage-bar-line")[0].style.width =
				val;
			bars[i].getElementsByClassName("homepage-bar-data")[0].innerHTML =
				val;
		})();
	}
}, interval);
