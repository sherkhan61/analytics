import React, {useEffect, useState} from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import "./team.scss";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";
import {Image, Button, Breadcrumb, Badge} from 'antd';
import {Link} from "react-router-dom";
import {TeamOutlined, UnorderedListOutlined} from "@ant-design/icons";
import logo from "../../assets/images/logo.png";


const Team = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        // LISTEN (REALTIME)
        const unsub = onSnapshot(
            collection(db, "users"),
            (snapShot) => {
                let list = [];
                snapShot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()});
                });
                setUsers(list);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []);

    console.log(users)

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
                        <TeamOutlined />
                        <span>Команда</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="team-page">
                <h1>Наша команда</h1>
                <div className="team-card-container">
                    {users.map((user) => (
                        <div className="team-card" key={user.id}>
                            <div className="background-image"></div>
                            <div>
                                <img src={logo} alt="" className="logo-in-wallpaper"/>
                            </div>
                            <div className="content">
                                <div className="imgBx">
                                    <Image src={user.img} width={90}/>
                                </div>
                                <div className="contentBox">
                                    <h4>{user.displayName}</h4>
                                    <h5>{user.position}</h5>
                                    <h5 style={{color: '#0e7490'}}>{user.typeWork}</h5>
                                    <h5>
                                        <Badge status="success" />
                                        <span>{user.status}</span>
                                    </h5>
                                </div>
                                <Link to={`profile/${user.id}`}>
                                    <Button type="primary">Посмотреть профиль</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutComponent>
    )
}

export default Team;
