import React from 'react';
import { Pie } from '@ant-design/plots';



const TeamPieChart = () => {
    const data = [
        {
            type: 'Главный инженер-программист',
            value: 1,
        },
        {
            type: 'Главный инженер-системотехник',
            value: 2,
        },
        {
            type: 'Главный аналитик',
            value: 1,
        },
        {
            type: 'Главный специалист',
            value: 11,
        },
        {
            type: 'Ведущий специалист',
            value: 4,
        },
        {
            type: 'Специалист',
            value: 2,
        },
        {
            type: 'Вакансия',
            value: 2,
        },
        {
            type: 'Руководитель',
            value: 1,
        },
        {
            type: 'Менеджер',
            value: 1,
        },
    ];
    const config = {
        data,
        locale: 'en-US',
        angleField: 'value',
        colorField: 'type',
        radius: 0.7,
        label: {
            type: 'outer',
            content: '{name} {value}',
        },
        legend: false,
        interactions: [
            {
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};

export default TeamPieChart;
