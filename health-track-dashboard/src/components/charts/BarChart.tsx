import { } from 'chart.js/auto'
import { FC, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import { ChartData } from '../../types'

const formatTime = (time: number) => {
    const readableTime = new Date(time).toString()
    console.log(readableTime.slice(0));
    const day = readableTime.slice(0, 3)
    const hoursMinutesSeconds = readableTime.slice(16, 24)
    return `${day} ${hoursMinutesSeconds}`
}

const Chart: FC<{ data: ChartData[] }> = ({ data }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const options = {
        scales: {
            y: {
                ticks: {
                    color: 'black',
                    font: {
                        size: 12,
                    }
                },
                grid: {
                    color: 'black'
                }
            },
            x: {
                ticks: {
                    color: 'black',
                    font: {
                        size: 12
                    }
                }
            }
        },
    }

    const ctx = canvasRef.current?.getContext('2d')
    let redbackgroundGradient, yellowbackgroundGradient;

    if (ctx) {
        redbackgroundGradient = ctx.createLinearGradient(0, 0, 0, 700);

        redbackgroundGradient.addColorStop(0, 'rgba(245, 71, 73, 0.76)');
        redbackgroundGradient.addColorStop(0.5, 'rgba(245, 71, 73, 0.2)');

        yellowbackgroundGradient = ctx.createLinearGradient(0, 0, 0, 500);

        yellowbackgroundGradient.addColorStop(0, 'rgba(2,0,36,0.3)')
        yellowbackgroundGradient.addColorStop(0.35, 'rgba(9,9,121,0.3)')
        yellowbackgroundGradient.addColorStop(1, 'rgba(0,212,255,0.3)')
    }

    let chartdata = {
        labels: data?.map(item => {
            return formatTime(item.date)
        }),
        datasets: [
            {
                label: 'Temperature',
                data: data?.map(item => {
                    return item.body_temperature
                }),
                fill: true,
                backgroundColor: yellowbackgroundGradient,
                pointRadius: 5,
                pointBorderWidth: 2,
                tension: 0.4
            },
            {
                label: 'Heart Rate',
                data: data?.map(item => {
                    return item.heart_rate
                }),
                fill: true,
                backgroundColor: redbackgroundGradient,
                pointRadius: 3,
                pointBorderWidth: 1,
                tension: 0.3
            }
        ]
    }

    return (
        <div className='w-full'>
            <Line data={chartdata} options={options} width={900} height={500} ></Line>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default Chart;
