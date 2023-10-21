// Functions to get data for each data-info bar attribute
const dataInfoFunc = {
	"cpu-usage": window.app.cpuUsage,
	"gpu-usage": window.app.cpuUsage,
	"ram-usage": window.app.cpuUsage,
	"disk-usage": window.app.cpuUsage,
};

// Functions to get title for each data-info bar attribute
const dataInfoTitleFunc = {
	"cpu-usage": async () => (await window.app.cpuInfo()).brand,
	"gpu-usage": async () => (await window.app.cpuInfo()).brand,
	"ram-usage": async () => (await window.app.cpuInfo()).brand,
	"disk-usage": async () => (await window.app.cpuInfo()).brand,
};

// All progress bars in page
const bars = document.getElementsByClassName("homepage-bar");

// Main
async function main() {
	// Set bar titles
	for (let i = 0; i < bars.length; i++) {
		const val =
			await dataInfoTitleFunc[bars[i].getAttribute("data-info")]();
		console.log(val);
		bars[i].getElementsByClassName("homepage-bar-title")[0].innerHTML = val;
	}

	// Update bars
	setInterval(async () => {
		for (let i = 0; i < bars.length; i++) {
			let val =
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
		}
	}, 1000);
}

main();
