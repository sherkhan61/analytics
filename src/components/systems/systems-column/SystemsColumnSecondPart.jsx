import React from 'react';
import { Column } from '@ant-design/plots';

const SystemsColumnSecondPart = () => {
    const data = [
        {
            month: 'Июль',
            systems: 4,
        },
        {
            month: 'Август',
            systems: 6,
        },
        {
            month: 'Сентябрь',
            systems: 7,
        },
        {
            month: 'Октябрь',
            systems: 8,
        },
        {
            month: 'Ноябрь',
            systems: 10,
        },
        {
            month: 'Декабрь',
            systems: 8,
        }
    ];
    const config = {
        data,
        xField: 'month',
        yField: 'systems',
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            month: {
                alias: 'Месяц',
            },
            systems: {
                alias: 'Количество систем',
            },
        },
        minColumnWidth: 20,
        maxColumnWidth: 20,
    };
    return <Column {...config} />;
};

export default SystemsColumnSecondPart;
