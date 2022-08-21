import React from 'react';
import "./systems-amount.scss";



const SystemsAmount = () => {
    let systems = [
        {
            number: 1,
            month: 'Январь',
            amount: 3
        },
        {
            number: 2,
            month: 'Февраль',
            amount: 3
        },
        {
            number: 3,
            month: 'Март',
            amount: 4
        },
        {
            number: 4,
            month: 'Апрель',
            amount: 5
        },
        {
            number: 5,
            month: 'Май',
            amount: 5
        },
        {
            number: 6,
            month: 'Июнь',
            amount: 4
        },
        {
            number: 7,
            month: 'Июль',
            amount: 4
        },
        {
            number: 8,
            month: 'Август',
            amount: 6
        },
        {
            number: 9,
            month: 'Сентябрь',
            amount: 7
        },
        {
            number: 10,
            month: 'Октябрь',
            amount: 8
        },
        {
            number: 11,
            month: 'Ноябрь',
            amount: 10
        },
        {
            number: 12,
            month: 'Декабрь',
            amount: 8
        },
    ]

    return (
        <div className="systems-amount-value">
            <h4 className="amount-title">Количество испытаний</h4>
            <ul className="amount-list">
                {systems.map((system) => (
                    <li key={system.number}>
                        <span className="list-item-number">{system.number}</span>
                        <span className="list-item-month">{system.month}</span>
                        <span>{system.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SystemsAmount;
