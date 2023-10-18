import HomepageChart from "../HomepageChart";

function HomepageScreen() {
    return (
        <div id="homepage-grid">
            <HomepageChart title="CPU"></HomepageChart>
            <HomepageChart title="GPU"></HomepageChart>
            <HomepageChart title="Disco"></HomepageChart>
            <HomepageChart title="Memória"></HomepageChart>
        </div>
    );
}

export default HomepageScreen;
