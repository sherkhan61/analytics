import {Badge, Space} from "antd";
import {BellFilled} from "@ant-design/icons";
import React from "react";
import {Typography} from "antd";


const Notification = () => {
    const {Text} = Typography

    const notificationStyles = {
        marginRight: '5px',
        fontSize: '14px',
        fontWeight: 400,
        color: '#fff'
    }

    return (
        <Space style={{marginRight: 20}}>
            <div className="notification-icon">
                <span>
                    <Text style={notificationStyles}>Уведомления</Text>
                    <Badge count={5}>
                        <BellFilled style={{
                        fontSize: 18,
                        }}/>
                    </Badge>
                </span>
            </div>
        </Space>
    )
}

export default Notification
