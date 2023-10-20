import HomepageChart from "../HomepageChart";

function HomepageScreen() {
	return (
		<div id="homepage-grid">
			<HomepageChart
				title="CPU"
				ipcEvent="get-cpu-usage"
				ipcChannel="cpu-usage"
			></HomepageChart>
			<HomepageChart
				title="RAM"
				ipcEvent="get-ram-usage-percentage"
				ipcChannel="ram-usage-percentage"
			></HomepageChart>
		</div>
	);
}

export default HomepageScreen;
