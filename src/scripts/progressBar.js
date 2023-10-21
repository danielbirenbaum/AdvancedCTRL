// Functions for each data-info bar attribute
const dataInfoFunc = {
	"cpu-usage": window.app.cpuUsage,
	"gpu-usage": window.app.cpuUsage,
	"ram-usage": window.app.cpuUsage,
	"disk-usage": window.app.cpuUsage,
};

// All progress bars in page
const bars = document.getElementsByClassName("homepage-bar");

setInterval(async () => {
	for (let i = 0; i < bars.length; i++) {
		let val =
			Math.round(
				(await dataInfoFunc[bars[i].getAttribute("data-info")]()) * 100,
			) /
				100 +
			"%";

		bars[i].getElementsByClassName("homepage-bar-line")[0].style.width =
			val;
		bars[i].getElementsByClassName("homepage-bar-data")[0].innerHTML = val;
	}
}, 1000);
