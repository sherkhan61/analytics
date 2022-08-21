import React from 'react';
import {
    AppstoreOutlined,
    DatabaseOutlined,
    FileProtectOutlined,
    HomeOutlined,
    InboxOutlined,
    PlaySquareOutlined,
    SecurityScanOutlined,
    SettingOutlined,
    UnorderedListOutlined,
    TeamOutlined
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import './layout-component.scss';
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";
import Nav from "../nav/Nav";


const {Header, Sider, Footer} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const items2 = [
    getItem((<Link to="/">Главная</Link>), '1', <HomeOutlined/>),
    getItem('Список', 'sub1', <UnorderedListOutlined/>, [
        getItem(
            (<Link to="/team">Команда</Link>), '4', <TeamOutlined />),
        getItem(
            (<Link to="/systems">Испытания</Link>), '5', <SecurityScanOutlined/>),
        getItem(
            (<Link to="/moz">МОЗ</Link>), '6', <AppstoreOutlined/>),
        getItem(
            (<Link to="/mobf">МОБФ</Link>), '7', <FileProtectOutlined/>),
        getItem(
            (<Link to="/video-seminars">Видеосеминары</Link>), '8', <PlaySquareOutlined/>),
    ]),
    getItem('Сервисы', 'sub2', <SettingOutlined/>, [
        getItem(
            (<Link to="/archive">Архив</Link>), '9', <InboxOutlined/>),
        getItem(
            (<Link to="/cod">ЦОД</Link>), '10', <DatabaseOutlined/>),]),
];


const LayoutComponent = (props) => {
    let {children} = props

    return (
        <Layout>
            <Header className="header-ant" style={{background: 'linear-gradient(to right, #334155 0%, #1e293b 100%)'}}>
                <div>
                    <Link to="/" className="logo">
                        <img src={logo} alt="sts" className="logo-image"/>
                        <span className="logo-text">Аналитика</span>
                    </Link>
                </div>
                <Nav/>
            </Header>
            <Layout>
                <Sider
                    breakpoint="lg"
                    width={200}
                    collapsedWidth={80}
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    className="site-layout-background">
                    <Menu mode="inline"
                          style={{
                              height: '100%',
                              borderRight: 0,
                          }}
                          defaultOpenKeys={['sub1', 'sub2']}
                          items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px',
                    }}
                >
                    {children}
                </Layout>
            </Layout>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                ©2022 Лаборатория безопасности инфокоммуникационных технологий
            </Footer>
        </Layout>
    )
};

export default LayoutComponent;
