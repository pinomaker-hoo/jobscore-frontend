// ** Chart Imports
import ReactApexChart from '../apexcharts'
import { ApexOptions } from 'apexcharts'

interface DounetChartProps {
  height: number
  series: number
}

const DounetChart = ({ height, series }: DounetChartProps) => {
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      offsetY: -10,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -110,
        endAngle: 110,
        hollow: {
          margin: 0,
          size: '50%',
          background: 'none',
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#e7e7e7',
          strokeWidth: '90%',
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'gradient',
      colors: ['#C1C3F8', '#A39FFF', '#6176FF'],
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
      },
    },
    labels: [''],
  }

  return (
    <ReactApexChart
      series={[series]}
      height={height}
      type="radialBar"
      toolbar={{ show: true }}
      options={options}
    />
  )
}

export default DounetChart
