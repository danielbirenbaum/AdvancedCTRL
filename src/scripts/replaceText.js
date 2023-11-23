// Get all texts to replace
const texts = document.getElementsByClassName("replace-text");
console.log(texts);

// Replace texts
(async () => {
	const cpuInfo = await window.app.cpuInfo();
	const gpuInfo = await window.app.gpuInfo();
	const ramInfo = await window.app.ramInfo();

	for (let i = 0; i < texts.length; i++) {
		const attr = texts[i].getAttribute("data-info");
		let text = "";

		if (attr == "cpu-manufacturer") text = cpuInfo.manufacturer;
		else if (attr == "cpu-brand") text = cpuInfo.brand;
		else if (attr == "cpu-base-speed") text = cpuInfo.speed + " GHz";
		else if (attr == "cpu-cores") text = cpuInfo.cores;
		else if (attr == "gpu-vendor") text = gpuInfo.vendor;
		else if (attr == "gpu-model") text = gpuInfo.model;
		else if (attr == "ram-total") text = Math.floor(ramInfo.size / 1e9) + "GB";
		else if (attr == "ram-type") text = ramInfo.type;

		texts[i].innerHTML = text;
	}
})();
