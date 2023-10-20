import Plot from "react-plotly.js";
import React, { useState } from "react";

interface HomepageChartProps {
	title: String;
}

// Source: https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb
export default class HomepageChart extends React.Component<HomepageChartProps> {
	maxPoints = 20;

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
				showgrid: false,
				fixedrange: true,
			},
			xaxis: {
				showgrid: false,
				fixedrange: true,
			},
			datarevision: 0,
		},
		revision: 0,
	};

	componentDidMount() {
		setInterval(this.updateGraphic, 1000);
	}

	updateGraphic = () => {
		const { line, layout } = this.state;
		line.y.push(Math.round(Math.random() * 5));

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
