import React from "react";
import "./table.scss";
import { Badge, Pagination } from 'antd';



const Tables = () => {

    const data = [
        {
            id: 20,
            system: `Программное обеспечение "Железный человек"`,
            applicant: "ВС США",
            workType: 5,
            year: 2022,
            typeContract: "ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 19,
            system: `Геоинформационный портал г. Париж`,
            applicant: "Французская Республика",
            workType: 4,
            year: 2022,
            typeContract: "ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 18,
            system: `Геоинформационный портал г.Милан`,
            applicant: "Итальянская Республика",
            workType: 5,
            year: 2022,
            typeContract: "ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 17,
            system: `Программное обеспечение "Конор Макгрегор"`,
            applicant: "Соединенное королевство Великобритании и Северной Ирландии",
            workType: 4,
            year: 2022,
            typeContract: "не ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 16,
            system: "Интернет-портал Systems",
            applicant: "АО ГТС",
            workType: 5,
            year: 2022,
            typeContract: "не ПГЗ",
            conclusion: "Соответствует",
            status: "Завершено",
            conclusionIndicator: "success",
            statusIndicator: "success"
        },
        {
            id: 15,
            system: `Программное обеспечение "Железный человек"`,
            applicant: "ВС США",
            workType: 5,
            year: 2022,
            typeContract: "ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 14,
            system: `Геоинформационный портал г. Париж`,
            applicant: "Французская Республика",
            workType: 4,
            year: 2022,
            typeContract: "ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 13,
            system: `Геоинформационный портал г.Милан`,
            applicant: "Итальянская Республика",
            workType: 5,
            year: 2022,
            typeContract: "ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 12,
            system: `Программное обеспечение "Конор Макгрегор"`,
            applicant: "Соединенное королевство Великобритании и Северной Ирландии",
            workType: 4,
            year: 2022,
            typeContract: "не ПГЗ",
            conclusion: "Не соответствует",
            status: "Завершено",
            conclusionIndicator: "error",
            statusIndicator: "success"
        },
        {
            id: 11,
            system: "Интернет-портал Systems",
            applicant: "АО ГТС",
            workType: 5,
            year: 2022,
            typeContract: "не ПГЗ",
            conclusion: "Соответствует",
            status: "Завершено",
            conclusionIndicator: "success",
            statusIndicator: "success"
        },
    ];


    return (
        <div className="table-container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        Таблица завершенных испытаний
                    </div>
                    <div className="selectInputs">
                        Select
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Объекты испытаний</th>
                                <th>Заявители</th>
                                <th>Виды испытаний</th>
                                <th>Год</th>
                                <th>Вид договора</th>
                                <th>Заключение</th>
                                <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((system) => (
                                <tr key={system.id}>
                                    <td>{system.system}</td>
                                    <td>{system.applicant}</td>
                                    <td>{system.workType}</td>
                                    <td>{system.year}</td>
                                    <td>{system.typeContract}</td>
                                    <td><Badge status={system.conclusionIndicator} />{system.conclusion}</td>
                                    <td><Badge status={system.statusIndicator} />{system.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tables;
