import React from 'react';
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
import { Paper, } from '@mui/material';
import FilterByDate from '../Filter/FilterByDate';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [200, 400, 500, 20, 200, 34, 333,],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [222, 22, 333, 44, 454, 555, 34],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function SimpleLineChart() {
  return (
    <Paper sx={{ width: '100%' }} elevation={2}>
      <Line options={options} data={data} />
      <FilterByDate />
    </Paper>
  )
}
