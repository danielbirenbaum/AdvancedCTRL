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
				title="CPU"
				ipcEvent="get-cpu-usage"
				ipcChannel="cpu-usage"
			></HomepageChart>
			<HomepageChart
				title="RAM"
				ipcEvent="get-ram-usage"
				ipcChannel="ram-usage"
			></HomepageChart>
			<HomepageChart
				title="CPU"
				ipcEvent="get-cpu-usage"
				ipcChannel="cpu-usage"
			></HomepageChart>
		</div>
	);
}

export default HomepageScreen;
