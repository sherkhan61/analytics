import React from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {FileProtectOutlined, UnorderedListOutlined} from "@ant-design/icons";



const MOBF = () => {
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
                        <FileProtectOutlined/>
                        <span>MOBF</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>MOBF</h1>
        </LayoutComponent>
    )
}

export default MOBF;
