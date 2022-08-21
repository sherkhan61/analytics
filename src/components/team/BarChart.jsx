import React from 'react';
import { Bar } from '@ant-design/plots';


const TeamBarChart = () => {
    const data = [
        {
            workType: 'АИК',
            value: 4,
        },
        {
            workType: 'ФИБ',
            value: 5,
        },
        {
            workType: 'ОПОИБ',
            value: 4,
        },
        {
            workType: 'Нагрузка',
            value: 4,
        },
        {
            workType: 'ОСИ',
            value: 5,
        },
    ];
    const config = {
        data,
        xField: 'value',
        yField: 'workType',
        seriesField: 'workType',
        legend: {
            position: 'top-left',
        },
    };
    return <Bar {...config} />;
};

export default TeamBarChart;
