import React from 'react';
import { Divider, List } from 'antd';



const ListComponent = () => {

    const data = [
        'Направлена бюджетная заявка',
        'Направлена исходящее письмо в КИБ',
        'Проведено видеосеминар для команды',
        'Проведено пилотный проект по "Цифровому Казахстану"',
    ];

    return (
        <>
            <Divider orientation="left">1 квартал</Divider>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <Divider orientation="left">2 квартал</Divider>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <Divider orientation="left">3 квартал</Divider>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <Divider orientation="left">4 квартал</Divider>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </>
    )
}

export default ListComponent;
