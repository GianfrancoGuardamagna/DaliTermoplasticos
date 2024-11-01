'use client'

import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import useWindowSize from '@/hooks/windowSize';

export default function Torta() {
    const size = useWindowSize()
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['PP', 'PEAD', 'PEBD'],
            datasets: [
                {
                    label: 'Toneladas recuperadas el 2024',
                    data: [250, 342, 408],
                    backgroundColor: ['rgb(73, 159, 131)', 'rgb(159, 224, 203)', "rgb(46,92,77)"],
                    borderColor: ['rgb(73, 159, 131)', 'rgb(159, 224, 203)', "rgb(46,92,77)"],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    if(size === 'isMobile') {
        return (
            <div className="card">
                <Chart type="doughnut" className='h-full w-full' options={chartOptions} data={chartData} />
            </div>
        )
    }if(size === 'isTablet') {
        return (
        <div className="card h-full w-full">
            <Chart type="bar" className='h-50 w-50' data={chartData} options={chartOptions} />
        </div>
        )
    }if(size === 'isDesktop'){
        return (
            <div className="card h-full w-full flex flex-row justify-around items-baseline xl:h-[500px]">
                <Chart type="doughnut" className='h-96 w-96' options={chartOptions} data={chartData} />
                <Chart type="bar" className='h-full w-[800px] flex' data={chartData} options={chartOptions} />
            </div>
            )
    } 
}