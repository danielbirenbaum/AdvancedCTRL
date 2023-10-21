const bars = document.getElementsByClassName("homepage-bar");

setInterval(() => {
	for (let i = 0; i < bars.length; i++) {
		const val = Math.round(Math.random() * 100);
		bars[i].getElementsByClassName("homepage-bar-line")[0].style.width =
			val + "%";
		bars[i].getElementsByClassName("homepage-bar-data")[0].innerHTML =
			val + "%";
	}
}, 1000);
