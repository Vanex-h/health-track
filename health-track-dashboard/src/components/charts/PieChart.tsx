/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChartData, Chart as ChartJS, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(...registerables);

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  }
};

export default function PieChart() {
  const data: ChartData<"pie", (number | [number, number] | unknown)[], unknown> = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'First Label',
        data: [
          100, 120, 130, 190, 200
        ],
        backgroundColor: ['#d3461c', '#f2ce2a', '#eae72f', '#29e020', '#1b8ce3'],
      }
    ]
  };

  return (
    <div className='w-full h-[35vh] bg-white min-w-[640px] shadow-md rounded-md px-6 py-3 relative flex flex-col justify-between'>
      {
        <Pie data={data} options={{ ...options, maintainAspectRatio: false }} style={{ height: '100%', width: '100%' }} />
      }
    </div>
  );
}
