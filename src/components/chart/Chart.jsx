import React from "react";
import "./chart.scss";

import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis} from 'recharts';


const data = [
    { name: "Январь", Количество: 2 },
    { name: "Февраль", Количество: 3 },
    { name: "Март", Количество: 3 },
    { name: "Апрель", Количество: 4 },
    { name: "Май", Количество: 4 },
    { name: "Июнь", Количество: 6 },
];


const Chart = ({ aspect, title }) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width="100%" height={250} data={data}
                           margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" color="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Количество" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;
