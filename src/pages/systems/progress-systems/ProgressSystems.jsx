import React from "react";
import LayoutComponent from "../../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {MonitorOutlined, SecurityScanOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";



export const ProgressSystems = () => {
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
                        <Link to={'/systems'}>
                            <SecurityScanOutlined/>
                            <span>Испытания</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <MonitorOutlined/>
                        <span>В работе</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </LayoutComponent>
    )
}
