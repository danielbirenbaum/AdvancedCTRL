// Get all texts to replace
const texts = document.getElementsByClassName("replace-text");
console.log(texts);

// Replace texts
(async () => {
	const cpuInfo = await window.app.cpuInfo();
	const ramInfo = await window.app.ramInfo();
	const ramTotal = Math.floor((await window.app.ramInfo()).size / 1e9) + "GB";

	for (let i = 0; i < texts.length; i++) {
		const attr = texts[i].getAttribute("data-info");
		let text = "";

		if (attr == "cpu-manufacturer") text = cpuInfo.manufacturer;
		else if (attr == "cpu-brand") text = cpuInfo.brand;
		else if (attr == "cpu-base-speed") text = cpuInfo.speed + " GHz";
		else if (attr == "cpu-cores") text = cpuInfo.cores;
		else if (attr == "ram-total") text = ramTotal;
		else if (attr == "ram-type") text = ramInfo.type;

		texts[i].innerHTML = text;
	}
})();
