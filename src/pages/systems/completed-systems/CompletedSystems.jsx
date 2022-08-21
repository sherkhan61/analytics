import React from "react";
import LayoutComponent from "../../../ui/layout/LayoutComponent";
import {Breadcrumb} from "antd";
import {CheckSquareOutlined, SecurityScanOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Tables from "../../../components/table/Table";


export const CompletedSystems = () => {
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
                        <CheckSquareOutlined/>
                        <span>Завершены</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="listContainer">
                    <Tables/>
                </div>
            </div>
        </LayoutComponent>
    )
}
