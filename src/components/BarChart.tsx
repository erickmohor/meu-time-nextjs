import React, { useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { TeamsStatisticsProps } from '@/app/information/types'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Gols marcados',
      color: '#cdcdcd',
      font: {
        size: 18
      }
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Minutos',
        color: '#abaaaa',
        font: {
          size: 16
        },
      },
      grid: {
        display: false,
      },
      ticks: {
        color: '#abaaaa',
        padding: 10,
      }
    },
    y: {
      title: {
        display: true,
        text: 'Gols',
        color: '#abaaaa',
        font: {
          size: 16
        }
      },
      grid: {
        color: 'rgba(144, 144, 144, 0.153)',
        tickLength: 0,
      },
      border: {
        color: 'rgba(144, 144, 144, 0.153)',
      },
      ticks: {
        color: '#abaaaa',
        padding: 10,
        stepSize: 1
      }
    },
  }
}

const labels = [
  '0-15',
  '16-30',
  '31-45',
  '46-60',
  '61-75',
  '76-90',
  '91-105',
  '106-120'
]

let data = {
  labels,
  datasets: [
    {
      label: 'Gols',
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgb(38, 154, 80)',
    },
  ],
}

interface BarChartProps {
  goals: TeamsStatisticsProps
}


export function BarChart({ goals }: TeamsStatisticsProps) {
  const goalsFor = goals?.for

  data.datasets[0].data = [
    Number(goalsFor.minute['0-15']?.total),
    Number(goalsFor.minute['16-30']?.total),
    Number(goalsFor.minute['31-45']?.total),
    Number(goalsFor.minute['46-60']?.total),
    Number(goalsFor.minute['61-75']?.total),
    Number(goalsFor.minute['76-90']?.total),
    Number(goalsFor.minute['91-105']?.total),
    Number(goalsFor.minute['106-120']?.total),
  ]

  return (
    <Bar
      className='max-w-[900px] max-h-[500px]'
      key={Math.random()}
      options={options}
      data={data}
    />
  )
}