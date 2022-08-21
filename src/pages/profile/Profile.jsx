import React, {useEffect, useState} from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import {Badge, Breadcrumb, Image} from "antd";
import {TeamOutlined, UnorderedListOutlined, UserOutlined} from "@ant-design/icons";
import "./profile.scss";
import {Link, useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase";
import { Tabs } from 'antd';
import SystemsColumnYear from "../../components/systems/systems-column/SystemsColumnYear";
import logo from "../../assets/images/logo.png";
import ListComponent from "../../components/list-component/ListComponent";


const { TabPane } = Tabs;

const Profile = () => {
    const [user, setUser] = useState({});
    const {displayName, position, typeWork, status, img} = user;
    const {id} = useParams();

    /*useEffect(() => {
        id && getSingleUser();
    }, )

    const getSingleUser = async () => {
        const docRef = doc(db, "users", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setUser({...snapshot.data()});
        } else {
            setUser({});
        }
    }*/

    useEffect(() => {
        const getSingleUser = async () => {
            const docRef = doc(db, "users", id);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                setUser({...snapshot.data()});
            } else {
                setUser({});
            }
        }
        getSingleUser();
    }, [id])

    console.log(user)

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <LayoutComponent>
            <div className="profile-page">
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
                            <Link to={`/team`}>
                                <TeamOutlined/>
                                <span>Команда</span>
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <UserOutlined/>
                            <span>Профиль</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="card-row">
                    <div className="team-card">
                        <div className="background-image"></div>
                        <div>
                            <img src={logo} alt="" className="logo-in-wallpaper"/>
                        </div>
                        <div className="content">
                            <div className="imgBx">
                                <Image src={img} width={90}/>
                            </div>
                            <div className="contentBox">
                                <h4>{displayName}</h4>
                                <h5>{position}</h5>
                                <h5 style={{color: '#0e7490'}}>{typeWork}</h5>
                                <h5>
                                    <Badge status="success"/>
                                    <span>{status}</span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="description-card">
                        <div className="description-tabs">
                            <div className="card-title">Ключевые показатели эффективности (KPI)</div>
                            <Tabs defaultActiveKey="1" onChange={onChange}>
                                <TabPane tab="KPI по испытаниям" key="1">
                                    <SystemsColumnYear />
                                </TabPane>
                                <TabPane tab="KPI по поручениям" key="2">
                                    <ListComponent />
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default Profile;
