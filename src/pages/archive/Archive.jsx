import React from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {InboxOutlined, SettingOutlined} from "@ant-design/icons";


const Archive = () => {
    return (
        <LayoutComponent>
            <div className="breadcrumb">
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>
                        <SettingOutlined/>
                        <span>Сервисы</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <InboxOutlined/>
                        <span>Архив</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>Архив</h1>
        </LayoutComponent>
    )
}

export default Archive;
