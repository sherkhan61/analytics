import React from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {DatabaseOutlined, SettingOutlined} from "@ant-design/icons";



const COD = () => {
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
                        <DatabaseOutlined/>
                        <span>ЦОД</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>COD</h1>
        </LayoutComponent>
    )
}

export default COD;
