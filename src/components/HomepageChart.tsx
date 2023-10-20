import Plot from "react-plotly.js";
import React from "react";

interface HomepageChartProps {
	title: string;
	ipcEvent: string;
	ipcChannel: string;
}

// Source: https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb
export default class HomepageChart extends React.Component<HomepageChartProps> {
	maxPoints = 100;

	state = {
		line: {
			x: [0],
			y: [0],
		},
		layout: {
			width: 390,
			height: 190,
			paper_bgcolor: "rgba(0, 0, 0, 0)",
			plot_bgcolor: "rgba(0, 0, 0, 0)",
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0,
			},
			yaxis: {
				showgrid: true,
				fixedrange: true,
				range: [0, 100],
			},
			xaxis: {
				showgrid: true,
				fixedrange: true,
			},
			datarevision: 0,
		},
		revision: 0,
	};

	componentDidMount = async () => {
		setInterval(this.updateGraphic, 1000);
	};

	updateGraphic = async () => {
		const { line, layout } = this.state;

		window.ipcRenderer.send(this.props.ipcEvent);
		window.ipcRenderer.on(this.props.ipcChannel, (event, arg) => {
			line.y.push(arg);
		});

		if (line.x.length >= this.maxPoints) {
			line.y.shift();
		} else {
			line.x.push(line.x.length + 1);
		}

		this.setState({ revision: this.state.revision + 1 });
		layout.datarevision = this.state.revision + 1;
	};

	render() {
		return (
			<div className="homepage-chart">
				<div className="homepage-chart-caption">
					<b>{this.props.title}</b>
				</div>
				<div className="homepage-chart-plot">
					<Plot
						data={[
							{
								...this.state.line,
								type: "scatter",
								mode: "lines",
								marker: {
									color: "white",
								},
							},
						]}
						layout={this.state.layout}
						revision={this.state.revision}
						config={{
							displayModeBar: false,
							scrollZoom: false,
						}}
					/>
				</div>
			</div>
		);
	}
}
