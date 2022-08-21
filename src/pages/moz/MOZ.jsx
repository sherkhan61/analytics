import React from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {AppstoreOutlined, UnorderedListOutlined} from "@ant-design/icons";




const MOZ = () => {
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
                        <AppstoreOutlined/>
                        <span>MOZ</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>MOZ</h1>
        </LayoutComponent>
    )
}

export default MOZ;
