import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Paper } from '@mui/material';
import FilterByDate from '../Filter/FilterByDate';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.3)',
      hoverBorderColor: 'rgba(255, 99, 132, 1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Dataset 2',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(53, 162, 235, 0.3)',
      hoverBorderColor: 'rgba(53, 162, 235, 1)',
      data: [89, 50, 87, 60, 56, 5, 66],
    },

  ],
};

export function SimpleBarChart() {
  return (
    <Paper sx={{ width: '100%' }} elevation={2}>
      <Bar options={options} data={data} />
      <FilterByDate />
    </Paper>
  )
}
