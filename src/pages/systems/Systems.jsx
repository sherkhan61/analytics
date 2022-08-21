import React from "react";
import "./systems.scss";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {
    CheckSquareOutlined,
    MonitorOutlined,
    ScheduleOutlined,
    SecurityScanOutlined,
    SolutionOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";
import video from "../../assets/video/video.mp4";
import {Link} from "react-router-dom";

const Systems = () => {

    let cards = [
        {
            id: 1,
            backgroundColor: 'blue',
            title: 'В работе',
            icon: <MonitorOutlined/>,
            link: 'progress'
        },
        {
            id: 2,
            backgroundColor: 'sky',
            title: 'На стадии заключения',
            icon: <SolutionOutlined/>,
            link: 'concluded'
        },
        {
            id: 3,
            backgroundColor: 'cyan',
            title: 'Планируются',
            icon: <ScheduleOutlined/>,
            link: 'planned'
        },
        {
            id: 4,
            backgroundColor: 'teal',
            title: 'Завершены',
            icon: <CheckSquareOutlined />,
            link: 'completed'
        }
    ]

    return (
        <LayoutComponent>
            <div className="breadcrumb">
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>
                        <UnorderedListOutlined/>
                        <span>Список</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <SecurityScanOutlined/>
                        <span>Испытания</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="systems-page">
                <div className="row">
                    {cards.map((card) => (
                        <div className="card-row" key={card.id}>
                            <Link to={`${card.link}`}>
                                <div className={`card card-hover ${card.backgroundColor}`}>
                                    <div className="card-body">
                                        <div className="card-icon">
                                            {card.icon}
                                        </div>
                                        <span className="card-title">{card.title}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <video className="system-video" playsInline autoPlay={true} muted={true} loop={true}>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </LayoutComponent>
    )
}

export default Systems
