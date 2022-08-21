import React from "react";
import {useNavigate} from "react-router-dom";
import {Avatar, Dropdown, Menu, Space, Button} from "antd";
import avatar from "../../assets/images/photos/sherkhan.png";
import {DownOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";


const DropdownComponent = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        signOut(auth)
            .then(() => {
                // Sign-out successful
                localStorage.clear()
                navigate("/login")
            })
            .catch((error) => {
                console.log(error.message());
            });
    };

    const menu = (
        <Menu
            items={[
                {
                    label: 'Профиль',
                    key: '1',
                    icon: <UserOutlined/>,
                },
                {
                    label: (
                        <Button onClick={handleLogout} style={{padding: 0, backgroundColor: "transparent", border: "none"}}>
                            Выйти
                        </Button>
                    ),
                    key: '2',
                    icon: <LogoutOutlined/>,
                },
            ]}
        />
    );

    return (
        <Space>
            <Dropdown overlay={menu}>
                <Space>
                    <Avatar src={avatar}/>
                    <span className="dropdown">
                        <span className="username">Шерхан Тулкибай</span>
                        <DownOutlined style={{marginLeft: 5}}/>
                    </span>
                </Space>
            </Dropdown>
        </Space>
    )
}

export default DropdownComponent
