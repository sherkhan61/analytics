import React from 'react';
import { Column } from '@ant-design/plots';

const SystemsColumnFirstPart = () => {
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

export default SystemsColumnFirstPart;
