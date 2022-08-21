import React from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import "./home.scss";
import SystemsWidgets from "../../components/systems/systems-widgets/SystemsWidgets";
import SystemsColumnTabs from "../../components/systems/systems-column-tabs/SystemsColumnTabs";
import TeamPieChart from "../../components/team/PieChart";
import SystemsAmount from "../../components/systems/systems-amount/SystemsAmount";
import TeamBarChart from "../../components/team/BarChart";
import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";


const Home = () => {

    return (
        <LayoutComponent>
            <div className="dashboard">
                <div className="breadcrumb">
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>
                            <HomeOutlined/>
                            <span>Главная</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="systems">
                    <SystemsWidgets />
                    <div className="systems-column">
                        <div className="column-card">
                            <div className="card-title">Статистика количеств испытаний</div>
                            <div className="card-body">
                                <SystemsColumnTabs />
                                <SystemsAmount />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <div className="card-body">
                        <div className="pie-card">
                            <div className="card-title">Состав команды по должностям</div>
                            <TeamPieChart />
                        </div>
                        <div className="bar-card">
                            <div className="card-title">Количество людей в команде по видам испытаний</div>
                            <TeamBarChart />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default Home;
