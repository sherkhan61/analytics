import React from "react";
import {
    CheckSquareOutlined,
    FileProtectOutlined,
    MonitorOutlined,
    ScheduleOutlined,
    SolutionOutlined
} from "@ant-design/icons";




const SystemsWidgets = () => {

    let widgets = [
        {
            id: 1,
            icon: <MonitorOutlined/>,
            amount: 4,
            title: 'В работе'
        },
        {
            id: 2,
            icon: <SolutionOutlined/>,
            amount: 6,
            title: 'Заключается'
        },
        {
            id: 3,
            icon: <ScheduleOutlined/>,
            amount: 10,
            title: 'Планируется'
        },
        {
            id: 4,
            icon: <CheckSquareOutlined/>,
            amount: 20,
            title: 'Завершенные'
        },
    ]

    return (
        <div className="welcome-card">
            <div className="card-body">
                <h4 className="card-title">Добро пожаловать, Шерхан Тулкибай</h4>
                <h5 className="card-subtitle">Dashboard</h5>
                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '1.5rem'}}>
                    <div className="systems-info">
                        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                            <FileProtectOutlined style={{
                                color: '#fff', fontSize: 45, fontWeight: 300, lineHeight: 1.2
                            }}/>
                            <div style={{marginLeft: 8}}>
                                <h3 className="systems-amount">Количество</h3>
                                <span className="systems-name">Информационных систем на испытаний</span>
                            </div>
                        </div>
                    </div>
                    <div className="widgets-column">
                        <div className="widgets-row">
                            {widgets.map((widget) => (
                                <div className="widgets-cards" key={widget.id}>
                                    <div className="card">
                                        <div className="card-icon">
                                            {widget.icon}
                                        </div>
                                        <div>
                                            <h3 className="card-amount">{widget.amount}</h3>
                                            <span className="card-text">{widget.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemsWidgets;
