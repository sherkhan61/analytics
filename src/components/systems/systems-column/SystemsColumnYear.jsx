import React from 'react';
import { Column } from '@ant-design/plots';

const SystemsColumnYear = () => {
    const data = [
        {
            month: 'Январь',
            systems: 3,
        },
        {
            month: 'Февраль',
            systems: 3,
        },
        {
            month: 'Март',
            systems: 4,
        },
        {
            month: 'Апрель',
            systems: 5,
        },
        {
            month: 'Май',
            systems: 5,
        },
        {
            month: 'Июнь',
            systems: 4,
        },
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
        },
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

export default SystemsColumnYear;
