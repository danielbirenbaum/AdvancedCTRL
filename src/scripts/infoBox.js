// Get all boxes
const boxes = document.getElementsByClassName("info-box");

// Set up boxes

// Update
for (let i = 0; i < boxes.length; i++) {
	setInterval(async () => {
		boxes[i].getElementsByClassName("info-box-data")[0].innerHTML =
			Math.round(
				(await dataInfoFunc[boxes[i].getAttribute("data-info")]()) *
					100,
			) / 100;
	}, interval);
}
