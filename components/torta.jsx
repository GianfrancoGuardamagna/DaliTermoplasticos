'use client'

import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Torta() {
    const chartData = {
        labels: ["PP", "PEAD","PEBD"],
        datasets: [{
            label:"Toneladas",
            data: [81.6, 240, 158.4],
            backgroundColor: ['rgb(73, 159, 131)', 'rgb(159, 224, 203)', "rgb(46,92,77)"],
            borderColor: ['rgb(73, 159, 131)', 'rgb(159, 224, 203)', "rgb(46,92,77)"],
        }]
    };

    const chartOptions = {}

    return (
        <Doughnut className='h-full w-full' options={chartOptions} data={chartData}  />
    );
}