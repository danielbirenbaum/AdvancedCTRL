const interval = 500; // in ms
const maxPoints = 120;

const dataInfoFunc = {
	// Functions for bar data
	"cpu-usage": window.app.cpuUsage,
	"gpu-usage": window.app.gpuUsage,
	"ram-usage": window.app.ramUsage,
	"disk-usage": window.app.diskUsage,
};

// Get all charts
const charts = document.getElementsByClassName("monitor-chart");

// Chart settings
const data = [
	{
		y: [],
		type: "line",
		mode: "lines",
		fill: "tozeroy",
		type: "scatter",
		fillcolor: "#2c768857",
		marker: {
			color: "#45afc9",
		},
	},
];

const layout = {
	height: 190,
	paper_bgcolor: "rgba(0, 0, 0, 0)",
	plot_bgcolor: "rgba(0, 0, 0, 0)",
	margin: {
		l: 0,
		r: 40,
		b: 0,
		t: 0,
	},
	yaxis: {
		showgrid: false,
		fixedrange: true,
		range: [0, 100],
	},
	xaxis: {
		showgrid: false,
		fixedrange: true,
	},
	scrollZoom: false,
	setBackground: false,
	editable: false,
	displayModeBar: false,
};

const config = {
	displayModeBar: false,
	scrollZoom: false,
};

function createPlot(divId) {
	let chartData = data;
	Plotly.newPlot(divId, chartData, layout, config);

	setInterval(async () => {
		Plotly.extendTraces(divId, { y: [[await dataInfoFunc[divId]()]] }, [0]);
		if (chartData[0].y.length > maxPoints) chartData[0].y.shift();
	}, interval);
}

for (let i = 0; i < charts.length; i++) {
	createPlot(charts[i].getAttribute("id"));
}
