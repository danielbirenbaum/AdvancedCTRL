// Get all texts to replace
const texts = document.getElementsByClassName("replace-text");
console.log(texts);

// Replace texts
(async () => {
	const cpuInfo = await window.app.cpuInfo();

	for (let i = 0; i < texts.length; i++) {
		const attr = texts[i].getAttribute("data-info");
		let text = "";

		if (attr == "cpu-manufacturer") text = cpuInfo.manufacturer;
		else if (attr == "cpu-brand") text = cpuInfo.brand;
		else if (attr == "cpu-base-speed") text = cpuInfo.speed + " GHz";
		else if (attr == "cpu-cores") text = cpuInfo.cores;

		texts[i].innerHTML = text;
	}
})();
