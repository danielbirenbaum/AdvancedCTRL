import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HomepageChartProps {
  title: String,
}

const HomepageChart = (props: HomepageChartProps) => {
  const data = [1, 2, 3, 5, 3, 2, 5, 1, 3, 7];
  
  return (
    <div className="homepage-chart">
      <div className="homepage-chart-caption"><b>{ props.title }</b></div>
      <Line data={{
          labels: data.map((x, idx) => idx),
          datasets: [
          {
            label: 'Dataset 1',
            data: data,
            borderColor: '#f2e2d4',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          ]
      }} options={{
        scales: {
          y: { ticks: { display: false } },
          x: { ticks: { display: false } }
        },
        plugins: {
          legend: { display: false },
        }
      }}/>
    </div>
  );
}

export default HomepageChart;