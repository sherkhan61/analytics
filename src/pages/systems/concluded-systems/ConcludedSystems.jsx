import React from "react";
import LayoutComponent from "../../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {SecurityScanOutlined, SolutionOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


export const ConcludedSystems = () => {
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
                        <SolutionOutlined/>
                        <span>На стадии заключения</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </LayoutComponent>
    )
}
